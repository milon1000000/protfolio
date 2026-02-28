// // import Contact from "../model/contactModel.js";
// // import { sendMail } from "../utility/emailUtility.js";

// // export const contactController = async (req, res) => {
// //   try {
// //     const { name, email, message } = req.body;

// //     // Validation
// //     if (!name)
// //       return res
// //         .status(400)
// //         .json({ message: "Name is required", success: false });
// //     if (!email)
// //       return res
// //         .status(400)
// //         .json({ message: "Email is required", success: false });
// //     if (!message)
// //       return res
// //         .status(400)
// //         .json({ message: "Message is required", success: false });

// //     const newMessage = await Contact.create({
// //       name,
// //       email,
// //       message,
// //     });
// //     sendMail(name,email,message);

// //     return res
// //       .status(200)
// //       .json({
// //         success: true,
// //         message: "Your send message successfully",
// //         newMessage,
// //       });
// //   } catch (error) {
// //     console.error(error);
// //     return res.status(500).json({
// //       message: "Internal server error",
// //       error: error.message,
// //       success: false,
// //     });
// //   }
// // };





// import Contact from "../model/contactModel.js";
// import { sendMail } from "../utility/emailUtility.js";

// export const contactController = async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     // Validation
//     if (!name)
//       return res.status(400).json({ message: "Name is required", success: false });
//     if (!email)
//       return res.status(400).json({ message: "Email is required", success: false });
//     if (!message)
//       return res.status(400).json({ message: "Message is required", success: false });

//     // Save to database
//     const newMessage = await Contact.create({
//       name,
//       email,
//       message,
//     });

//     // Send email
//     await sendMail(name, email, message);

//     return res.status(200).json({
//       success: true,
//       message: "Your message was sent successfully",
//       newMessage,
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       message: "Internal server error",
//       error: error.message,
//       success: false,
//     });
//   }
// };




import Contact from "../model/contactModel.js";
import { sendMail } from "../utility/emailUtility.js";

export const contactController = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name)
      return res.status(400).json({ message: "Name is required", success: false });
    if (!email)
      return res.status(400).json({ message: "Email is required", success: false });
    if (!message)
      return res.status(400).json({ message: "Message is required", success: false });

    // Save to database
    const newMessage = await Contact.create({ name, email, message });

    // Send email (try/catch to avoid breaking response)
    let emailSent = false;
    try {
      await sendMail(name, email, message);
      emailSent = true;
    } catch (err) {
      console.error("Email failed:", err);
    }

    return res.status(200).json({
      success: true,
      message: emailSent
        ? "Message sent successfully!"
        : "Message saved but email failed",
      newMessage,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};