/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Circles from "./Circles";
import { motion } from "framer-motion";
import Link from "next/link";
import { _Main } from "../typings";
import { urlFor } from "../client";

type Props = {
  data: _Main;
};

export default function Main({ data }: Props) {
  const [text, count] = useTypewriter({
    words: [data?.typewriter[0], data?.typewriter[1], data?.typewriter[2]],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <Circles />
      <motion.img
        drag
        dragSnapToOrigin
        className="active:cursor-grabbing cursor-grab relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(data.smallImage).url()}
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          React Developer
        </h2>
        <h3 className="text-5xl lg:text-6xl">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h3>
        <div className="pt-5 ">
          <Link href="#about">
            <button className="buttons">{data.buttons[0]}</button>
          </Link>
          <Link href="#skills">
            <button className="buttons">{data.buttons[1]}</button>
          </Link>
          <Link href="#projects">
            <button className="buttons">{data.buttons[2]}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
