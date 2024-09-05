"use client"
import React from "react"; 

import { motion } from "framer-motion";
const sizes = {
  menu_text_18_px: "text-[1.13rem] font-semibold",
  heading_2_48_px: "font-redhatdisplay text-[3.00rem] font-bold md:text-[2.75rem] sm:text-[2.38rem]",
  textlg: "text-[1.19rem] font-medium",
  textxl: "text-[1.25rem] font-medium",
  text2xl: "text-[1.63rem] font-medium md:text-[1.50rem] sm:text-[1.38rem]",
  text3xl: "text-[1.81rem] font-medium md:text-[1.69rem] sm:text-[1.56rem]",
  headingxs: "text-[1.50rem] font-bold md:text-[1.38rem]",
  headings: "text-[2.25rem] font-semibold md:text-[2.13rem] sm:text-[2.00rem]",
  headingmd: "text-[3.50rem] font-bold md:text-[3.00rem] sm:text-[2.63rem]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "menu_text_18_px",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9, rotate: -5 }} // Start invisible, lower position, slightly smaller and rotated
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}    // Animate to visible, original size, and position
      transition={{
        duration: 0.8,     // Slower duration for a smooth effect
        ease: [0.6, -0.05, 0.01, 0.99], // Custom ease curve for professional feel
        type: "spring",    // Adds a slight spring effect
        stiffness: 120,    // Controls how bouncy the spring is
        damping: 10
      }}        // Smoothens the bounceransition details
      viewport={{ once: true }}
    >
      <Component className={`text-white-a700 font-inter ${className} ${sizes[size]}`} {...restProps}>
        {children}
      </Component>
    </motion.div>
  );
};

export { Heading };
