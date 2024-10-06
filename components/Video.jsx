"use client";

import "react-modal-video/css/modal-video.css";
import ModalVideo from "react-modal-video";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslations } from "use-intl";

const Video = () => {
  const t = useTranslations("HomePage");
  const [hover, setHover] = useState(true);
  const [isOpen, setIsOpen] = useState();

  return (
    <div className="bg-[#f7f5f2] lg:w-11/12 h-[140dvh] mx-auto relative flex lg:flex-row flex-col-reverse items-center justify-center  mt-36 ">
      <div
        onMouseLeave={() => {
          setHover(true);
        }}
        onMouseEnter={() => {
          setHover(false);
        }}
        className="lg:w-[40dvw] relative lg:h-[83dvh]   "
      >
        <div className="lg:w-[380px] h-[300px] w-full py-5 flex flex-col  items-center justify-evenly bg-white  font-sans text-[#394145] lg:absolute lg:top-[25%] lg:-left-[43%] lg:z-30">
          <p className="text-[10px]  tracking-[.2rem] uppercase font-semibold">
            {t("Customer")}
          </p>
          <p className=" uppercase tracking-[.4rem] text-2xl ">
            {t("IS SUPREME")}
          </p>
          <p className="w-3/4 text-center text-lg">
            {t("When it comes to our guests")}
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#394145] uppercase  text-white py-3 font-semibold  px-6 rounded-sm text-[9px] border-[1px] border-[#394145] tracking-[.2rem] hover:bg-white hover:text-[#394145] duration-700"
          >
            {t("Show video")}
          </button>
        </div>
        <img
          src="/assits/chif.webp"
          alt="chif"
          loading="lazy"
          fill
          className={`w-full lg:h-full  h-[300px]  cursor-pointer  duration-300 object-center lg:object-cover `}
        />

        <ModalVideo
          channel="vimeo"
          isOpen={isOpen}
          videoId="1015860988"
          onClose={() => setIsOpen(false)}
        />
        <div
          onClick={() => setIsOpen(true)}
          className={`back-ground-image-chif w-full -translate-y-[100%] h-[46%] flex items-center justify-center cursor-pointer ${
            hover && "opacity-0"
          } duration-1000 lg:h-full z-10 absolute`}
        >
          <Image
            loading="lazy"
            src="/assits/play.svg"
            width={25}
            height={25}
            alt="play"
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
