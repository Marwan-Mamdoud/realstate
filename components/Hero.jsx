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
import { duration } from "@mui/material";
import { delay } from "framer-motion";

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
  const options = { weekday: "short", month: "short", day: "numeric" };
  const [rooms, setRooms] = useState(0);
  const [phone, setPhone] = useState();
  const [name, setName] = useState();
  const [startDate, setStartDate] = useState(
    new Date().toLocaleDateString("en-US", options)
  );
  const [endDate, setEndDate] = useState(
    new Date().toLocaleDateString("en-US", options)
  );
  const [occasion, setOccasion] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [people, setPeople] = useState(0);
  const t = useTranslations("HomePage");
  const sendMail = async () => {
    try {
      // console.log({ name, email, phone });
      console.log({ name, phone, startDate, endDate, occasion, rooms, people });

      console.log("doneee");
      setOpenDialog(false);
      setopenThank(true);
      await sendEmail(
        name,
        email,
        phone,
        startDate,
        endDate,
        occasion,
        rooms,
        people,
        message
      );
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

  const tl = gsap.timeline({ repeat: -1 });

  useEffect(() => {
    gsap.fromTo(
      ".image",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        stagger: 6,
        repeat: -1,
      }
    );

    tl.to(".bull1", { backgroundColor: "white", duration: 0.5 }) // تغيير اللون إلى الأبيض خلال 1 ثانية
      .to(".bull1", { duration: 5 }) // تثبيت اللون الأبيض لمدة 6 ثوانٍ
      .to(".bull1", { backgroundColor: "gray", duration: 0.5 })
      .to(".bull2", { backgroundColor: "white", duration: 0.5 }) // تغيير اللون إلى الأبيض خلال 1 ثانية
      .to(".bull2", { duration: 5 }) // تثبيت اللون الأبيض لمدة 6 ثوانٍ
      .to(".bull2", { backgroundColor: "gray", duration: 0.5 })
      .to(".bull3", { backgroundColor: "white", duration: 0.5 }) // تغيير اللون إلى الأبيض خلال 1 ثانية
      .to(".bull3", { duration: 5 }) // تثبيت اللون الأبيض لمدة 6 ثوانٍ
      .to(".bull3", { backgroundColor: "gray", duration: 0.5 })
      .to(".bull4", { backgroundColor: "white", duration: 0.5 }) // تغيير اللون إلى الأبيض خلال 1 ثانية
      .to(".bull4", { duration: 5 }) // تثبيت اللون الأبيض لمدة 6 ثوانٍ
      .to(".bull4", { backgroundColor: "gray", duration: 0.5 }); // العودة إلى اللون الرمادي خلال 1 ثانية

    // timeLine
    //   .fromTo(
    //     ".bull1",
    //     { backgroundColor: "gray" },
    //     {
    //       backgroundColor: "white",
    //       duration: 1,
    //       repeat: 1,
    //       yoyo: true,
    //     }
    //   )
    //   .fromTo(
    //     ".bull2",
    //     { backgroundColor: "gray" },
    //     {
    //       backgroundColor: "white",
    //       duration: 1,
    //       repeat: 1,
    //       yoyo: true,
    //     }
    //   )
    //   .fromTo(
    //     ".bull3",
    //     { backgroundColor: "gray" },
    //     {
    //       backgroundColor: "white",
    //       duration: 1,
    //       repeat: 1,
    //       yoyo: true,
    //     }
    //   )
    //   .fromTo(
    //     ".bull4",
    //     { backgroundColor: "gray" },
    //     {
    //       backgroundColor: "white",
    //       duration: 1,
    //       repeat: 1,
    //       yoyo: true,
    //     }
    //   );

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
        <div className="overlay"></div>
        <div
          onClick={() => setOpen(false)}
          className={`h-full pl-2 pt-10 w-1/3 bg-slate-700  z-50 ${
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
        {/* <div className="media-wrapper">
          <div className="overlay"></div>
          <div className="video-wrapper"> */}
        <video
          autoPlay
          muted
          loop
          className="video image w-full h-full object-cover"
          src="/assits/Real estate.mp4"
        ></video>
        {/* </div>
        </div>
        <div className="media-wrapper">
          <div className="overlay"></div>
          <div className="image-wrapper"> */}

        <Image
          src="/assits/Resort (1).webp"
          loading="lazy"
          alt="image"
          className="image  object-cover"
          fill
        />
        {/* </div>
        </div>
        <div className="media-wrapper">
          <div className="overlay"></div>
          <div className="image-wrapper"> */}
        <Image
          src="/assits/Resort (2).webp"
          loading="lazy"
          alt="image"
          className="image object-cover"
          fill
        />
        {/* </div>
        </div>
        <div className="media-wrapper">
          <div className="overlay"></div> */}
        <Image
          src="/assits/Resort (3).webp"
          loading="lazy"
          alt="image"
          className="image object-cover"
          fill
        />
        {/* </div>
        <div className="media-wrapper">
          <div className="overlay"></div> */}
        <Image
          src="/assits/Resort (5).webp"
          loading="lazy"
          alt="image"
          className="image object-cover"
          fill
        />
        {/* </div>
        <div className="media-wrapper">
          <div className="overlay"></div> */}
        <Image
          src="/assits/Resort (4).webp"
          loading="lazy"
          alt="image"
          className="image object-cover"
          fill
        />
        {/* </div> */}
        <div
          id="home"
          className="flex items-center z-20  w-full font-sans  justify-between -top-10 uppercase px-10 absolute"
        >
          {/* <div className="w-52  h-52"> */}
          <img
            src="/assits/logo.svg"
            loading="lazy"
            alt="logo"
            className="object-fill pt-4 w-40 h-40"
          />
          {/* </div> */}
          <div className="lg:flex flex-row hidden tracking-wider absolute z-50 right-10  items-center lg:opacity-100 opacity-0 justify-between cursor-pointer gap-11  text-[13px] font-semibold ">
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
                className={`flex flex-col absolute border-2 top-8 lg:-right-5  px-5 items-center justify-center border-white ${
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
                <Image
                  src="/assits/lang.png"
                  width={25}
                  height={25}
                  alt="image"
                />
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
          className="absolute top-[50%] -translate-y-1/2   w-full main-text  flex flex-col justify-center items-center  lg:text-5xl md:text-5xl text-2xl z-10  font-sans "
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
        <div className="absolute bottom-0 p-4 gap-x-2 flex items-center z-10 justify-between">
          <p className="w-2.5 h-2.5 bull1 bull rounded-full bg-slate-500"></p>
          <p className="w-2.5 h-2.5 bull2  bull rounded-full bg-slate-500"></p>
          <p className="w-2.5 h-2.5 bull3 bull rounded-full bg-slate-500"></p>
          <p className="w-2.5 h-2.5 bull4 bull rounded-full bg-slate-500"></p>
        </div>
        <Link href="#about" className=" absolute  bottom-4 z-20 right-6  ">
          <img
            src="/assits/down.png"
            alt=""
            srcset=""
            className="h-[40px]  w-[40px] text-white "
          />
        </Link>
        <div className="absolute z-20 flex flex-col  text-black  items-center w-fit justify-center right-1/2 translate-x-1/2 bottom-10">
          <div className={`${!calHide1 ? "hidden" : ""} z-50 text-black  mb-5`}>
            <DateRangePicker
              onChange={(item) => {
                setDate([item.selection]), console.log(date);
              }}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={true}
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
            } flex flex-col items-center justify-center w-fit border-[1px] mb-2 translate-x-6 border-black  h-fit `}
          >
            <div
              className={`${
                !roomHide ? "hidden" : ""
              } flex items-center justify-between w-[220px] px-3  uppercase  h-[30px]  bg-white text-black pl-2 text-[9.3px]  font-semibold tracking-[.2rem]`}
            >
              <p>{t("Rooms")}</p>
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setRooms((prev) => prev + 1)}
                  className=""
                >
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
            <div
              className={`${
                !roomHide ? "hidden" : ""
              } flex items-center justify-between w-[220px] px-3   h-[30px] uppercase bg-white text-black pl-2 text-[9.3px]  font-semibold tracking-[.2rem]`}
            >
              <p>{t("people")}</p>
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setPeople((prev) => +prev + 1)}
                  className=""
                >
                  +
                </button>
                <p className="">{people}</p>
                <button
                  onClick={() => {
                    people === 0 ? setPeople(0) : setPeople((prev) => prev - 1);
                  }}
                  className=""
                >
                  -
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-0 lg:w-fit w-[290px]  lg:flex-row flex-col cursor-pointer border-y-[8px] border-x-[9px] border-[#647d8b] text-black  justify-center">
            <p
              onClick={() => {
                sethideCal1((prev) => !prev);
                setStartDate(
                  date[0].startDate.toLocaleDateString("en-US", options)
                );
                setEndDate(
                  date[0].endDate.toLocaleDateString("en-US", options)
                );
              }}
              className="flex items-center justify-start text-[9.5px]  font-semibold  tracking-[.2rem] text-start uppercase  bg-white lg:w-[290px] w-full h-[45px]"
            >
              <img
                src="/assits/calend.png"
                alt=""
                srcset=""
                className="w-6 ml-2 mr-5  h-6"
              />{" "}
              {`${startDate || "chackIn"}`} - {`${endDate || "CheckOut"}`}
            </p>
            <div
              onClick={() => {
                setHideRoom((prev) => !prev);
              }}
              className="flex bg-white justify-start px-3 items-center text-black pl-2 text-[9.3px]    font-semibold tracking-[.2rem] text-start uppercase  lg:border-x-[9px] h-[45px] border-[#647d8b] w-full lg:w-[290px] "
            >
              <img
                src="/assits/user.png"
                alt=""
                srcset=""
                className="w-5 mr-5 ml-2  h-5"
              />{" "}
              <p className="mr-7">
                {t("people")}: {people}
              </p>
              <p className="">
                {t("Rooms")}: {rooms}
              </p>
            </div>
            <botton
              onClick={() => {
                setOpenDialog(true);
              }}
              className="bg-[#f7f5f2] text-black   py-[15px]  text-center lg:w-[140px] w-full  text-[9.5px] font-semibold tracking-[.2rem] hover:bg-[#394145] hover:text-[#f7f5f2] hover:cursor-pointer duration-500 uppercase"
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
            className="overflow-auto"
          >
            <Fade in={openDailog}>
              <Box className=" absolute flex flex-col items-center text-white justify-center outline-none border-[1px] text-center py-3 px-3 border-[#394145]  w-full overflow-auto lg:overflow-auto bg-[#394145] opacity-40  ">
                <CloseButton
                  onClick={() => setOpenDialog(false)}
                  className="text-white right-5 top-5 text-xl absolute"
                />
                <p className="lg:text-3xl text-xl  font-light uppercase font-sans w-full mx-auto text-white  tracking-[.3rem] lg:mt-12  mb-1 lg:mb-5">
                  {t("Welcome To Our Resort")}
                </p>
                <p className="lg:text-xl text-base text-white font-light uppercase font-sans  tracking-wider">
                  {t("Book your destination")}
                </p>
                <form
                  action={sendMail}
                  className="lg:py-8 py-1 w-fit   lg:w-[540px] mx-auto"
                >
                  <div className="flex lg:flex-row flex-col pb-4 items-start gap-3 font-big-image py-5 justify-between  ">
                    <label htmlFor="name">{t("Full Name")}</label>
                    <input
                      required
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className="w-[290px] h-[40px] pl-5 rounded-none text-[#394145] outline-none"
                      placeholder="full name"
                    />
                  </div>
                  <div className="flex lg:flex-row flex-col pb-4 items-start gap-3 font-big-image py-5 justify-between  ">
                    <label htmlFor="name" className="text-white">
                      {t("Email")}
                    </label>
                    <input
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="w-[290px] h-[40px] pl-5 rounded-none text-[#394145] outline-none"
                      placeholder="Email"
                    />
                  </div>
                  <div className="flex lg:flex-row flex-col pb-4 items-start gap-3 font-big-image py-5 justify-between ">
                    <label
                      htmlFor="name"
                      className=" text-white text-start w-fit"
                    >
                      {t("Phone Number")}
                    </label>
                    <input
                      required
                      onChange={(e) => setPhone(+e.target.value)}
                      type="text"
                      className="w-[290px] h-[40px] pl-5  rounded-none  text-[#394145] outline-none"
                      placeholder="+971"
                    />
                  </div>
                  <div className="flex flex-col  ">
                    <div className="flex lg:flex-row flex-col  py-5 items-start gap-3  justify-between  ">
                      <p className="font-big-image text-white">{t("Date")}</p>
                      <p
                        onClick={() => {
                          sethideCal((prev) => !prev);
                          console.log(date[0].startDate, date[0].endDate);
                          setStartDate(
                            date[0].startDate.toLocaleDateString(
                              "en-US",
                              options
                            )
                          );
                          setEndDate(
                            date[0].endDate.toLocaleDateString("en-US", options)
                          );
                        }}
                        className="flex items-center text-[10px] cursor-pointer text-black  tracking-[.2rem] text-start uppercase  bg-white w-[290px] h-[40px] justify-start"
                      >
                        <img
                          src="/assits/calend.png"
                          alt=""
                          srcset=""
                          className="w-7 ml-2 mr-2  h-7"
                        />{" "}
                        {`${startDate || "chackIn"}`} -{" "}
                        {`${endDate || "CheckOut"}`}
                      </p>
                    </div>
                    {/* <div className="abso lg:flex-row flex-collute flex flex-col items-center w-fit justify-between  right-1/2 translate-x-1/2 bottom-10"> */}
                    <div
                      className={`${
                        !calHide ? "hidden" : ""
                      } z-50 absolute text-black mt-16 lg:translate-x-0 -translate-x-2/3 mb-5`}
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
                  <div className="flex lg:flex-row flex-col  items-start gap-3 font-big-image py-5 justify-between  ">
                    <label htmlFor="name" className="text-white">
                      {t("Occasion")}
                    </label>
                    <select
                      required
                      onChange={(e) => setOccasion(e.target.value)}
                      type="text"
                      className="w-[290px] h-[40px] rounded-none font-big-image pl-5 text-[#394145] outline-none"
                      placeholder="Select"
                    >
                      <option value="" className="rounded-none text-[#394145]">
                        {t("Select")}
                      </option>
                      <option value="wedding">{t("Wedding")}</option>
                      <option value="family">{t("Family")}</option>
                      <option value="event">{t("Event")}</option>
                    </select>
                  </div>

                  <div className="flex lg:flex-row flex-col pb-4 items-start gap-3 font-big-image py-5 justify-between ">
                    <label htmlFor="name" className="text-white text-start">
                      {t("Number of people")}
                    </label>
                    <input
                      value={people}
                      required
                      onChange={(e) => setPeople(+e.target.value)}
                      type="text"
                      className="w-[290px] h-[40px] rounded-none pl-5 text-[#394145] outline-none"
                      placeholder="eg 1, 2"
                    />
                  </div>
                  <div className="flex lg:flex-row flex-col pb-4 items-start gap-3 font-big-image py-5 justify-between">
                    <label htmlFor="name" className="text-white text-start">
                      {t("Number of Rooms")}
                    </label>
                    <input
                      required
                      value={rooms}
                      onChange={(e) => setRooms(+e.target.value)}
                      type="text"
                      className="w-[290px] h-[40px] pl-5 rounded-none text-[#394145] focus:text-[#394145] outline-none"
                      placeholder="Rooms"
                    />
                  </div>
                  <div className="flex lg:flex-row flex-col pb-4 items-start gap-3 font-big-image py-5 justify-between  ">
                    <label htmlFor="name" className="text-white">
                      {t("Message")}
                    </label>
                    <input
                      required
                      onChange={(e) => setMessage(e.target.value)}
                      type="messge"
                      className="w-[290px] h-[50px] pl-5 rounded-none font-big-image text-[#394145] focus:text-[#394145] outline-none"
                      placeholder="Message"
                    />
                  </div>
                  <button
                    type="submit"
                    // onClick={(() => sendMail, setopenThank(true))}
                    className="py-2 px-12 text-[10px] uppercase tracking-[.2rem] text-[#394145] bg-white my-7"
                  >
                    {t("Submit")}
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
                  onClick={() => setopenThank(false)}
                  className="text-white right-5 absolute"
                />
                <p className="text-3xl text-white font-light uppercase font-sans   tracking-[.3rem] mt-10 mb-5">
                  {t("Welcome To Our Resort")}
                </p>
                <p className="text-xl text-white font-light uppercase font-sans  tracking-wider">
                  {t("Book your destination")}
                </p>
                <h1 className="text-2xl bg-[#b1b1b1] w-[400px] mx-auto font-big-image py-2 my-20 text-white">
                  {t("Thank you for your submission")}
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
