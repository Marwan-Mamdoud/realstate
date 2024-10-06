import React from "react";
import { useTranslations } from "use-intl";

const BigImage = () => {
  const t = useTranslations("HomePage");
  return (
    <div
      className="w-full flex items-center lg:flex-row flex-col text-center text-white mb-44"
      id="about"
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wdth@62.5..100&display=swap"
        rel="stylesheet"
      />
      <img
        src="/assits/Resort (4).webp"
        className="lg:object-cover object-contain lg:w-3/5 w-full h-fit lg:h-[100dvh]"
      />
      <div className="bg-[#647d8b] lg:w-3/5 lg:h-[100dvh] h-[80dvh] w-full text-lg flex items-center font-medium text-white/70 font-sans  ">
        <div className="w-96  font-big-image  flex items-center flex-col justify-center gap-7 mx-auto h-fit">
          <p className="text-2xl text-white tracking-[.3rem] w-8/12 font-light uppercase font-sans">
            {t("about our resort")}
          </p>{" "}
          <p className=" ">{t("This resort, spanning 2,000 square meters")}</p>{" "}
          <p className="">
            {" "}
            {t("Designed for ultimate comfort and rejuvenation")}
          </p>{" "}
          <button className="py-2 px-6 hidden uppercase border-[1px] border-white/90 text-white/90 bg-[#647d8b] hover:bg-white hover:text-[#647d8b] duration-500 text-[10px] tracking-[.2rem]">
            {" "}
            {t("our story")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BigImage;
