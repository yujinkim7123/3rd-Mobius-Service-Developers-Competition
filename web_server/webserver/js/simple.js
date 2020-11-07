document.getElementById('send').addEventListener('submit', function (e) {
    e.preventDefault();
    var cnt = e.target.aename.value;
    var ae = "lsm";
    var addr = "http://203.253.128.161:7579/Mobius/" + ae + "/" + cnt;
    
    console.log(addr);

    if (!cnt) {
        return alert('Input number!');
    }
   
      
    var options = {
        "async": false,
        "crossDomain": true,
        "url": addr,
        "method": "GET",
        "headers": {
        "Accept": "application/json",
        "X-M2M-RI": "12345",
        "X-M2M-Origin": "SOrigin",
        }
    }
    
    $.ajax(options).done(function (response) {
    
        var response_key;
        for (var key in response) {
            response_key = key;
        }
        
        var rcv_data = response[response_key];
        rcv_data.rn;
        console.log(rcv_data.rn)
        window.location.href = "gallery_web.html?index=" + cnt;
               
    });
    
    $.ajax(options).fail(function (response) {
        
    	 var x = document.getElementById("change");
     	document.getElementById("change").innerHTML = "No number or wrong";
     	document.getElementById("change").style.color = "red";
       
    }); 
     
});
