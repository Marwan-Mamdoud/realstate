"use server";
import nodemailer from "nodemailer";

export const sendEmail = async () => {
  try {
    const transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "marwanmamdouh159@gmail.com",
        auth: "Marwan@#Net",
      },
    });
    const mailOption = {
      from: email,
      to: "marwanmamdouh159@gmail.com",
      subject: "new message",
      text: "Done",
    };
    await transporter.sendMail(mailOption);
    console.log("done");
  } catch (error) {
    console.log(error.message);
  }
};
