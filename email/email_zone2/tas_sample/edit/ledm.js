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
            user: 'eunsol.iot@gmail.com',
            password: 'ge12yama21'
        },
    };

    const fs = require('fs');
    var userId = fs.readFileSync('../tas_current_user_info/id.txt').toString();
    console.log(userId); 
    const from = 'FROM <eunsol.iot@gamil.com>';
    const to = address;
    const subject = 'POTD for you';
    const html = '<h1>Life Shot maker<h1><p><img src="https://i.imgur.com/r6gAwPj.png"/>' +'<span style="font-size: 14px;">your ID:'+userId+'</span>'+'<![if !mso]><a style="border-radius: 4px;display: inline-block;font-size: 14px;font-weight: bold;line-height: 24px;padding: 12px 24px;text-align: center;text-decoration: none !important;transition: opacity 0.1s ease-in;color: #ffffff !important;background-color: #9f1b32;font-family: Roboto, Tahoma, sans-serif;" href="http://114.71.220.111:3030/app/index_web.html">Buy now!</a><![endi'+'</p>';

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

