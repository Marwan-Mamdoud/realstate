"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React from "react";
import { useEffect } from "react";

const Images = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      ".fullDev",
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".fullDev",
          start: "top bottom",
          end: "center center",
          scrub: true,
          toggleActions: "restart pause restart pause",
        },
        opacity: 1,
      }
    );
    gsap.fromTo(
      ".fullDev",
      { opacity: 1 },
      {
        scrollTrigger: {
          trigger: ".fullDev",
          start: "center top",
          end: "bottom top",
          scrub: true,
          toggleActions: "restart pause restart pause",
        },
        opacity: 0,
      }
    );
    gsap.fromTo(
      ".imageSpesial",
      { y: "60" },
      {
        scrollTrigger: {
          trigger: ".imageSpesial",
          start: "top bottom",
          end: "top top",
          scrub: true,
          toggleActions: "restart pause restart pause",
        },
        y: "0",
      }
    );
  }, []);
  return (
    <div className="fullDev  flex items-center justify-center gap-5 lg:mt-28 pt-20 lg:w-10/12 h-fit w-full px-2 mx-auto mb-52">
      <div className=" flex flex-col gap-10">
        <img
          src="/assits/Resort (1).webp"
          alt="imges"
          className="object-cover w-[280px] h-[210px]"
        />
        <img
          src="/assits/onee.webp"
          alt="imges"
          className="object-cover w-[280px] h-[210px]"
        />
      </div>
      <div className=" imageSpesial flex flex-col gap-10">
        <img
          src="/assits/thrree.webp"
          alt="imges"
          className="object-cover w-[280px] h-[210px]"
        />

        <img
          src="/assits/Resort (2).webp"
          alt="imges"
          className="object-cover w-[280px] h-[210px] "
        />
      </div>
      <div className=" flex flex-col gap-10">
        <img
          src="/assits/Resort (5).webp"
          alt="imges"
          className="object-cover w-[280px] h-[210px]"
        />
        <img
          src="/assits/five.webp"
          alt="imges"
          className="object-cover w-[280px] h-[210px]"
        />
      </div>
      <div className=" imageSpesial flex flex-col gap-10">
        <img
          src="/assits/twwo.webp"
          alt="imges"
          className="object-cover w-[280px] h-[210px]"
        />
        <img
          src="/assits/Resort (3).webp"
          alt="imges"
          className="object-cover w-[280px] h-[210px]"
        />
      </div>
      <div className=" flex flex-col gap-10">
        <img
          src="/assits/Resort (4).webp"
          alt="imges"
          className="object-cover w-[280px] h-[210px]"
        />
        <img
          src="/assits/fourr.webp"
          alt="imges"
          className="object-cover w-[280px] h-[210px]"
        />
      </div>
    </div>
  );
};

export default Images;
