/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "/styles/Projects.module.css";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import { _Project, _Projects } from "../typings";
import { urlFor } from "../client";

type Props = {
  data: _Projects;
};

export default function Projects({ data }: Props) {
  return (
    <div className="mt-10 h-screen relative  z-0">
      <div id="projects" className={styles.container}>
        <div className={styles.projects}>
          <h1 className="text-gray-300 mt-20">{data.bigText}</h1>
          <p className="text-gray-400 hover:underline font-semibold">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ReactoPatronum?tab=repositories"
            >
              Github Repo
            </a>
          </p>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1qvQav5hNecCkgY77VPQFh-hIxLlDW0Bq/view?usp=sharing"
            rel="noreferrer"
            className="font-semibold text-gray-400 hover:underline text-sm"
          >
            {data.smallText}
          </a>
        </div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className={styles.project__swiper}
          initialSlide={1}
        >
          {data.project.map((item) => {
            const tech = data.tech
            return (
              <SwiperSlide
                key={item.projectName}
                className={styles.swiper__slide}
              >
                <img src={`${urlFor(item.projectImage)}`} alt="" />
                <h3>{item.projectName}</h3>
                <p>
                  <span className="font-bold">{tech}:</span>{" "}
                  {item.technologies}
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}
