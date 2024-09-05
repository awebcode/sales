"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BASE_URL = process.env.BASE_PATH || "/images/";

type ImgProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> &
  Partial<{
    className: string;
    src: string;
    alt: string;
    isStatic: boolean;
    width: number;
    height: number;
  }>;

const Img: React.FC<React.PropsWithChildren<ImgProps>> = ({
  className,
  src = "defaultNoData.png",
  alt = "testImg",
  isStatic = false,
  width = 1000, // default width
  height = 1000, // default height
  ...restProps
}) => {
  const [imgSrc, setImgSrc] = React.useState(src);

  React.useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.09 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
    >
      <div style={{ position: "relative", width: `${width}px`, height: `${height}px` }}>
        <Image
          src={isStatic ? imgSrc : BASE_URL + imgSrc}
          alt={alt}
          layout="fill" // Makes the image fill the parent div
          objectFit="cover" // Ensures the image scales properly
          {...restProps}
          onError={() => {
            setImgSrc("defaultNoData.png");
          }}
        />
      </div>
    </motion.div>
  );
};

export { Img };
