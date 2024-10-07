"use client";
import BigImage from "@/components/BigImage";
import DuobleImages from "@/components/DuobleImages";
import Book from "@/components/Book";
import Hero from "@/components/Hero";
import Images from "@/components/Images";
import Review from "@/components/Review";
import Rooms from "@/components/Rooms";
import Video from "@/components/Video";
import Footer from "@/components/Footer";
import { useTranslations } from "use-intl";

export default function Home() {
  return (
    <div className="w-full text-black h-full">
      <Hero />
      <BigImage />
      <Video />
      <Rooms />
      <DuobleImages />
      <Review />
      {/* <Images /> */}
      <Book />
      <Footer />
    </div>
  );
}
