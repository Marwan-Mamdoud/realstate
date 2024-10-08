"use server";
import axios from "axios";
const API = await axios.create({
  baseURL: "https://send-mail-lemon.vercel.app/",
  // baseURL: "http://localhost:5000",
  withCredentials: true,
});

export const sendEmail = async (
  name,
  phone,
  startDate,
  endDate,
  occasion,
  rooms,
  people
) => {
  try {
    console.log({ name, phone });
    await API.post("/api/sendMail", {
      name,
      phone,
      startDate,
      endDate,
      occasion,
      rooms,
      people,
    });
    console.log("done");
  } catch (error) {
    console.log(error, "error send email");
  }
};
