// import nodemailer from "nodemailer";
// import dotenv from "dotenv";
// dotenv.config();

// export const sendMail = (name, email, message) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailConfigurations = {
//       from: process.env.EMAIL_USER,
//       to: "milonmondolmd33@gmail.com",
//       subject: "New Contact Message from Portfolio",
//       text: `
// Hello,

// You have received a new message from your portfolio contact form.

// ----------------------------------------
// Name   : ${name}
// Email  : ${email}

// Message: ${message}
// ----------------------------------------

// Please reply directly to this email to respond to the sender.

// Best Regards,
// Your Portfolio Website
// `,
//     };

//     const info =  transporter.sendMail(mailConfigurations);

//     console.log("Email sent Successfully");
//     console.log(info);

//     return true;
//   } catch (error) {
//     console.error("Email sending failed:", error);
//     throw error;
//   }
// };




import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const sendMail = async (name, email, message) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailConfigurations = {
      from: process.env.EMAIL_USER,
      to: "milonmondolmd33@gmail.com",
      subject: "New Contact Message from Portfolio",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Message from Portfolio</h2>
          <hr style="border: none; border-top: 2px solid #007bff;">
          
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f4f4f4; padding: 15px; border-left: 4px solid #007bff;">
            ${message.replace(/\n/g, '<br>')}
          </p>
          
          <hr style="border: none; border-top: 2px solid #007bff;">
          <p style="color: #666; font-size: 12px;">Please reply directly to this email to respond to the sender.</p>
          <p style="color: #999; font-size: 11px;">Best Regards,<br>Your Portfolio Website</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailConfigurations);
    console.log("✅ Email sent successfully:", info.messageId);
    return true;

  } catch (error) {
    console.error("❌ Email sending failed:", error.message);
    throw error;
  }
};