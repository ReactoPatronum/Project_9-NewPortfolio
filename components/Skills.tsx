import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { _Skills } from "../typings";

type Props = {
  skill: _Skills[];
};

export default function Skills({ skill }: Props) {
  return (
    <motion.div className="p-2 h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <div className="grid grid-cols-4 gap-4 lg:gap-8">
        {skill.map((sSkill, i) => (
          <Skill skill={sSkill} key={i} />
        ))}
      </div>
    </motion.div>
  );
}
