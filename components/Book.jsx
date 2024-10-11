"use client";
import { sendEmail } from "@/action/action";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

import React from "react";
import { useEffect, useState } from "react";

const Book = () => {
  const t = useTranslations("HomePage");
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [state, setState] = useState();
  const [rooms, setRoom] = useState();
  const [message, setMessage] = useState();
  const sendMail = async () => {
    try {
      console.log({ name, email, phone });

      await sendEmail(name, email, phone, rooms, state, message);
    } catch (error) {
      console.log(error.message);
    }
  };
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      ".footter",
      {
        y: "100",
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".footter",
          start: "top bottom",
          end: "top center",
          scrub: true,
          toggleActions: "restart pause restart pause",
        },
        y: "0",
        opacity: 1,
      }
    );
  }, []);
  return (
    <div className=" book-back-ground  relative w-full  ">
      <div
        id="book"
        className="book-content flex flex-col items-center justify-center footter absolute w-full bottom-0"
      >
        <p className="text-white/80 uppercase tracking-[.3rem] text-xl text-center pt-16 mb-10 ">
          {t("YOUR BALI PARADISE AWAITS")}
        </p>
        <div className="flex flex-col lg:flex-row w-full lg:w-fit justify-center items-center">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="lg:w-[500px] w-11/12 h-[45px] lg:translate-x-20 translate-x-0 outline-none focus:border-black mb-5 lg:mb-0 pl-5"
          />{" "}
          <button
            onClick={sendMail}
            className=" bg-[#647d8b] text-white font-light py-2 px-10 text-center tracking-widest mx-auto translate-x-0 lg:-translate-x-[65%]"
          >
            {t("Subscribe now")}
          </button>
        </div>
        {/* <div className="flex items-center flex-col justify-center gap-8">
        <div className="flex items-center lg:flex-row flex-wrap gap-5 px-5 justify-between">
            <div className="flex flex-col  gap-2">
              <label className="text-white" htmlFor="Full Name ">
                Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                className="  text-black outline-none border-[1px] foucus:border-black w-48 h-9 px-3"
                placeholder="Full Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white" htmlFor="Full Name">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                className=" text-black outline-none border-[1px] foucus:border-black w-48 h-9 px-3"
                placeholder="Email Address"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white" htmlFor=" Full Name text-white">
                Number
              </label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                type="number"
                className=" text-black outline-none border-[1px] foucus:border-black w-48 h-9 px-3"
                placeholder="Your Number"
              />
            </div>
          </div>
        <div className="flex items-center gap-5 justify-between"></div>
        <div className="flex items-center lg:flex-row flex-wrap px-5 gap-5 justify-between">
            <div className="flex flex-col gap-2">
              <label className="text-white" htmlFor="Full Name text-white">
                State
              </label>
              <input
                onChange={(e) => setState(e.target.value)}
                value={state}
                type="text"
                className="  text-black  outline-none border-[1px] foucus:border-black   w-48 h-9 px-3"
                placeholder="Name Of State"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white" htmlFor="Full Name text-white">
                Rooms
              </label>
              <input
                onChange={(e) => setRoom(e.target.value)}
                value={rooms}
                type="number"
                className="  text-black outline-none border-[1px] foucus:border-black w-48 h-9 px-3"
                placeholder="Number of Rooms"
              />
            </div>
            <div className="flex flex-col gap-2 mb-3">
              <label className="text-white" htmlFor="Full Name text-white">
                Massage
              </label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                type="text"
                row={5}
                className="  text-black outline-none border-[1px] foucus:border-black w-48 pt-1 pl-2"
                placeholder="Live us Massage"
              ></textarea>
            </div>
          </div>
        <button
            onClick={sendMail}
            className="hover:bg-[#354953] duration-500 bg-[#647d8b] py-2.5 px-20 text-xs tracking-wider font-semibold font-sans text-white text-center"
          >
            {t("Submit")}
          </button>
        </div> */}{" "}
        <p className="text-white/60 uppercase tracking-[.2rem] text-center  text-[10px] font-sans px-5 font-semibold pt-12 pb-10 ">
          {t("UNLOCK A 10% DISCOUNT BY BOOKING DIRECTLY THROUGH OUR WEBSITE")}{" "}
        </p>
      </div>
    </div>
  );
};

export default Book;
