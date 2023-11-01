"use client";

import React, { useEffect, useRef, useState } from "react";
import layer4 from "../assets/layer1.png";
import layer3 from "../assets/layer2.png";
import layer2 from "../assets/layer3.png";
import layer1 from "../assets/layer4.png";
import Image from "next/image";
import { FiChevronsDown } from "react-icons/fi";

type ParallaxProps = {
  section: string;
};

export default function Parallax({ section }: ParallaxProps) {
  const [scrollY, setScrollY] = useState<number>(0);
  const layerRef1 = useRef<HTMLDivElement | null>(null);
  const layerRef2 = useRef<HTMLDivElement | null>(null);
  const layerRef3 = useRef<HTMLDivElement | null>(null);
  const layerRef4 = useRef<HTMLDivElement | null>(null);
  const parallaxText = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (
      layerRef1.current &&
      layerRef2.current &&
      layerRef3.current &&
      layerRef4.current &&
      parallaxText.current
    ) {
      const screenWidth = window.innerWidth;
      if (screenWidth > 780) {
        layerRef1.current.classList.remove("disabled-parallax");
        layerRef2.current.classList.remove("disabled-parallax");
        layerRef3.current.classList.remove("disabled-parallax");
        layerRef4.current.classList.remove("disabled-parallax");
        parallaxText.current.classList.remove("disabled-parallax");

        layerRef1.current.style.transform = `translateY(+${scrollY * 0}px)`;
        layerRef2.current.style.transform = `translateY(+${scrollY * 0.8}px)`;
        layerRef3.current.style.transform = `translateY(+${scrollY * 0.5}px)`;
        layerRef4.current.style.transform = `translateY(+${scrollY * 0}px)`;
        parallaxText.current.style.transform = `translateY(+${
          scrollY * 0.5
        }px)`;
      } else {
        layerRef1.current.classList.add("disabled-parallax");
        layerRef2.current.classList.add("disabled-parallax");
        layerRef3.current.classList.add("disabled-parallax");
        layerRef4.current.classList.add("disabled-parallax");
        parallaxText.current.classList.add("disabled-parallax");
      }
    }
  }, [scrollY]);

  const scrollToSection = () => {
    const target = document.getElementById(`${section}`);
    window.scrollTo({
      top: target?.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <section className="h-screen relative overflow-hidden">
      <div ref={layerRef4} className="absolute">
        <Image src={layer1} alt="layer1" />
      </div>
      <div ref={layerRef3} className="absolute">
        <Image src={layer2} alt="layer2" />
      </div>
      <div
        ref={parallaxText}
        className="absolute w-full h-screen flex justify-center "
      >
        <div className="font-roboto font-black text-center text-white [text-shadow:0px_4px_4px_var(--tw-shadow-color)] shadow-black text-6xl relative top-[45%]">
          Front End Developer <br /> Challenge<br></br>
          {/* <p className="text-sm mt-10">Seeds Finance Challenge <br></br> Ananta Pridya Yudha</p> */}
        </div>
        {/* <p>Seeds Finance Challenge</p> */}
      </div>
      <div ref={layerRef2} className="absolute">
        <Image src={layer3} alt="layer3" />
      </div>

      <div ref={layerRef1} className="absolute">
        <Image src={layer4} alt="layer4" />
      </div>
      <button
        className="absolute bottom-5 left-[50%] right-[50%] animate-bounce"
        onClick={scrollToSection}
      >
        <FiChevronsDown size={40} />
      </button>
    </section>
  );
}
