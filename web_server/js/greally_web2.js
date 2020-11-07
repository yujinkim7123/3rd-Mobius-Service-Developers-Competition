
window.onload = function () {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    document.getElementById("send").addEventListener('click', function (e) {
        e.preventDefault();
        sendEmail();   
        console.log("send email");
        alert('mail sending...');
        modal.style.display = "none";
        document.getElementById("later").disabled = true;
    });
    document.getElementById("later").addEventListener('click', function (e) {
        e.preventDefault();
        location.href='contact.html';
    });
    document.getElementById("quit").addEventListener('click', function (e) {
        e.preventDefault();
        location.href='index.html';
    });
}

var userId = "";
// sendState();
var data;
var data_;
var state;

  var ae = "zone2"; //Id(camera1)에 맞춰 수정 필요
  var cnt = "state";
  var cin = "0";
  var addr = "http://192.168.0.11:7599/rosemary";
  var settings;

  state = 3;
  addr = addr + "/" + ae + "/" + cnt;
  settings = {
    "async": true,
    "crossDomain": true,
    "url": addr,
    "method": "POST",
    "headers": {
      "Accept": "application/json",
      "X-M2M-RI": "12345",
      "X-M2M-Origin": "SxBMnw8TT5b",
      "Content-Type": "application/json; ty=4",
    },
    "data": "{\n    \"m2m:cin\": {\n        \"con\": \"" + cin + "\" \n    }\n}"
  }

  $.ajax(settings).done(function (response) {
      console.log(response);
    });

var settings = {
    "async": false,
    "crossDomain": true,
    "url": "http://192.168.0.11:7599/rosemary/zone2/currentUser/la",
    "method": "GET",
    "headers": {
        "Accept": "application/json",
        "X-M2M-RI": "1dfada2345",
        "X-M2M-Origin": "S20170717074825768bp2l",
        "Host": "http://192.168.0.11:7599"
    }
};
$.ajax(settings).done(function (response) {
    console.log(response);
    data = response["m2m:cin"];

    console.log(data);
    data_ = data["con"];

    var value = data_;
    console.log(value);

    userId = value;
});

var settings = {
    "async": false,
    "crossDomain": true,
    "url": "http://203.253.128.161:7579/Mobius/lsm/" + userId + "?lim=10&rcn=4",
    "method": "GET",
    "headers": {
        "Accept": "application/json",
        "X-M2M-RI": "1dfada2345",
        "X-M2M-Origin": "S20170717074825768bp2l",
        "Host": "203.253.128.161:7579"
    }
};

$.ajax(settings).done(function (response) {

    data = response["m2m:rsp"];

    data = data["m2m:cin"];

    console.log(data);
    for (var key in data) {
        data_ = data[key];

        data_ = data_["con"];

        url_ = data_["url"];
        var date = data_["date"];
        var gps = data_["gps"];
        var type = data_["type"];

        console.log(url_);
        console.log("\r\n\r\n");

        $("#start").prepend('<input id = "check" type="checkbox" name="box" value="수영"></input><li class="col-md-6"><a href="images/bw-1.png"><img alt="image" src="images/bw-1.png"><img alt="image" src="images/water.png"><div class="decription-wrap"><div class="image-bg"><p class="desc"></p></div></div></a></li>');

        var ph = document.getElementsByTagName("img");
        var ph1 = document.getElementsByTagName("a");
        var ph2 = document.getElementsByClassName("desc");
        var ph3 = document.getElementById("check");

        ph[2].src = url_;
        ph1[2].href = url_;
        ph2[0].innerHTML = "type: " + type + "<br>gps: " + gps + "<br>date: " + date;
        ph3.value = ph[2].src;

    }
});

function sendEmail(){
    var mailaddress=document.getElementById("inputmail").value
    var state;

    var ae = "zone2"; 
    var cnt = "email";
    var cin = mailaddress;
    var addr = "http://192.168.0.11:7599/rosemary";
    var settings;
    state = 3;
    addr = addr + "/" + ae + "/" + cnt;
    settings = {
        "async": true,
        "crossDomain": true,
        "url": addr,
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "X-M2M-RI": "12345",
            "X-M2M-Origin": "SxBMnw8TT5b",
            "Content-Type": "application/json; ty=4",
        },
        "data": "{\n    \"m2m:cin\": {\n        \"con\": \"" + cin + "\" \n    }\n}"
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}