"use client"

import Description from "./components/Description";
import Parallax from "./components/parallax";


export default function Home() {
  return (
    <div className="h-[200vh]">
      <Parallax section="description" />
      <Description idSection="description" />
    </div>
  );
}
