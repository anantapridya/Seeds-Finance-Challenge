"use client";

import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

type DescriptionProps = {
  idSection: string;
};

export default function Description({ idSection }: DescriptionProps) {
  return (
    <section
      className="flex flex-col items-center justify-center h-screen text-2xl gap-y-3"
      id={`${idSection}`}
    >
      <p>
        Website ini dibuat untuk memenuhi challenge Internship Frontend
        Developer di Seeds Finance
      </p>
      <p>
        API yang digunakan pada website ini bersumber dari{" "}
        <a
          href="https://gorest.co.in/"
          target="blank"
          className="text-blue-700 underline"
        >
          gorest.co.in
        </a>{" "}
        dan menggunakan asset gambar yang bersumber dari{" "}
        <a
          href="https://freepik.com"
          target="blank"
          className="text-blue-700 underline"
        >
          freepik.com
        </a>
      </p>
      <p className="mt-10 font-bold text-lg">- Ananta Pridya Yudha -</p>
      <Link href={'/post'}  className="text-lg font-bold mt-10 flex items-center gap-x-4 bg-blue-800 py-1 px-5 rounded-lg">Explore <FiArrowRight size={20} /></Link>
    </section>
  );
}
