const nodemailer = require('nodemailer');
require('dotenv').config()


const sendEmail = async (email, title, body) => {
  try{
          let transporter = nodemailer.createTransport({
              host:process.env.MAIL_HOST,
              // port: 587,
              auth:{
                  user: process.env.MAIL_USER,
                  pass: process.env.MAIL_PASS,
              }
          })


          let info = await transporter.sendMail({
              from: `"EduHub INDIA || Tarun Choudhary" <${process.env.MAIL_USER}>`,
              // to:`${email}`,,
              to:doc.email,
              subject: `${title}`,
              html: `${body}`,
          })
          console.log(info);
          return info;
  } 
  catch(error) {
      console.log(error.message);
      return error;
  }
}

module.exports = sendEmail;
