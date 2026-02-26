// import nodemailer from "nodemailer";
// import dotenv from "dotenv";
// dotenv.config();

// export const sendMail = (name, email, message) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const mailConfigurations = {
//     from: process.env.EMAIL_USER,
//     to: "milonmondolmd33@gmail.com",
//     subject: "New Contact Message from Portfolio",

//     text: `
// Hello,

// You have received a new message from your portfolio contact form.

// ----------------------------------------
// Name   : ${name}
// Email  : ${email}

// Message:
// ${message}
// ----------------------------------------

// Please reply directly to this email to respond to the sender.

// Best Regards,
// Your Portfolio Website
// `,
//   };

//   transporter.sendMail(mailConfigurations, (error, info) => {
//     if (error) throw Error(error);
//     console.log("Email sent Successfully");
//     console.log(info);
//   });
// };


import nodemailer from "nodemailer";

export const sendMail = async (name, email, message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "milonmondolmd33@gmail.com",
    subject: "New Contact Message from Portfolio",
    text: `
Name: ${name}
Email: ${email}
Message: ${message}
`,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log("Email sent:", info.response);
};