/* eslint-disable @next/next/no-img-element */
import React from "react";
import Circles from "./Circles";
import { motion } from "framer-motion";
import { _Main } from "../typings";
import { urlFor } from "../client";
import ParticlesContainer from "./ParticlesContainer";

type Props = {
  data: _Main;
};

export default function Main({ data }: Props) {
  return (
    <div className="relative">
      <div className="">
        <ParticlesContainer />
      </div>
      <div className="h-screen w-full absolute top-0 right-0 flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <Circles />
        <motion.img
          drag
          dragSnapToOrigin
          className="active:cursor-grabbing cursor-grab relative rounded-full h-32 w-32 mx-auto object-cover"
          src={urlFor(data.smallImage).url()}
          alt=""
        />
        <div className="z-20">
          <h2 className="text-xl uppercase font-bold text-gray-400 pb-2 tracking-[15px]">
            React Developer
          </h2>
        </div>
      </div>
    </div>
  );
}
