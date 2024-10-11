"use client";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Review = () => {
  const timeLine = gsap.timeline({ repeat: -1 });
  const timeLinebull = gsap.timeline({ repeat: -1 });
  const t = useTranslations("HomePage");
  useEffect(() => {
    timeLine
      .fromTo(
        ".review1",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 3,
          repeat: 1,
          yoyo: true,
        }
      )
      .fromTo(
        ".review2",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 3,
          repeat: 1,
          yoyo: true,
        }
      )
      .fromTo(
        ".review3",
        { opacity: 0 },
        { opacity: 1, duration: 3, repeat: 1, yoyo: true }
      );

    timeLinebull
      .fromTo(
        ".boll1",
        { backgroundColor: "gray" },
        {
          backgroundColor: "black",
          duration: 3,
          repeat: 1,
          yoyo: true,
        }
      )
      .fromTo(
        ".boll2",
        { backgroundColor: "gray" },
        {
          backgroundColor: "black",
          duration: 3,
          repeat: 1,
          yoyo: true,
        }
      )
      .fromTo(
        ".boll3",
        { backgroundColor: "gray" },
        {
          backgroundColor: "black",
          duration: 3,
          repeat: 1,
          yoyo: true,
        }
      );
  }, []);
  return (
    <>
      <div className="mt-32 flex flex-col items-center relative justify-between mb-[400px]">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&display=swap"
          rel="stylesheet"
        />
        <div className="flex justify-center items-center lg:mb-10 mb-24">
          <Image
            src="/assits/star.png"
            width={50}
            height={50}
            alt="star"
            className="w-4 h-4"
          />
          <Image
            src="/assits/star.png"
            width={50}
            height={50}
            alt="star"
            className="w-4 h-4"
          />
          <Image
            src="/assits/star.png"
            width={50}
            height={50}
            alt="star"
            className="w-4 h-4"
          />
          <Image
            src="/assits/star.png"
            width={50}
            height={50}
            alt="star"
            className="w-4 h-4"
          />
          <Image
            src="/assits/star.png"
            width={50}
            height={50}
            alt="star"
            className="w-4 h-4"
          />
        </div>
        <div className="w-2/3 absolute reviews opacity-0 top-16 review1 mx-auto text-center ">
          <div className="fontReview text-2xl font-serif text-[#394145] mb-5">
            <p>
              {t("Once you step into the villa you feel like royalty! The")}
            </p>
            <p>
              {t("spectacular view, your private pool and the space that you")}{" "}
            </p>
            <p>{t("call your own during the stay")} </p>
          </div>
          <p className="font-sans text-[#7e8083] text-[10px] tracking-[.2rem]">
            <span className="font-bold mr-2">JANE L.</span>
            {t("TRIP ADVISOR")}
          </p>
        </div>
        <div className="w-2/3 absolute reviews opacity-0 top-16 review2 mx-auto text-center ">
          <div className="fontReview text-2xl font-serif text-[#394145] mb-5">
            <p>{t("I could have stayed at Hidden")}</p>
            <p> {t("was easily the nicest")}</p>
            <p>{t("have ever stayed")} </p>
          </div>
          <p className="font-sans text-[#7e8083] text-[10px] tracking-[.2rem]">
            <span className="font-bold mr-2"> ANNA M.</span>
            {t("TRIP ADVISOR")}
          </p>
        </div>
        <div className="w-2/3 reviews opacity-0 top-16 absolute review3 mx-auto text-center ">
          <div className="fontReview text-2xl font-serif text-[#394145] mb-5">
            <p>
              {t("Absolute perfection The service the decor the food the")}{" "}
            </p>
            <p>{t("villas the view the staff")}</p>
            <p>{t("cmoved to your own estate")}</p>
          </div>
          <p className="font-sans text-[#7e8083] text-[10px] tracking-[.2rem]">
            <span className="font-bold mr-2"> Amy Argyle </span>
            {t("TRIP ADVISOR")}
          </p>
        </div>
        <div className="gap-x-2 flex absolute lg:top-60 top-96 items-center justify-between">
          <p className="w-2.5 h-2.5 boll1 rounded-full bg-slate-400"></p>
          <p className="w-2.5 h-2.5 boll2 rounded-full bg-slate-400"></p>
          <p className="w-2.5 h-2.5 boll3 rounded-full bg-slate-400"></p>
        </div>
      </div>
    </>
  );
};

export default Review;
