import React from "react";
import { FiSettings } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import { useColor } from "../context/ColorContext";

type Props = {};

export default function Settings({}: Props) {
  const { setColor, isModalOpen, setIsModalOpen } = useColor();
  const colors: string[] = [
    "bg-[#3e0814]",
    "bg-[#0A192F]",
    "bg-[rgb(26,26,26)]",
    "bg-black",
  ];
  const router = useRouter();
  const languages = ["en", "tr"];

  function setTr() {
    setCookie("language", languages[1]);
    router.reload();
  }

  function setEn() {
    setCookie("language", languages[0]);
    router.reload();
  }
  return (
    <div className="absolute bottom-10 right-10 md:right-20 z-50">
      <div className="relative">
        <FiSettings
          onClick={() => setIsModalOpen((current) => !current)}
          className={` w-8 h-8 sm:w-10 sm:h-10 text-[#F7AB0A] cursor-pointer transition-all duration-200 active:scale-90 hover:scale-110 hover:animate-none ${
            isModalOpen && "animate-spin"
          }`}
        />
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              id="modal"
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="modal absolute p-2 bottom-16 right-0 h-[120px] rounded-lg w-60 sm:w-80 bg-white"
            >
              <div className="space-y-5 flex flex-col items-center text-gray-600 mt-2">
                <div className="space-x-7 font-semibold flex ">
                  <button
                    onClick={setTr}
                    className="transition-all duration-200 hover:scale-110 px-4 py-1 shadows "
                  >
                    TR
                  </button>
                  <button
                    onClick={setEn}
                    className="transition-all duration-200 hover:scale-110 shadows px-4 py-1"
                  >
                    EN
                  </button>
                </div>
                <div className="space-x-4 flex items-center ">
                  {colors.map((color) => (
                    <button
                      onClick={() => setColor(color)}
                      className={`rounded-full ${color} h-10 w-10 transition-all duration-200 hover:scale-110`}
                      key={color}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
