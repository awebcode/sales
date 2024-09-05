"use client"
import React from "react"; 

import { motion } from "framer-motion";
const sizes = {
  body_text_16_px: "text-[1.00rem] font-normal not-italic",
  textxs: "text-[0.75rem] font-normal not-italic",
  texts: "text-[0.94rem] font-normal not-italic",
  textmd: "text-[1.00rem] font-light",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "body_text_16_px",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.7, rotate: -4 }} // Start invisible, lower position, slightly smaller and rotated
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}    // Animate to visible, original size, and position
      transition={{
        duration: 0.6,     // Slower duration for a smooth effect
        ease: [0.4, -0.05, 0.02, 0.99], // Custom ease curve for professional feel
        type: "spring",    // Adds a slight spring effect
        stiffness: 110,    // Controls how bouncy the spring is
        damping: 11
      }}        // Smoothens the bounceransition details
      viewport={{ once: true }}
    >
    <Component className={`text-blue_gray-100 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
      </Component>
      </motion.div>
  );
};

export { Text };
