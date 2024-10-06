import { useTranslations } from "next-intl";
import React from "react";

const DuobleImages = () => {
  const t = useTranslations("HomePage");
  return (
    <div
      id="packages"
      className="mx-auto flex flex-col items-center justify-center"
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wdth@62.5..100&display=swap"
        rel="stylesheet"
      />
      <p className="text-2xl font-sans text-black/75 tracking-[.3rem] mb-36">
        {t("POPULAR PACKAGES")}
      </p>
      <div className="flex lg:flex-row flex-col-reverse  items-center justify-center gap-32 tracking-wider">
        <div className="flex flex-col items-center justify-center w-80 px-2 text-center">
          <p className=" text-black tracking-[.2rem] text-lg mb-5 ">
            {" "}
            {t("Wellness Package")}
          </p>
          <p className="font-big-image text-black/85 mb-7 leading-relaxed">
            {" "}
            {t("Be your best self in Bali and leave feeling refresh")}
          </p>
          <button className="bg-[#f7f5f2] py-3 hidden px-7 tracking-[.2rem] font-sans text-[9px] text-black hover:bg-[#394145] hover:text-white duration-500">
            {t("EXPLORE PACKAGE")}
          </button>
        </div>
        <img
          src="/assits/Resort (1).webp"
          alt="one"
          className="lg:w-[350px]  rounded-md h-1/2 w-11/12 object-contain"
        />
      </div>
      <div className="flex items-center lg:flex-row flex-col justify-center gap-32 tracking-wider mt-32 mb-56">
        <img
          src="/assits/Resort (2).webp"
          alt="one"
          className="lg:w-[350px]  rounded-md h-1/2 w-11/12 object-contain"
        />
        <div className="flex flex-col items-center justify-center w-80 px-2 text-center">
          <p className=" text-black tracking-[.2rem] text-lg mb-5 ">
            {" "}
            {t("Event Package")}
          </p>
          <p className="font-big-image text-black/85 mb-7 leading-relaxed">
            {" "}
            {t("Host your event at our exclusive")}
          </p>
          <button className="bg-[#f7f5f2] py-3 px-7 hidden tracking-[.2rem] font-sans text-[9px] text-black hover:bg-[#394145] hover:text-white duration-500">
            {t("EXPLORE PACKAGE")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DuobleImages;
