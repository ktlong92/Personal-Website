import React from "react"
import Image from "next/image"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {

  const [ text ]= useTypewriter({
    words: [
      `Hi, My Name Is ${pageInfo?.name}`,
      "Guy Who Loves To Code",
      "Guy Who Loves Anime",
      "Guy Who Is A LEGO Enthusiast",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={urlFor(pageInfo?.profilePicture).url()}
        alt="Kaleb Long"
        width={200}
        height={200}
        className="relatvie rounded-full h-32 w-32 mx-auto object-cover" />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#04D347" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}