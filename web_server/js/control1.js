var camera = 1;
var image = document.getElementById('stream');

window.onload = function () {

  document.getElementById("Shoot1").addEventListener('click', function (e) {
    e.preventDefault();
    Control(camera, "5");
  });

  document.getElementById("Shoot1").addEventListener('click', function (e) {
    e.preventDefault();

    /* setInterval(function(){
     console.log("stream reset");
     var image=document.getElementById('stream');
     image.src="http://192.168.0.3:8091/?action=stream";},2000); */

  });

  document.getElementById("Up1").addEventListener('click', function (e) {
    e.preventDefault();
    Control(camera, "2");
  });

  document.getElementById("Down1").addEventListener('click', function (e) {
    e.preventDefault();
    Control(camera, "4");
  });

  document.getElementById("Left1").addEventListener('click', function (e) {
    e.preventDefault();
    Control(camera, "1");
  });

  document.getElementById("Right1").addEventListener('click', function (e) {
    e.preventDefault();
    Control(camera, "3");
  });

  this.document.getElementById("CAM1").addEventListener('click', function (e) {
    e.preventDefault();
    camera = 1;
    console.log(camera);
    image.src = "http://192.168.0.34:8091/?action=stream"
  });

  this.document.getElementById("CAM2").addEventListener('click', function (e) {
    e.preventDefault();
    location.href = 'slide1.html';
  });
}

function Control(num, action) {
  console.log(num);
  var state;

  var ae = "zone1";
  var cnt = "cam2";
  var cin = action;
  if (num == 1) {
    cnt = "cam2";
  } else {
    cnt = "cam2"; //추후 수정
  }
  if (action == 5) {
    setTimeout(function () {
      location.reload();
    }, 1000);
  }


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
}

  //added by sw////////////////////////////////////////////////
  //  console.log("stream stop");
  //  var image=document.getElementById('stream');
  //  image.src="images/waitlogo.png";
  //
  //  if (num == 1){
  //    setTimeout(function(){
  //      console.log("stream reset");
  //      var image=document.getElementById('stream');
  //      image.src="http://192.168.0.3:8091/?action=stream";},2000);
  //    setTimeout(function () {
  //      console.log("stream reset2");
  //      var image = document.getElementById('stream');
  //      image.src = "http://192.168.0.3:8091/?action=stream";},5000);
  //  } else {
  //    setTimeout(function(){
  //    console.log("stream reset");
  //    var image=document.getElementById('stream');
  //    image.src="http://192.168.0.35:8091/?action=stream";},2000);
  //  setTimeout(function () {
  //    console.log("stream reset2");
  //    var image = document.getElementById('stream');
  //    image.src = "http://192.168.0.35:8091/?action=stream";},5000);
  //  }
  //////////////////////////////////////////////////////////////
  // image.src = "http://192.168.0.35:8091/?action=stream";},5000);