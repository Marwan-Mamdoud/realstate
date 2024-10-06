"use client";
import ModalImage from "react-modal-image";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { CloseButton } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

const Rooms = () => {
  const t = useTranslations("HomePage");
  const [hover, setHover] = useState(true);
  const [hover2, setHover2] = useState(true);
  const [hover3, setHover3] = useState(true);
  const [hover4, setHover4] = useState(true);
  const [hover5, setHover5] = useState(true);
  const [open, setOpen] = useState();
  const [open2, setOpen2] = useState();
  const [open3, setOpen3] = useState();
  const [open4, setOpen4] = useState();
  const [open5, setOpen5] = useState();
  // const model = useRef(null);
  // const model2 = useRef(null);
  // const model3 = useRef(null);
  // const model4 = useRef(null);
  // const model5 = useRef(null);
  // const hoverEnter = () => {
  //   // // gsap.to(".roomImage", { scale: 2 });
  //   // gsap.to(".", { width: 220, duration: 1 });
  //   // // gsap.set(".rooms-back-ground", {
  //   // //   className: "-=back-ground-image",
  //   // //   duration: 2,
  //   // // });
  // };
  // const hoverLeave = () => {
  //   // // gsap.to(".roomImage", { scale: 2 });
  //   // gsap.to(".", { width: 50, duration: 1 });
  //   // // gsap.set(".rooms-back-ground", {
  //   // //   className: "+=back-ground-image",
  //   // //   duration: 1,
  //   // // });
  // };
  return (
    <>
      <div className="w-full flex flex-col pt-32 mx-auto">
        <div className="flex lg:flex-row flex-col justify-between lg:w-1/2 w-full  gap-2 mx-auto pb-20">
          <div className="flex flex-col gap-5 h-full lg:w-3/5 w-full  lg:items-start items-center justify-between">
            <p className="uppercase tracking-wide text-gray-500 font-sans">
              {t("AWARD WINNING VILLA RESORT")}{" "}
            </p>
            <div className="text-xl w-full flex flex-col gap-2 justify-between lg:items-start items-center text-black font-sans">
              <p>{t("Enjoy breathtaking sunset ocean")} </p>
              <p>{t("views from your private Uluwatu")} </p>
              <p>{t("villa")} </p>
            </div>
          </div>
          <div id="rooms" className="flex items-center justify-between gap-0">
            <Image
              src="/assits/icon1.png"
              alt="icon1"
              width={150}
              height={999}
            />
            <Image
              src="/assits/icon2.png"
              alt="icon1"
              width={150}
              height={999}
            />
            <Image
              src="/assits/icon3.png"
              alt="icon1"
              width={150}
              height={999}
            />
          </div>
        </div>
        <div
          className={` grid lg:grid-cols-3 grid-cols-1 gap-5 lg:gap-0 w-5/6 mx-auto`}
        >
          <div
            className={`w-full   h-[440px] overflow-hidden relative`}
            onMouseLeave={() => {
              setHover(true);
            }}
            onMouseEnter={() => {
              setHover(false);
            }}
          >
            <div
              onClick={() => {
                setOpen(true);
              }}
              className={`back-ground-image rooms-back-ground transition-all duration-1000  ${
                !hover && "opacity-0"
              }  w-full h-full absolute z-20`}
            ></div>
            <Image
              fill
              src="/assits/single.webp"
              alt="resort"
              className={`transition-all duration-1000 ${
                !hover && "scale-110"
              }  object-cover roomImage w-full h-full `}
            />
            <div className={`absolute bottom-0  left-4 h-1/5  z-30 w-full`}>
              <div
                className={`bg-white h-[1px]  ${
                  !hover ? "w-10/12" : "w-2/6"
                } transition-all duration-1000 `}
              />
              <p className="font-sans uppercase text-[12px] tracking-widest  text-white pt-5 ">
                {t("separate badRoom")}
              </p>
            </div>
          </div>
          <div
            className={`w-full  h-[440px] overflow-hidden relative`}
            onMouseLeave={() => {
              setHover2(true);
            }}
            onMouseEnter={() => {
              setHover2(false);
            }}
          >
            <div
              onClick={() => {
                setOpen2(true);
              }}
              className={`back-ground-image rooms-back-ground transition-all duration-1000  ${
                !hover2 && "opacity-0"
              }  w-full h-full absolute z-20`}
            ></div>
            <Image
              fill
              src="/assits/doublle.webp"
              alt="resort"
              className={`transition-all duration-1000 ${
                !hover2 && "scale-110"
              }  object-cover roomImage w-full h-full `}
            />
            <div className={`absolute bottom-0  left-4 h-1/5  z-30 w-full`}>
              <div
                className={`bg-white h-[1px]  ${
                  !hover2 ? "w-10/12" : "w-2/6"
                } transition-all duration-1000`}
              />
              <p className="font-sans uppercase text-[12px] tracking-widest  text-white pt-5 ">
                {t("connected badRoom")}
              </p>
            </div>
          </div>
          <div
            className={`w-full  h-[440px] overflow-hidden relative`}
            onMouseLeave={() => {
              setHover3(true);
            }}
            onMouseEnter={() => {
              setHover3(false);
            }}
          >
            <div
              onClick={() => {
                setOpen3(true);
              }}
              className={`back-ground-image rooms-back-ground transition-all duration-1000  ${
                !hover3 && "opacity-0"
              }  w-full h-full absolute z-20`}
            ></div>
            <Image
              fill
              src="/assits/group.webp"
              alt="resort"
              className={`transition-all duration-1000 ${
                !hover3 && "scale-110"
              }  object-cover roomImage w-full h-full `}
            />
            <div className={`absolute bottom-0  left-4 h-1/5  z-30 w-full`}>
              <div
                className={`bg-white h-[1px]  ${
                  !hover3 ? "w-10/12" : "w-2/6"
                } transition-all duration-1000 `}
              />
              <p className="font-sans uppercase text-[12px] tracking-widest  text-white pt-5 ">
                {t("group badRoom")}
              </p>
            </div>
          </div>
          {/* <div
            className={`w-full  h-[440px] overflow-hidden relative`}
            onMouseLeave={() => {
              setHover4(true);
            }}
            onMouseEnter={() => {
              setHover4(false);
            }}
          >
            <div
              onClick={() => {
                setOpen4(true);
              }}
              className={`back-ground-image rooms-back-ground transition-all duration-1000  ${
                !hover4 && "opacity-0"
              }  w-full h-full absolute z-20`}
            ></div>
            <Image
              fill
              src="/assits/Resort (4).webp"
              alt="resort"
              className={`transition-all duration-1000 ${
                !hover4 && "scale-110"
              }  object-cover roomImage w-full h-full `}
            />
            <div className={`absolute bottom-0  left-4 h-1/5  z-30 w-full`}>
              <div
                className={`bg-white h-[1px]  ${
                  !hover4 ? "w-10/12" : "w-2/6"
                } transition-all duration-1000 `}
              />
              <p className="font-sans uppercase text-[12px] tracking-widest  text-white pt-5 ">
                four badRoom
              </p>
            </div>
          </div>
          <div
            className={`w-full  h-[440px] overflow-hidden relative`}
            onMouseLeave={() => {
              setHover5(true);
            }}
            onMouseEnter={() => {
              setHover5(false);
            }}
          >
            <div
              onClick={() => {
                setOpen5(true);
              }}
              className={`back-ground-image rooms-back-ground transition-all duration-1000  ${
                !hover5 && "opacity-0"
              }  w-full h-full absolute z-20`}
            ></div>

            <Image
              fill
              src="/assits/Resort (5).webp"
              alt="resort"
              className={`transition-all duration-1000 ${
                !hover5 && "scale-110"
              }  object-cover roomImage w-full h-full `}
            />
            <div className={`absolute bottom-0  left-4 h-1/5  z-30 w-full`}>
              <div
                className={`bg-white h-[1px]  ${
                  !hover5 ? "w-10/12" : "w-2/6"
                } transition-all duration-1000 `}
              />
              <p className="font-sans uppercase text-[12px] tracking-widest  text-white pt-5 ">
                five badRoom
              </p>
            </div>
          </div> */}
        </div>
        {open5 && (
          <div
            onClick={() => setOpen5(false)}
            className="fixed inset-0 z-30 items-center justify-center flex backdrop-blur-sm"
          >
            <Image
              src="/assits/Resort (5).webp"
              alt="image"
              width={999}
              height={999}
              className="w-fit  object-cover h-fit"
            />
            <CloseButton className=" absolute text-red-700 font-extrabold text-5xl right-[50px] top-[50px]" />
          </div>
        )}
        {open4 && (
          <div
            onClick={() => setOpen4(false)}
            className="fixed inset-0 z-30 items-center justify-center flex backdrop-blur-sm"
          >
            <Image
              src="/assits/Resort (4).webp"
              alt="image"
              width={999}
              height={999}
              className="w-fit  object-cover h-fit"
            />
            <CloseButton className=" absolute text-red-700 font-extrabold text-5xl right-[50px] top-[50px]" />
          </div>
        )}
        {open3 && (
          <div
            onClick={() => setOpen3(false)}
            className="fixed inset-0 z-30 items-center justify-center flex backdrop-blur-sm"
          >
            <Image
              src="/assits/group.webp"
              alt="image"
              width={999}
              height={999}
              className="w-fit  object-cover h-fit"
            />
            <CloseButton className=" absolute text-red-700 font-extrabold text-5xl right-[50px] top-[50px]" />
          </div>
        )}
        {open2 && (
          <div
            onClick={() => setOpen2(false)}
            className="fixed inset-0 z-30 items-center justify-center flex backdrop-blur-sm"
          >
            <Image
              src="/assits/doublle.webp"
              alt="image"
              width={999}
              height={999}
              className="w-fit  object-cover h-fit"
            />
            <CloseButton className=" absolute text-red-700 font-extrabold text-5xl right-[50px] top-[50px]" />
          </div>
        )}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-30 items-center justify-center flex backdrop-blur-sm"
          >
            <Image
              src="/assits/single.webp"
              alt="image"
              width={999}
              height={999}
              className="w-fit  object-cover h-fit"
            />
            <CloseButton className=" absolute text-red-700 font-extrabold text-5xl right-[50px] top-[50px]" />
          </div>
        )}
        <button className="bg-white hidden py-3 mt-16 hover:bg-[#394145] hover:text-white transition-all duration-700  px-6 mx-auto font-sans uppercase font-normal text-[10px] border-black/60 border-[1px] tracking-[.2rem] text-black">
          {t("EXPLORE ALL Villas")}
        </button>
      </div>
    </>
  );
};

export default Rooms;
