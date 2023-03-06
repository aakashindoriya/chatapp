var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aakash7014440217@gmail.com',
      pass: "fkzvemfrgjnefcha"
    }
  });
  
  var mailOptions = {
    from: 'aakash7014440217@gmail.com',
    to: 'aakashindoriya12346@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
