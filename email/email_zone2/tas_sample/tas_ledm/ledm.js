/* TAS for RGB LED module (DFR0238)
 * Created by J. Yun, SCH Univ. (yun@sch.ac.kr)
 * Modify the tas_led sample developed by I.-Y. Ahn, KETI
*/

function sendEmail(address) {
    const nodemailer = require('nodemailer');
    const smtpPool = require('nodemailer-smtp-pool');

    const config = {
        mailer: {
            service: 'Gmail',
            host: 'localhost',
            port: '465',
            user: 'lifeshot.maker@gmail.com',
            password: 'lifeShot1234'
        },
    };

    const fs = require('fs');
    var userId = fs.readFileSync('../tas_current_user_info/id.txt').toString();
    console.log(userId); 
    const from = 'FROM <lifeshot.maker@gmail.com>';
    const to = address;
    const subject = 'POTD for you sent by Life Shot Maker';
    const html = '<h1>Life Shot maker<h1><div style="text-align: center; margin: 30px auto;"><img src="https://i.imgur.com/r6gAwPj.png" /><p style="font-size: 20px;text-align: center;margin:30px auto;"><br>your ID:'+userId+'</p><a style="border-radius: 4px;display: inline-block;font-size: 20px;font-weight: bold;line-height: 30px;padding: 15px 30px;text-align: center;text-decoration: none !important;transition: opacity 0.1s ease-in;color: #ffffff !important;background-color: #9f1b32;font-family: Roboto, Tahoma, sans-serif;" href="http://192.168.0.11/webserver/index_web.html?index='+userId+'">Buy now!</a><p style="color:#6E6E6E; font-size: 13px;text-align: center;margin:0px auto;"><br>Press button to go to Life Shot Maker!</p></div>';

    const mailOptions = {
        from,
        to,
        subject,
        html,
    };

    const transporter = nodemailer.createTransport(smtpPool({
        service: config.mailer.service,
        host: config.mailer.host,
        port: config.mailer.port,
        auth: {
            user: config.mailer.user,
            pass: config.mailer.password,
        },
        tls: {
            rejectUnauthorized: false,
        },
        maxConnections: 5,
        maxMessages: 10,
    }));

    transporter.sendMail(mailOptions, (err, res) => {
        if (err) {
            console.log('failed...=>', err);
        } else {
            console.log('succeed...=>', res);
        }

        transporter.close();
    })
}


var user = process.argv[2];

sendEmail(user);

