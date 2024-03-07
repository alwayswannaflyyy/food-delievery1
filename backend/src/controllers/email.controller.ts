// // import { RequestHandler } from "express";
// // import nodemailer from "nodemailer";
// // export const sendEmail: RequestHandler = async (req, res) => {
// //     const { email } = req.body;
// //     try {
// //         const transporter = nodemailer.createTransport({
// //             service: "Gmail",
// //             host: "smtp.gmail.com",
// //             port: 465,
// //             secure: true,
// //             auth: {
// //                 user: "fakelord0817@gmail.com",
// //                 pass: "",
// //             },
// //         });
// //         const mailOptions = {
// //             from: "fakelord0817@gmail.com",
// //             to: email,
// //             subject: "Hello from Nodemailer",
// //             text: "w",
// //         };
// //         await transporter.sendMail(mailOptions);
// //         res.json("Email sent!");
// //     } catch (error) {
// //         res.status(500).json(error);
// //     }
// // };

// import { RequestHandler } from "express";
// import nodemailer from "nodemailer";
// import {UserModel } from "../models";

// type createOtpProps = {

//   otp: String;

// };

// export const sendEmail: RequestHandler = async (req, res) => {
//   const { email } = req.body;
// //   const user = await UserModel.findOne({ email });
// //   if (!user) {
// //     return res.status(401).json({
// //       message: "hereglegch oldsongui ",
// //     });
// //   }
//   const otpCode = Math.floor(Math.random() * 100000);
//   try {
//     const transporter = nodemailer.createTransport({
//       service: "Gmail",
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: "fakelord0817@gmail.com",
//         pass: "ftqhxabttdwwligh",
//       },
//     });
//     const mailOptions = {
//       from: "fakelord0817@gmail.com",
//       to: email,
//       subject: "from Food Delivery",
//       text: `i retired from dota2 today sorry to all my beautiful fans thank you for supporting me for whole thi time i will be back stronger one day  Нэг удаагийн код: ${otpCode}`,
//     };
//     await transporter.sendMail(mailOptions);
//     res.json("Email sent!");
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// import { RequestHandler } from "express";
// import nodemailer from "nodemailer";
// import { UserModel } from "../models";

// export const sendEmail: RequestHandler = async (req, res) => {
//   const { recovery_email } = req.body;

//   const userid = await UserModel.findOne({ email: recovery_email });

//   if (!userid) {
//     return res.status(401).json({
//       message: "Хэрэглэгч олдсонгүй",
//     });
//   }

//   const otpCode = Math.floor(Math.random() * 10000);

//   try {
//     const transporter = nodemailer.createTransport({
//       service: "Gmail",
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
// user: "fakelord0817@gmail.com",
// pass: "ftqhxabttdwwligh",
//       },
//     });
//     const mailOptions = {
//       from: "fakelord0817@gmail.com",
//       to: recovery_email,
//       subject: "from Food Delivery",
//       text: `Your OTP code: ${otpCode}`,
//     };
//     await transporter.sendMail(mailOptions);

//     const userCode = await UserModel.updateOne(
//       { _id: userid.id },
//       { $set: { otp: otpCode } }
//     );
//     res.json("Email sent!");
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };
import { RequestHandler } from "express";
import nodemailer from "nodemailer";
import { UserModel } from "../models";

export const sendEmail: RequestHandler = async (req, res) => {
  const { recovery_email } = req.body;

  const userid = await UserModel.findOne({ email: recovery_email });

  if (!userid) {
    return res.status(401).json({
      message: "Хэрэглэгч олдсонгүй",
    });
  }

  const otpCode = Math.floor(Math.random() * 10000);

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "fakelord0817@gmail.com",
        pass: "ftqhxabttdwwligh",
      },
    });
    const mailOptions = {
      from: "fakelord0817@gmail.com",
      to: recovery_email,
      subject: "from Food Delivery",
      text: `Your OTP code: ${otpCode}`,
    };
    await transporter.sendMail(mailOptions);

    const userOtp = await UserModel.updateOne(
      { _id: userid.id },
      { $set: { otp: otpCode } }
    );

    res.json({ otpCode, message: "Нэг удаагийн код и-мэйл рүү илгээгдсэн" });
  } catch (error) {
    res.status(500).json(error);
  }
};
