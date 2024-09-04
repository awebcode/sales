import { Img } from "..";
import React from "react";

export default function HeroBackgroundImage() {
  return (
    <>
      {/* sales section */}
      <div className="mt-[10.75rem] flex flex-1 items-start justify-between gap-[1.25rem] px-[3.00rem] md:flex-col md:px-[1.25rem]">
        <div className="ml-[10.88rem] h-[18.38rem] w-[18.38rem] rounded-[146px] bg-gradient blur-[300.00px] backdrop-opacity-[0.5] md:ml-0" />
        <Img
          src="img_ellipse_36.png"
          width={360}
          height={528}
          alt="Ellipseimage"
          className="mt-[3.25rem] h-[33.00rem] w-[30%] self-end object-contain md:w-full md:self-auto"
        />
      </div>
    </>
  );
}
