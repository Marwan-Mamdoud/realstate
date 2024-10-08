import React from "react";
import { useTranslations } from "use-intl";

const BigImage = () => {
  const t = useTranslations("HomePage");
  return (
    <div
      className="w-full flex items-center lg:flex-row flex-col text-center  text-white mb-44"
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
      <div className="bg-[#647d8b] lg:w-3/5 lg:h-[100dvh] h-fit pt-5 w-full text-lg flex pb-5 items-center font-medium text-white/70 font-sans  ">
        <div className="w-10/12  font-big-image  flex items-center flex-col justify-center gap-7 mx-auto h-fit">
          <p className="text-2xl text-white tracking-[.3rem] w-3/6 font-light uppercase font-sans mb-3">
            {t("about our resort")}
          </p>{" "}
          <div className="flex flex-col items-start gap-5 justify-center">
            <div className="flex flex-col gap-2 items-start justify-center">
              <div className="flex flex-row gap-5 items-start">
                <img src="/assits/living.png" className="w-[30px] h-[30px]" />
                <p>15 room for 35 person</p>
              </div>
              <div className="flex flex-row gap-5 items-start">
                <img
                  src="/assits/area_white.png"
                  className="w-[30px] h-[30px]"
                />
                <p>2000 meter sq</p>
              </div>
              <div className="flex flex-row gap-5 items-start">
                <img src="/assits/jacuzzi.png" className="w-[30px] h-[30px]" />
                <p>3 jacuzzi</p>
              </div>
              <div className="flex flex-row gap-5 items-start">
                <img src="/assits/spa.png" className="w-[30px] h-[30px]" />
                <p>massage rooms</p>
              </div>
            </div>
            <p className="text-start  ">
              {/* {t("This resort, spanning 2,000 square meters")} */}
              Spanning 2,000 square meters, this resort includes 15 rooms that
              can host up to 35 guests, offering an ideal setting for relaxation
              and rejuvenation. Guests can partake in a range of calming
              activities, featuring three jacuzzis, a massage room, and
              exceptional catering services. Equipped with modern amenities like
              Wi-Fi, the resort ensures a stylish and comfortable experience for
              everyone.
            </p>{" "}
            <p className="text-start">
              {" "}
              {/* {t("Designed for ultimate comfort and rejuvenation")} */}
              Crafted for maximum comfort and rejuvenation, this resort offers a
              tranquil atmosphere enhanced by modern amenities. Guests have
              numerous options to relax, thanks to the resort is cutting-edge
              facilities.
            </p>{" "}
            <button className="py-2 px-6 hidden uppercase border-[1px] border-white/90 text-white/90 bg-[#647d8b] hover:bg-white hover:text-[#647d8b] duration-500 text-[10px] tracking-[.2rem]">
              {" "}
              {t("our story")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigImage;
