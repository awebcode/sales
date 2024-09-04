import React from "react";

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
    <Component className={`text-white-a700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
