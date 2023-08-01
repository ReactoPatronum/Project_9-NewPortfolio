/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { _Header } from "../typings";
import { urlFor } from "../client";
import { useColor } from "../context/ColorContext";

type Props = {
  data: _Header;
  cookie: string;
};

export default function Header({ data, cookie }: Props) {
  const { setIsModalOpen } = useColor();
  return (
    <header className="p-5 flex items-center justify-between max-w-7xl mx-auto sticky top-0 z-50">
      <motion.div
        className="space-x-3 z-50"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.3 }}
      >
        <Link href="#contact">
          <div className="flex items-center cursor-pointer z-50 text-gray-400 hover:text-gray-300 transition-all duration-300">
            <SocialIcon
              className=""
              network="email"
              fgColor="#76889c"
              bgColor="transparent"
            />
            <p className="text-xs sm:text-sm font-semibold uppercase">
              {data.getInTouch}
            </p>
          </div>
        </Link>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.3 }}
        className="flex items-center z-50 space-x-6"
      >
        <div onClick={() => setIsModalOpen(true)} className="cursor-pointer">
          {cookie === "tr" ? (
            <img
              className="w-10 h-6 object-cover"
              src={urlFor(data.trFlag).url()}
              alt=""
            />
          ) : (
            <img
              className="w-10 h-6 object-cover"
              src={urlFor(data.enFlag).url()}
              alt=""
            />
          )}
        </div>
      </motion.div>

      <div className="z-10 font-bold hidden lg:flex fixed flex-col top-[35%] left-2.5">
        <ul>
          <li className="p-1  w-[130px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/ReactoPatronum"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="p-1  w-[130px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://linkedin.com/in/emre-onur-kaydın-418054246"
            >
              LinkedIn
              <BsLinkedin size={30} />
            </a>
          </li>
          <li className="cursor-default p-1  w-[300px] hover:w-[260px] h-[60px] flex justify-between items-center ml-[-270px] hover:ml-[-10px] duration-300 bg-red-400">
            <h2> emrekaydin2@gmail.com</h2>
            <HiOutlineMail className="w-[30px] h-[30px] text-white " />
          </li>
          <li className="p-1  w-[150px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1qvQav5hNecCkgY77VPQFh-hIxLlDW0Bq/view?usp=sharing"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
            >
              {data.cv}
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
