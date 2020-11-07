$("#start").empty();

var settings = {
    "async": false,
    "crossDomain": true,
    "url": "http://114.71.220.111:7579/Mobius/ubi_jeong/1234?lim=10&rcn=4",
    "method": "GET",
    "headers": {
        "Accept": "application/json",
        "X-M2M-RI": "1dfada2345",
        "X-M2M-Origin": "S20170717074825768bp2l",
        "Host": "114.71.220.111:7579"
    }
};
$.ajax(settings).done(function (response) {
	
    data = response["m2m:rsp"];

    data = data["m2m:cin"];

    console.log(data);
    for(var key in data) {
        data_ = data[key];

        data_ = data_["con"];

        url_ = data_["url"];
        var date = data_["date"];
        var gps = data_["gps"];
        var type = data_["type"];
                        
        console.log(url_);
        console.log("\r\n\r\n");
                
        $("#start").prepend('<li class="col-md-6"><a href="images/bw-1.png"><img alt="image" src="images/bw-1.png"><div class="decription-wrap"> <div class="image-bg"><p class="desc"></p></div></div></a></li>')
    
                                                    
        var ph = document.getElementsByTagName("img"); 
        var ph1 = document.getElementsByTagName("a");
        var ph2 = document.getElementsByClassName("desc");

        ph[2].src =  url_;
        ph1[8].href = url_;
        ph2[0].innerHTML = "type: " + type + "<br>gps: " + gps + "<br>date: " + date;
                                 
    }    
});          
