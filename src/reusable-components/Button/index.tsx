import React from "react";

const shapes = {
  round: "rounded-[26px]",
} as const;
const variants = {
  fill: {
    gray_900_03: "bg-gray-900_03 text-white-a700",
    gray_900_01: "bg-gray-900_01 text-white-a700",
    white_A700: "bg-white-a700 text-black-900",
    gray_900_04: "bg-gray-900_04 text-white-a700",
    white_A700_66: "bg-white-a700_66",
    lime_400: "bg-lime-400 text-black-900",
  },
  outline: {
    white_A700: "border-white-a700 border border-solid text-white-a700",
  },
} as const;
const sizes = {
  lg: "h-[4.38rem] px-[1.00rem]",
  sm: "h-[3.13rem] px-[0.75rem]",
  xs: "h-[1.88rem] px-[1.88rem] text-[0.75rem]",
  md: "h-[3.38rem] px-[1.88rem] text-[1.13rem]",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "lime_400",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]}`}
      {...restProps}
    >
      {!!leftIcon && <span className="mr-2 transition-transform duration-300 group-hover:translate-x-[-4px]">
        {leftIcon}
      </span>}
      {children}
      {!!rightIcon && <span className="mr-2 transition-transform duration-300 group-hover:translate-x-[-4px]">
        {rightIcon}
      </span>}
    </button>
  );
};

export { Button };
