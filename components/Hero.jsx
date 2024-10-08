"use client";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  CloseButton,
  // Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
// import { Drawer, DrawerContent, StatDownArrow } from "@chakra-ui/react";
import { addDays } from "date-fns";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import { sendEmail } from "@/action/action";

const Hero = () => {
  const [open, setOpen] = useState();
  const [openDailog, setOpenDialog] = useState();
  const [calHide, sethideCal] = useState(false);
  const [calHide1, sethideCal1] = useState(false);
  const [roomHide, setHideRoom] = useState(false);
  const [openlang, setOpenLnag] = useState(true);
  const [openThank, setopenThank] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(),
      key: "selection",
    },
  ]);
  const [rooms, setRooms] = useState(0);
  const [phone, setPhone] = useState(0);
  const [name, setName] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [occasion, setOccasion] = useState();
  const [people, setPeople] = useState(0);
  const t = useTranslations("HomePage");

  const sendMail = async () => {
    try {
      // console.log({ name, email, phone });

      console.log({ name, phone, startDate, endDate, occasion, rooms, people });
      console.log("doneee");
      setOpenDialog(false);
      setopenThank(true);
      await sendEmail(name, phone, startDate, endDate, occasion, rooms, people);
    } catch (error) {
      console.log(error.message);
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

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
    // gsap.to(".p", {
    //   opacity: 1,
    //   stagger: 0.5,
    //   ease: "back.in",
    // });
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
        className="all  lg:w-full w-[w-100vw] text-white relative h-[100dvh] overflow-hidden scroll-smooth"
      >
        <div
          onClick={() => setOpen(false)}
          className={`h-full pl-2 pt-10 w-1/3 bg-slate-700 z-10 ${
            open ? "translate-x-0" : "-translate-x-[100%]"
          }   duration-1000 absolute flex flex-col items-start justify-start gap-12 `}
        >
          <Link href="#about" className=" cursor-pointer  p">
            {t("About")}
          </Link>{" "}
          <Link href="#rooms" className=" cursor-pointer  p">
            {t("our villas")}
          </Link>{" "}
          <Link href="#book" className=" cursor-pointer  p">
            {t("Contact & book")}
          </Link>{" "}
          <Link href="#packages" className=" cursor-pointer  p">
            {t("packages")}
          </Link>
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
        <div
          id="home"
          className="flex items-center w-full font-sans  justify-between -top-10 uppercase px-10 absolute"
        >
          {/* <div className="w-52  h-52"> */}
          <img
            src="/assits/logo.svg"
            loading="lazy"
            alt="logo"
            className="object-fill pt-4 w-40 h-40"
          />
          {/* </div> */}
          <div className="lg:flex flex-row hidden tracking-wider  items-center lg:opacity-100 opacity-0 justify-between cursor-pointer gap-11  text-[13px] font-semibold ">
            <Link href="#about" className=" link p">
              {t("About")}
            </Link>{" "}
            <Link href="#rooms" className=" link p">
              {t("our villas")}
            </Link>{" "}
            <Link href="#book" className=" link p">
              {t("Contact & book")}
            </Link>{" "}
            <Link href="#packages" className="  link p">
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
        <Link href="#about" className=" absolute bottom-4 right-6  ">
          <img
            src="/assits/down.svg"
            alt=""
            srcset=""
            className="h-[50px] w-[50px] text-white "
          />
        </Link>
        <div className="absolute flex flex-col items-center w-fit justify-center right-1/2 translate-x-1/2 bottom-10">
          <div className={`${!calHide1 ? "hidden" : ""} z-50  mb-5`}>
            <DateRangePicker
              onChange={(item) => {
                setDate([item.selection]), console.log(date);
              }}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={date}
              direction="horizontal"
              preventSnapRefocus={true}
              calendarFocus="backwards"
            />
          </div>
          <div
            className={`${
              !roomHide ? "hidden" : ""
            } flex items-center justify-between w-[200px] px-3 border-2 border-black translate-x-3 mb-5 h-[40px] mt-3 bg-white text-black`}
          >
            <p>Rooms</p>
            <div className="flex items-center justify-center gap-3">
              <button onClick={() => setRooms((prev) => prev + 1)} className="">
                +
              </button>
              <p className="">{rooms}</p>
              <button
                onClick={() => {
                  rooms === 0 ? setRooms(0) : setRooms((prev) => prev - 1);
                }}
                className=""
              >
                -
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 w-fit cursor-pointer text-black font-semibold justify-center">
            <p
              onClick={() => {
                sethideCal1((prev) => !prev);
                setStartDate(date[0].startDate);
                setEndDate(date[0].endDate);
              }}
              className="flex items-center text-[10px]  tracking-[.2rem] text-start border-[1px] border-black bg-white w-[200px] h-[40px] justify-start"
            >
              <img
                src="/assits/calend.png"
                alt=""
                srcset=""
                className="w-10 ml-2  h-10"
              />{" "}
              {...date.startDate || "CheckIn"}-{...date.endDate || "CheckOut"}
            </p>
            <div
              onClick={() => {
                setHideRoom((prev) => !prev);
              }}
              className="flex  justify-between px-3 items-center pl-2 text-[12px]  tracking-[.2rem] text-start border-[1px] h-[40px] border-black bg-white w-[200px] "
            >
              <p>Rooms</p>
              <p>{rooms}</p>
            </div>
            <botton
              onClick={() => {
                setOpenDialog(true);
              }}
              className="bg-[#f7f5f2] text-black  h-[40px]  py-3 px-4 text-[9px]  tracking-[.2rem] hover:bg-[#394145] hover:text-[#f7f5f2] hover:cursor-pointer duration-500 uppercase"
            >
              {t("check avilability")}
            </botton>
          </div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openDailog}
            onClose={() => setOpenDialog(false)}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={openDailog}>
              <Box className=" absolute top-[50%] right-[50%] translate-x-1/2 -translate-y-1/2 outline-none border-[1px] text-center py-3 px-3 border-[#394145]  w-[800px] h-fit bg-[#394145]">
                <CloseButton
                  onClick={() => setopenThank(false)}
                  className="text-white right-5 absolute"
                />
                <p className="text-3xl text-white font-semibold tracking-wider mb-5">
                  Welcome To Our Resort
                </p>
                <p className="text-xl text-white font-semibold tracking-wider">
                  Book your destination
                </p>
                <form
                  action={sendMail}
                  className="py-8 px-10 w-[500px] mx-auto"
                >
                  <div className="flex pb-4 items-center justify-between  gap-5">
                    <label htmlFor="name">Full Name</label>
                    <input
                      required
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className="w-[200px] h-[35px] pl-5 text-[#394145] outline-none"
                      placeholder="full name"
                    />
                  </div>
                  <div className="flex pb-4 items-center justify-between  gap-5">
                    <label htmlFor="name" className="">
                      Phone Number
                    </label>
                    <input
                      required
                      onChange={(e) => setPhone(e.target.value)}
                      type="number"
                      className="w-[200px] h-[35px] pl-5 ml-5   text-[#394145] outline-none"
                      placeholder="+971"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex pb-4 items-center justify-between  gap-5">
                      <p>Date</p>
                      <p
                        onClick={() => {
                          sethideCal((prev) => !prev);
                          console.log(date[0].startDate, date[0].endDate);
                          setStartDate(date[0].startDate);
                          setEndDate(date[0].endDate);
                        }}
                        className=" cursor-pointer flex items-center text-[10px] text[#394145] tracking-[.2rem] text-start border-[1px] border-black bg-white w-[200px] h-[40px] justify-start"
                      >
                        <img
                          src="/assits/calend.png"
                          alt=""
                          srcset=""
                          className="w-10 ml-2  h-10"
                        />{" "}
                        {...date.startDate || "CheckIn"}-
                        {...date.endDate || "CheckOut"}
                      </p>
                    </div>
                    {/* <div className="absolute flex flex-col items-center w-fit justify-between  right-1/2 translate-x-1/2 bottom-10"> */}
                    <div
                      className={`${
                        !calHide ? "hidden" : ""
                      } z-50 absolute mt-10 mb-5`}
                    >
                      <DateRangePicker
                        onChange={(item) => {
                          setDate([item.selection]), console.log(date);
                        }}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={date}
                        direction="horizontal"
                        preventSnapRefocus={true}
                        calendarFocus="backwards"
                      />
                    </div>
                  </div>
                  <div className="flex pb-4 items-center justify-between  gap-5">
                    <label htmlFor="name">Occasion</label>
                    <select
                      required
                      onChange={(e) => setOccasion(e.target.value)}
                      type="text"
                      className="w-[200px] h-[30px] pl-5 text-[#394145] outline-none"
                      placeholder="Select"
                    >
                      <option value="" className="text-[#394145]">
                        Select
                      </option>
                      <option value="wedding">Wedding</option>
                      <option value="family">Family</option>
                      <option value="event">Event</option>
                    </select>
                  </div>

                  <div className="flex pb-4 items-center justify-between  gap-5">
                    <label htmlFor="name">Number of people</label>
                    <input
                      required
                      onChange={(e) => setPeople(e.target.value)}
                      type="number"
                      className="w-[200px] h-[30px] pl-5 text-[#394145] outline-none"
                      placeholder="eg 1, 2"
                    />
                  </div>
                  <div className="flex pb-4 items-center justify-between  gap-5">
                    <label htmlFor="name">Number of Rooms</label>
                    <input
                      required
                      value={rooms}
                      onChange={(e) => setRooms(e.target.value)}
                      type="number"
                      className="w-[200px] h-[30px] pl-5 text-[#394145] outline-none"
                      placeholder="Rooms"
                    />
                  </div>
                  <button
                    type="submit"
                    // onClick={(() => sendMail, setopenThank(true))}
                    className="py-1.5 px-9 text-sm text-[#394145] bg-white my-7"
                  >
                    Submit
                  </button>
                </form>
              </Box>
            </Fade>
          </Modal>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openThank}
            onClose={() => setopenThank(false)}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={openThank}>
              <Box
                className={`${
                  !openThank ? "" : ""
                }absolute top-[50%] right-[50%] translate-x-1/2 -translate-y-1/2 outline-none border-[1px] text-center py-3 px-3 border-[#394145]  h-[400px] w-[800px]  bg-[#394145]`}
              >
                <CloseButton
                  onClick={() => setOpenDialog(false)}
                  className="text-white right-5 absolute"
                />
                <p className="text-3xl text-white font-semibold tracking-wider mt-10 mb-5">
                  Welcome To Our Resort
                </p>
                <p className="text-xl text-white font-semibold tracking-wider">
                  Book your destination
                </p>
                <h1 className="text-2xl bg-[#b1b1b1] w-[400px] mx-auto py-2 my-20 text-white">
                  Thank you for your submission
                </h1>
              </Box>
            </Fade>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Hero;
