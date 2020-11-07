var fs = require("fs");
var request = require("request");

var options = { 
    method: 'POST',
    url: 'http://114.71.220.111:5050/images',
    formData: {
        image: {
            value: fs.createReadStream("./0.jpg"),
            options: {
                filename: '0.jpg',
                contentType: 'image/jpg'
            }
        }, 
        cnt: '1235',
    }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
