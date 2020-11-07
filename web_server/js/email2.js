window.onload = function () {
    document.getElementById("send").addEventListener('click', function (e) {
        e.preventDefault();
        sendEmail();   
        console.log("send email");
        alert('mail sending...');

    });
}

function sendEmail(){
    var mailaddress=document.getElementById("email").value
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
