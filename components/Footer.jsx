import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const t = useTranslations("HomePage");
  return (
    <div className=" bg-[#647d8b] flex items-center  justify-center flex-col">
      <div className="my-6 flex flex-col lg:flex-row lg:my-28  items-center w-full gap-5">
        <h1 className="text-white/60 lg:w-1/2 text-2xl lg:pl-80 w-fit tracking-wide ">
          {t("Subscribe To Our Newsletters")}
        </h1>
        <input
          type="text"
          placeholder="Enter Your Email"
          className="px-4 relative w-4/5 py-4   lg:w-1/3 bg-[#647d8b] border-[.5px] outline-none focus:border-black duration-700 border-white/60"
        />{" "}
        <button className="bg-[#566c79] py-3 text-white px-8 mr-10 lg:w-[200px] lg:px-2  lg:-translate-x-[115%]  lg:translate-y-0 translate-x-full   -translate-y-[160%]  z-10  uppercase text-sm font-extralight  tracking-widest">
          {t("Subscribe now")}
        </button>
      </div>
      <div className="w-full flex lg:justify-between flex-col lg:mb-0  lg:flex-row lg:w-3/4 lg:mx-auto px-10 items-start">
        <div className="flex-col flex lg:flex-row lg:items-center gap-5  lg:gap-10 mb-10 ">
          <Link
            href="#about"
            className=" hover:text-black duration-700 text-sm text-white/60 font-sans"
          >
            {t("About")}
          </Link>
          <Link
            href="#rooms"
            className=" hover:text-black duration-700 text-sm text-white/60 font-sans"
          >
            {t("Our Villas")}
          </Link>
          <Link
            href="#packages"
            className=" hover:text-black duration-700 text-sm text-white/60 font-sans"
          >
            {t("Packages")}
          </Link>
          <Link
            href="#book"
            className=" hover:text-black duration-700 text-sm text-white/60 font-sans"
          >
            {t("Contact & book")}
          </Link>
        </div>
        <div className="flex items-start gap-10">
          <img
            src="/assits/face.svg"
            alt="icon"
            loading="lazy"
            className="filter text-white"
          />
          <img
            src="/assits/insta.svg"
            alt="icon"
            loading="lazy"
            className="filter text-white"
          />
          <img
            src="/assits/x.svg"
            alt="icon"
            loading="lazy"
            className="filter text-white"
          />
          <img
            src="/assits/youtube.svg"
            alt="icon"
            loading="lazy"
            className="filter text-white"
          />
        </div>
      </div>
      <div className="border-t-[1px] border-white/60 flex lg:w-3/4 w-full   items-center justify-between my-16 lg:mt-0 flex-col lg:flex-row pt-10 gap-10">
        <Link href="https://www.noubodiez.ae/" className="text-white/50">
          © 2022 Noubodiez. {t("All rights reserved")}
        </Link>
        <div className="font-medium">
          <Link
            href=""
            className=" mb-20  hover:text-black mr-10 underline duration-700 text-sm text-white/60 font-sans"
          >
            {t("Terms Of Use")}
          </Link>
          <Link
            href=""
            className=" hover:text-black underline duration-700 text-sm text-white/60 font-sans"
          >
            {t("Privacy Policy")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
