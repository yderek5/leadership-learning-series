var nodemailer = require('nodemailer');

module.exports = {
    sendEmail: function(req, res, next) {
        var content = {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
          }
          var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
              user: process.env.MYEMAIL,
              pass: process.env.MYPASS
            }
          });
          var mailOptions = {
            from: process.env.MYEMAIL,
            to: process.env.MYEMAIL,
            subject: 'Leadership Learning Series Contact Us',
            html: `<p>Name: ${content.name}</p>
                   <p>Email: ${content.email}</p><br>
                   <p>Message: ${content.message}</p>`
          };
      
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
              return;
            } else {
              console.log('Message sent!');
            }
          });
    }
}