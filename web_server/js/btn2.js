window.onload = function () {

  var userId = "000";
  userId = madeId();
  sendId(userId);
  sendId_R(userId);
  sendId_M(userId);

  console.log(userId);
  var state;

  var ae = "zone2"; //Id(camera1)에 맞춰 수정 필요
  var cnt = "state";
  var cin = "1";
  var addr = "http://192.168.0.11:7599/rosemary";
  var settings;

  console.log(cin);
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

    document.getElementById("Camera1").addEventListener('click', function (e) {
        e.preventDefault();

            location.href = "slide2.html";
   

    });
}

function madeId() {
    var charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var length = 5;
    var dest = "Y";
    var i = -1;
  
    while (length-- > 0) {
      var index = Math.floor(Math.random() * 26) + 1;
      var num = charset[index];
      dest += num;
    }
  
    console.log(dest);
  
    return dest;
  }
  
  function sendId(id) {
    var state;
  
    var ae = "zone2"; //Id(camera2)에 맞춰 수정 필요
    var cnt = "currentUser";
    var cin = id;
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
 
  function sendId_R(id) {
    var state;
  
    var ae = "zone2"; //Id(camera2)에 맞춰 수정 필요
    var cnt = id;
    var addr = "http://192.168.0.11:7599/rosemary";
    var settings;
  
    state = 2;
    addr = addr + "/" + ae;
    settings = {
      "async": true,
      "crossDomain": true,
      "url": addr,
      "method": "POST",
      "headers": {
        "Accept": "application/json",
        "X-M2M-RI": "12345",
        "X-M2M-Origin": "SxBMnw8TT5b",
        "Content-Type": "application/vnd.onem2m-res+json; ty=3",
      },
      "data": "{\n  \"m2m:cnt\": {\n    \"rn\": \"" + cnt + "\",\n    \"lbl\": [\"ss\"],\n    \"mbs\": 16384\n  }\n}"
    };
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  
  }

  function sendId_M(id) {
    var state;
  
    var ae = "lsm"; //Id(camera2)에 맞춰 수정 필요
    var cnt = id;
    var addr = "http://203.253.128.161:7579/Mobius";
    var settings;
  
    state = 2;
    addr = addr + "/" + ae;
    settings = {
      "async": true,
      "crossDomain": true,
      "url": addr,
      "method": "POST",
      "headers": {
        "Accept": "application/json",
        "X-M2M-RI": "12345",
        "X-M2M-Origin": "SxBMnw8TT5b",
        "Content-Type": "application/vnd.onem2m-res+json; ty=3",
      },
      "data": "{\n  \"m2m:cnt\": {\n    \"rn\": \"" + cnt + "\",\n    \"lbl\": [\"ss\"],\n    \"mbs\": 16384\n  }\n}"
    };
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  
 }

  