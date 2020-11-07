var rosemary = "192.168.0.11:7599/rosemary";
var ae = "/zone2"
var con = "/currentUser"

rosemary = rosemary + ae;



function getLastUser() {
    //console.log(rosemary);
    var addr = rosemary + con;

    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "http://" + addr + "/la",
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "X-M2M-RI": "1dfada2345",
            "X-M2M-Origin": "S20170717074825768bp2l",
            "Host": "203.253.128.161:7579",
        }
    }

    $.ajax(settings).done(function (response) {
        console.log('test1');
        console.log(response);
        var userid = response["m2m:cin"];
        userid = userid["con"];
        console.log('lastuser: ');
        console.log(userid);
        getUrl(userid);
    });

}


function getUrl(userid) {
    //console.log(rosemary);
    var addr = rosemary + "/" + userid;
    //var addr = rosemary + "/" + '1234';

    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "http://" + addr + "?lim=10&rcn=4",
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "X-M2M-RI": "1dfada2345",
            "X-M2M-Origin": "S20170717074825768bp2l",
            "Host": "203.253.128.161:7579",
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        data = response["m2m:rsp"];
        console.log(data);
        console.log('test');
        data = data["m2m:cin"];
        console.log(data);
        var len = Object.keys(data).length;
        console.log(len);


        for (i = len-1; i >= 0; i--) {
            var picidx = String(len -i) + " / " + String(len);
            console.log(picidx);


            var data_ = data[i];
            data_ = data_["con"];
            var picUrl = data_["url"];
            console.log(picUrl);
            getData(picUrl, picidx);


        }
    });
}



function getData(picUrl, picidx) {
    //console.log("\r\n\r\n");

    var container = document.getElementsByClassName("container");
   


    // create mySlides
    var slides = document.createElement("div");
    slides.className = "mySlides";

    // create number text
    var numberidx = document.createElement("div");
    numberidx.className = "numbertext";
    numberidx.textContent = picidx;

    // create image 
    var pic = document.createElement("img");
    pic.src = picUrl;
    pic.style = "width:100%; height: 100px";


    slides.appendChild(numberidx);
    slides.appendChild(pic);


    container[0].appendChild(slides);
}


var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);

}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;

}

getLastUser();
showSlides(slideIndex);