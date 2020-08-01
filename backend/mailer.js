const nodemailer = require("nodemailer");

module.exports = mailer = async (email, subject, text) => {
  // let testAccount = await nodemailer.createTestAccount();

  // let transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: testAccount.user,
  //     pass: testAccount.pass
  //   }
  // });

  // let info = await transporter.sendMail({
  //   from: '"Fred Foo 👻" <foo@example.com>',
  //   to: "random@hotmail.com",
  //   subject: "Hello ✔",
  //   text: "Hello world?",
  //   html: "<b>Hello world?</b>"
  // });

  // console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);

  try {
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: "berpanostester@hotmail.com",
        pass: process.env.EMAIL_PASS,
      },
    });
  
    const mailOptions = {
      from: "berpanostester@hotmail.com",
      to: email,
      subject,
      text
    };
  
    const info = await transporter.sendMail(mailOptions);
  
    console.log(`Message sent: ${info.messageId}`);
    
  } catch (error) {
    console.log(`Error sending email: ${error}`)
  }
}
