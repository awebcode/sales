import React from "react";

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
    <Component className={`text-blue_gray-100 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
