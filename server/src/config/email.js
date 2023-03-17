function mail(email,username,link){
    return  {
        from: 'aakash7014440217@gmail.com',
        to: email,
        subject: 'varification of aakash chatApp ',
        html: `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div>
<h1>Thanks For Joining Us</h1>
<p> Dear ${username},<br>

We are excited to welcome you to our chat application! To ensure the security of our users, we require all new users to verify their account before they can start chatting with other users.

To verify your account, please click on the following link: ${link}. You will be directed to a page where you will be prompted to enter your username and password. Once you have successfully entered your information, your account will be verified, and you will be able to start chatting.

If you did not register for an account with our chat application, please disregard this email.

Thank you for choosing our chat application. We look forward to seeing you on our platform soon!
<br>
Best regards,
Aakash chat
</p>

</div>
</body>
</html>
        `
      };
}

module.exports=mail