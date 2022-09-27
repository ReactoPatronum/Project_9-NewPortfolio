import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { _Contact } from "../typings";
import {motion} from "framer-motion"

type Inputs = {
  subject: string;
  email: string;
  message: string;
};

type Props = {
  data:_Contact
};

export default function Contact({data}: Props) {
  const [sendComment, setSendComment] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    sendMessage(data);
  };

  const sendMessage = (data: Inputs) => {
    try {
      fetch("api/createComment", {
        method: "POST",
        body: JSON.stringify(data),
      });
      setSendComment(false);
    } catch (err) {
      console.log(err);
      setSendComment(true);
    }
  };

  return (
    <div className=" p-4 h-screen">
      <div className="  w-full text-gray-300  grid grid-cols-4 max-w-[1000px] mx-auto py-20">
        <motion.div
         initial={{
          y: -300,
          opacity: 0,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3 }}
        className="col-span-4 md:col-span-2 md:mt-40">
          <h2 className="text-6xl">{data.bigText}</h2>
          <p className="mt-4 text-xl">
           {data.smallText}
          </p>
        </motion.div>
        <motion.div
        initial={{
          y: 300,
          opacity: 0,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3 }}
        className="col-span-4 md:col-span-2 md:mt-40 md:ml-4">
          {sendComment ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <p className="font-semibold text-lg">{data.mail[0]}</p>
                <input
                  className={`text-black w-full outline-none bg-gray-200 resize-none p-2 focus-within:bg-white border-2 focus-within:border-orange-300 
                    }`}
                  {...register("subject")}
                  type="text"
                />
              </div>

              <div className="mt-6">
                <p className="font-semibold text-lg">{data.mail[1]}</p>
                <input
                  className={`text-black w-full outline-none bg-gray-200 resize-none p-2 focus-within:bg-white border-2 focus-within:border-orange-300 
                    }`}
                  {...register("email", { required: true })}
                  type="text"
                />
              </div>

              <div className="mt-6">
                <p className="font-semibold text-lg">{data.mail[2]}</p>
                <textarea
                  rows={5}
                  className={`text-black w-full outline-none bg-gray-200 resize-none p-1 focus-within:bg-white border-2 focus-within:border-orange-300 
                    }`}
                  {...register("message", { required: true })}
                />
              </div>
              {errors.message && (
                <p className="text-red-500">Lütfen Mesaj Kısmını Doldurunuz.</p>
              )}

              {errors.email && (
                <p className="text-red-500">Lütfen Email Kısmını Doldurunuz.</p>
              )}
              <button
                className={` text-white text-xl font-semibold bg-blue-500 transition-all duration-300 
                    } py-3 px-10 hover:bg-green-500`}
                type="submit"
              >
                {data.mail[3]}
              </button>
            </form>
          ) : (
            <h2 className="text-3xl text-green-500">
              Mesajınız Tarafıma Ulaşmıştır . Teşekkürler!
            </h2>
          )}
        </motion.div>
      </div>
    </div>
  );
}
