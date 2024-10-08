"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";

const DuobleImages = () => {
  const t = useTranslations("HomePage");
  const [hover, setHover] = useState(true);
  const [hover2, setHover2] = useState(true);
  const [hover3, setHover3] = useState(true);
  return (
    <div
      id="packages"
      className="mx-auto flex flex-col mt-32 items-center justify-center"
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wdth@62.5..100&display=swap"
        rel="stylesheet"
      />
      <p className="text-2xl font-sans text-black/75 tracking-[.3rem] mb-[75px]">
        {t("POPULAR PACKAGES")}
      </p>
      <div className="flex lg:flex-row flex-col gap-5 lg:gap-0 items-center  w-fit justify-center">
        <div
          onMouseLeave={() => {
            setHover2(true);
          }}
          onMouseEnter={() => {
            setHover2(false);
          }}
          className="w-[400px] h-[600px] relative overflow-hidden"
        >
          <div
            className={`back-ground-image rooms-back-ground transition-all duration-1000    w-full h-full absolute z-20`}
          ></div>
          <img
            loading="lazy"
            src="/assits/family.webp"
            alt=""
            srcset=""
            className={`transition-all duration-1000 ${
              !hover2 && "scale-110"
            }  object-cover roomImage w-full h-full `}
          />
          <div className="flex flex-col items-start absolute z-50 pl-4 justify-center w-full px-2 mx-auto -translate-y-full  text-white ">
            <p className="  tracking-[.2rem] text-lg mb-5 ">
              {" "}
              {/* {t("Event Package")} */}
              Family Package
            </p>
            <p className="font-big-image  mb-7 leading-relaxed">
              {" "}
              {t("Host your event at our exclusive")}
            </p>
            <button className="bg-[#f7f5f2] py-3 px-7 hidden tracking-[.2rem] font-sans text-[9px]  hover:bg-[#394145] hover:text-white duration-500">
              {t("EXPLORE PACKAGE")}
            </button>
          </div>
        </div>
        <div
          onMouseLeave={() => {
            setHover3(true);
          }}
          onMouseEnter={() => {
            setHover3(false);
          }}
          className="w-[400px] h-[600px] relative overflow-hidden"
        >
          <div
            className={`back-ground-image transition-all duration-1000    w-full h-full absolute z-20`}
          ></div>
          <img
            loading="lazy"
            src="/assits/wedding.webp"
            alt=""
            srcset=""
            className={`transition-all duration-1000 ${
              !hover3 && "scale-110"
            }  object-cover roomImage w-full h-full `}
          />
          <div className="flex flex-col items-start justify-center full px-4 pl-4 mx-auto -translate-y-full absolute z-50 text-white ">
            <p className="  tracking-[.2rem] text-lg mb-5 ">
              {" "}
              {/* {t("Event Package")} */}
              Wedding Package
            </p>
            <p className="font-big-image  mb-7 leading-relaxed">
              {" "}
              {/* {t("Host your event at our exclusive")} */}
              Celebrate your special day at our exclusive resort, where
              relaxation, luxury, and natural beauty unite. Our wedding package
              offers an unforgettable experience with elegant settings and
              top-tier amenities, ensuring a magical day for you and your
              guests.
            </p>
            <button className="bg-[#f7f5f2] py-3 px-7 hidden tracking-[.2rem] font-sans text-[9px]  hover:bg-[#394145] hover:text-white duration-500">
              {t("EXPLORE PACKAGE")}
            </button>
          </div>
        </div>
        <div
          onMouseLeave={() => {
            setHover(true);
          }}
          onMouseEnter={() => {
            setHover(false);
          }}
          className="w-[400px] h-[600px]  relative overflow-hidden"
        >
          <div
            className={`back-ground-image rooms-back-ground transition-all duration-1000    w-full h-full absolute z-20`}
          ></div>
          <img
            loading="lazy"
            src="/assits/event.webp"
            alt=""
            srcset=""
            className={`transition-all duration-1000 ${
              !hover && "scale-110"
            }  object-cover roomImage w-full h-full `}
          />
          <div className="flex flex-col absolute z-50 items-start justify-center w-full px-4 pl-4  -translate-y-full mx-auto text-white">
            <p className="  tracking-[.2rem] text-lg mb-5 ">
              {" "}
              {/* {t("Wellness Package")} */}
              Event Package
            </p>
            <p className="font-big-image mb-7 leading-relaxed">
              {" "}
              {t("Be your best self in Bali and leave feeling refresh")}
            </p>
            <button className="bg-[#f7f5f2] py-3 hidden px-7 tracking-[.2rem] font-sans text-[9px]  hover:bg-[#394145] hover:text-white duration-500">
              {t("EXPLORE PACKAGE")}
            </button>
          </div>
        </div>
      </div>
      {/* <div className="flex lg:flex-row flex-col-reverse  items-center justify-center gap-32 tracking-wider">
       
        <div className="overflow-hidden w-[400px] h-[500px]">
          <img
            src="/assits/Resort (1).webp"
            alt="one"
            className="w-full h-full   object-cover"
          />
        </div>
      </div> */}
      {/* comment=========================================================================================================== */}
      {/* comment=========================================================================================================== */}
      {/* comment=========================================================================================================== */}
      {/* <div className="flex items-center lg:flex-row flex-col justify-center gap-32 tracking-wider mt-32 mb-56">
        <div className="overflow-hidden w-[400px] h-[500px]">
          <img
            src="/assits/Resort (2).webp"
            alt="one"
            className="w-full h-full   object-cover"
          />
        </div>
      </div> */}
      {/* comment=========================================================================================================== */}
      {/* comment=========================================================================================================== */}
    </div>
  );
};

export default DuobleImages;
