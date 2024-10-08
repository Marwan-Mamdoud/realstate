"use server";
import axios from "axios";
const API = await axios.create({
  baseURL: "https://send-mail-lemon.vercel.app/",
  // baseURL: "http://localhost:5000",
  withCredentials: true,
});

export const sendEmail = async (
  name,
  email,
  phone,
  startDate,
  endDate,
  occasion,
  rooms,
  people,
  message
) => {
  try {
    console.log({ name, phone });
    await API.post("/api/sendMail", {
      name,
      email,
      phone,
      startDate,
      endDate,
      occasion,
      rooms,
      people,
      message,
    });
    console.log("done");
  } catch (error) {
    console.log(error, "error send email");
  }
};
