import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
const Footer = () => {
  const t = useTranslations("HomePage");

  return (
    <div className=" bg-[#647d8b] flex items-center  justify-center flex-col scroll-auto ">
      <div className="flex items-start lg:items-center  pl-10 lg:pl-0 lg:flex-row flex-col w-full  justify-between lg:w-[1050px] py-12">
        <img
          src="/assits/logo.svg"
          loading="lazy"
          alt="logo"
          className="object-fill flex-1 lg:flex-none mx-auto mb-12 lg:m-0 pt-4 w-40 h-40"
        />
        <div className="flex flex-col gap-2 text-white items-start justify-center">
          <p className="font-semibold mb-6">{t("Get in touch")}</p>
          <div className="flex flex-row gap-5 items-start">
            <img src="/assits/email.png" className="w-[30px] h-[30px]" />
            <p>marwanmamdouh159@gmai.com</p>
          </div>
          <div className="flex flex-row gap-5 items-start">
            <img src="/assits/location.png" className="w-[30px] h-[30px]" />
            <p>40 Street-Cairo</p>
          </div>
          <div className="flex flex-row gap-5 items-start">
            <img src="/assits/computer.png" className="w-[30px] h-[30px]" />
            <p>+20 123454536</p>
          </div>
        </div>
      </div>
      <div className="w-full flex lg:justify-between flex-col lg:mb-0  lg:flex-row lg:w-3/4 lg:mx-auto px-10 items-start">
        <div className="flex-col flex lg:flex-row lg:items-center gap-5  lg:gap-10 mb-10 ">
          <Link
            href="#home"
            className=" hover:text-black duration-700 text-sm text-white/60 font-sans"
          >
            {t("home")}
          </Link>
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
            {t("our villas")}
          </Link>
          <Link
            href="#packages"
            className=" hover:text-black duration-700 text-sm text-white/60 font-sans"
          >
            {t("packages")}
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
