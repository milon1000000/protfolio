// import Contact from "../model/contactModel.js";
// import { sendMail } from "../utility/emailUtility.js";

// export const contactController = async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     // Validation
//     if (!name)
//       return res
//         .status(400)
//         .json({ message: "Name is required", success: false });
//     if (!email)
//       return res
//         .status(400)
//         .json({ message: "Email is required", success: false });
//     if (!message)
//       return res
//         .status(400)
//         .json({ message: "Message is required", success: false });

//     const newMessage = await Contact.create({
//       name,
//       email,
//       message,
//     });
//     sendMail(name,email,message);

//     return res
//       .status(200)
//       .json({
//         success: true,
//         message: "Your send message successfully",
//         newMessage,
//       });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       message: "Internal server error",
//       error: error.message,
//       success: false,
//     });
//   }
// };



// import Contact from "../model/contactModel.js";
// import { sendMail } from "../utility/emailUtility.js";

// export const contactController = async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     // Validation
//     if (!name || name.trim() === "")
//       return res.status(400).json({ 
//         message: "Name is required", 
//         success: false 
//       });
    
//     if (!email || email.trim() === "")
//       return res.status(400).json({ 
//         message: "Email is required", 
//         success: false 
//       });
    
//     if (!message || message.trim() === "")
//       return res.status(400).json({ 
//         message: "Message is required", 
//         success: false 
//       });

//     // Save to database
//     const newMessage = await Contact.create({
//       name: name.trim(),
//       email: email.trim(),
//       message: message.trim(),
//     });
    
//     // Send email - don't block response if email fails
//     sendMail(name, email, message)
//       .then(() => console.log("✅ Email notification sent"))
//       .catch((err) => console.error("⚠️ Email failed:", err.message));

//     return res.status(200).json({
//       success: true,
//       message: "Your message sent successfully",
//       newMessage,
//     });

//   } catch (error) {
//     console.error("❌ Controller error:", error);
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
    if (!name || name.trim() === "")
      return res.status(400).json({ 
        message: "Name is required", 
        success: false 
      });
    
    if (!email || email.trim() === "")
      return res.status(400).json({ 
        message: "Email is required", 
        success: false 
      });
    
    if (!message || message.trim() === "")
      return res.status(400).json({ 
        message: "Message is required", 
        success: false 
      });

    // Save to database
    const newMessage = await Contact.create({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });
    
    // ✅ Email পাঠানো - সঠিকভাবে
    try {
      await sendMail(name, email, message);  // ← await যোগ করুন
      console.log("✅ Email notification sent successfully");
    } catch (emailError) {
      console.error("⚠️ Email failed but message saved:", emailError.message);
      // Email ব্যর্থ হলেও response সফল দিন (optional)
    }

    return res.status(200).json({
      success: true,
      message: "Your message sent successfully",
      newMessage,
    });

  } catch (error) {
    console.error("❌ Controller error:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
      success: false,
    });
  }
};