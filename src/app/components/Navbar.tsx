"use client"

import Link from "next/link";
import { AiFillHome } from "react-icons/ai";

type NavbarProps = {
    select: string
}

export default function Navbar({select}: NavbarProps) {
  return (
    <div className="fixed px-10 w-full top-0 py-4 bg-slate-900">
      <div className="flex justify-between">
        <div>
          <Link href={'/'}>
            <AiFillHome size={25} />
          </Link>
        </div>
        <div className="flex gap-x-5">
          <Link
            href={"/post"}
            className={`${select === "post" ? "text-blue-800" : "text-white"}  font-bold px-3 py-1 rounded-xl `}
          >
            POST
          </Link>
          <Link
            href={"/user"}
            className={`${select === "user" ? "text-blue-800" : "text-white"}  font-bold px-3 py-1 rounded-xl `}
          >
            USER
          </Link>
        </div>
      </div>
    </div>
  );
};
