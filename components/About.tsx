/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { _About } from "../typings";
import { urlFor } from "../client";

type Props = {
  data:_About
};

export default function About({data}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly mx-auto items-center">
      <motion.h3
      viewport={{once:true}}
      initial={{ opacity: 0 }}
      whileInView={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius:["20%","20%","50%","80%","20%",]
      }}
      transition={{ duration: 2.5 }}
      className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        <span>A</span>
        <span>B</span>
        <span>O</span>
        <span>U</span>
        <span>T</span>
      </motion.h3>
      <motion.img
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-60 md:h-80 "
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3 }}
        src={urlFor(data.bigImage).url()}
        alt=""
      />
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{once:true}}
        transition={{ duration: 1.5 }}
        className="space-y-10 px-0 md:px-10"
      >
        <h4 className="text-4xl font-semibold">
        {data.title}
        </h4>
        <p className="font-semibold text-lg">
          {data.infoText}
        </p>
      </motion.div>
    </div>
  );
}
