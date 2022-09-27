import React from "react";
import { motion } from "framer-motion";
import { _Skills } from "../typings";
import { urlFor } from "../client";

type Props = {
  skill: _Skills;
};

export default function Skill({ skill }: Props) {
  const random: number = Math.floor(Math.random() * (3 - 0 + 1) + 0);
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.6,
      }}
      whileInView={{ x: 0, opacity: 1, scale: 1.01 }}
      viewport={{ once: true }}
      transition={{ delay: random, duration: random }}
      className="  flex flex-col items-center"
    >
      <motion.img
        className="hover:animate-spin rounded-full border border-gray-500 object-cover w-16 h-16  sm:w-24 sm:h-24 xl:w-32 xl:h-32 "
        src={`${urlFor(skill.image)}`}
        alt=""
      />
      <h4 className="font-semibold mt-1 text-gray-400">{skill.title}</h4>
    </motion.div>
  );
}
