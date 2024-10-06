"use client";
import { Drawer, DrawerContent } from "@chakra-ui/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [open, setOpen] = useState();
  const [openlang, setOpenLnag] = useState(true);
  const t = useTranslations("HomePage");

  // const hoverMianTextStart = () => {
  //   gsap.to(".main-text", { scale: 1.5, duration: 3 });
  // };
  // const hoverMianTextEnd = () => {
  //   gsap.to(".main-text", { scale: 1, duration: 3 });
  // };
  const timeLine = gsap.timeline({ repeat: -1 });
  useEffect(() => {
    gsap.fromTo(
      ".image",
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 3,
        repeat: -1,
        yoyo: true,
      }
    );
    timeLine
      .fromTo(
        ".bull1",
        { backgroundColor: "gray" },
        {
          backgroundColor: "white",
          duration: 1.5,
          repeat: 1,
          yoyo: true,
        }
      )
      .fromTo(
        ".bull2",
        { backgroundColor: "gray" },
        {
          backgroundColor: "white",
          duration: 1.5,
          repeat: 1,
          yoyo: true,
        }
      )
      .fromTo(
        ".bull3",
        { backgroundColor: "gray" },
        {
          backgroundColor: "white",
          duration: 1.5,
          repeat: 1,
          yoyo: true,
        }
      )
      .fromTo(
        ".bull4",
        { backgroundColor: "gray" },
        {
          backgroundColor: "white",
          duration: 1.5,
          repeat: 1,
          yoyo: true,
        }
      );
    gsap.to(".p", {
      opacity: 1,
      stagger: 0.5,
      ease: "back.in",
    });
    gsap.fromTo(
      ".main-text",
      {
        opacity: 0,
        duration: 2,
        y: "100",
      },
      { y: "0", duration: 2, opacity: 1 }
    );
  }, []);
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;1,14..32,300&display=swap"
        rel="stylesheet"
      />
      <div
        onMouseEnter={() => {
          console.log("done");
        }}
        className="all  lg:w-full w-[w-100vw] text-white  h-[100dvh] overflow-hidden scroll-smooth"
      >
        <div
          className={`h-full pl-2 pt-10 w-1/3 bg-slate-700 z-10 ${
            open ? "translate-x-0" : "-translate-x-[100%]"
          }   duration-1000 absolute flex flex-col items-start justify-start gap-12 `}
        >
          <p className=" cursor-pointer  p">{t("About")}</p>{" "}
          <p className=" cursor-pointer  p">{t("our villas")}</p>{" "}
          <p className=" cursor-pointer  p">{t("Contact & book")}</p>{" "}
          <p className=" cursor-pointer  p">{t("packages")}</p>
        </div>
        <Image
          src="/assits/Resort (1).webp"
          loading="lazy"
          alt="image"
          className="image object-cover"
          fill
        />
        <Image
          src="/assits/Resort (2).webp"
          loading="lazy"
          alt="image"
          className="image object-cover"
          fill
        />
        <Image
          src="/assits/Resort (3).webp"
          loading="lazy"
          alt="image"
          className="image object-cover"
          fill
        />
        <Image
          src="/assits/Resort (4).webp"
          loading="lazy"
          alt="image"
          className="image object-cover"
          fill
        />
        <Image
          src="/assits/Resort (5).webp"
          loading="lazy"
          alt="image"
          className="image object-cover"
          fill
        />
        <div className="flex items-center w-full font-sans  justify-between -top-10 uppercase px-10 absolute">
          {/* <div className="w-52  h-52"> */}
          <img
            src="/assits/logo.svg"
            loading="lazy"
            alt="logo"
            className="object-fill pt-4 w-40 h-40"
          />
          {/* </div> */}
          <div className="lg:flex flex-row hidden tracking-wider  items-center lg:opacity-100 opacity-0 justify-between cursor-pointer gap-11  text-[13px] font-semibold ">
            <Link href="#about" className="opacity-0 link p">
              {t("About")}
            </Link>{" "}
            <Link href="#rooms" className="opacity-0 link p">
              {t("our villas")}
            </Link>{" "}
            <Link href="#book" className="opacity-0 link p">
              {t("Contact & book")}
            </Link>{" "}
            <Link href="#packages" className="opacity-0  link p">
              {t("packages")}
            </Link>
            <div
              onClick={() => setOpenLnag((prev) => !prev)}
              className={` gap-2 cursor-pointer relative right-5 `}
            >
              <div className="flex ">
                <Image src="/assits/lang.png" width={25} height={25} />
              </div>

              <div
                className={`flex flex-col absolute border-2 top-8 px-5 items-center justify-center border-white ${
                  !openlang ? "" : "hidden "
                }  rounded-lg `}
              >
                <Link href="/en" className="">
                  en
                </Link>
                <Link href="/cs" className="">
                  cs
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:hidden flex gap-5">
            <div
              onClick={() => setOpenLnag((prev) => !prev)}
              className={`  lg:hidden cursor-pointer relative  `}
            >
              <div className="flex ">
                <Image src="/assits/lang.png" width={25} height={25} />
              </div>

              <div
                className={`flex flex-col absolute border-2 top-8 px-5 items-center justify-center border-white ${
                  !openlang ? "" : "hidden "
                }  rounded-lg `}
              >
                <Link href="/en" className="">
                  en
                </Link>
                <Link href="/cs" className="">
                  cs
                </Link>
              </div>
            </div>
            <button
              className="lg:hidden "
              onClick={() => {
                setOpen((prev) => !prev);
                console.log(open);
              }}
            >
              <div className="border-t-2 border-white h-1 w-5"></div>
              <div className="border-t-2 border-white h-1 w-5"></div>
              <div className="border-t-2 border-white h-1 w-5"></div>
            </button>
          </div>
        </div>
        <div
          // onMouseLeave={hoverMianTextEnd}
          // onMouseEnter={hoverMianTextStart}
          className="absolute top-[50%] -translate-y-1/2   w-full main-text  flex flex-col justify-center items-center  lg:text-5xl md:text-5xl text-2xl  font-sans "
        >
          <p className="great-vibes-regular text-4xl lg:text-6xl md:text-6xl">
            {t("Your Panoramic")}
          </p>
          <p className="font-normal  tracking-[.5rem] uppercase">
            {t("villa resort in")}
          </p>
          <span className="font-normal  tracking-[.5rem] uppercase">
            {t("paradise")}
          </span>
        </div>
        <div className="absolute bottom-0 p-4 gap-x-2 flex items-center justify-between">
          <p className="w-2.5 h-2.5 bull1 rounded-full bg-slate-500"></p>
          <p className="w-2.5 h-2.5 bull2 rounded-full bg-slate-500"></p>
          <p className="w-2.5 h-2.5 bull3 rounded-full bg-slate-500"></p>
          <p className="w-2.5 h-2.5 bull4 rounded-full bg-slate-500"></p>
        </div>
        <Link
          href="#rooms"
          className="bg-[#f7f5f2] text-black absolute  py-3 px-4 text-[9px]  bottom-4 right-6 tracking-[.2rem] hover:bg-[#394145] hover:text-[#f7f5f2] hover:cursor-pointer duration-500 uppercase"
        >
          {t("check avilability")}
        </Link>
      </div>
    </>
  );
};

export default Hero;
