import { Text, Heading, Img, Button } from "./..";
import React from "react";

interface Props {
  className?: string;
  userImage?: string;
  descriptionText?: React.ReactNode;
  loremImage?: string;
  nathanDrakeText?: React.ReactNode;
  founderOfText?: React.ReactNode;
}

export default function UserProfile1({
  userImage = "img_rectangle_110.png",
  descriptionText = "Lorem ipsum dolor sit amet consectetur. Lectus leo sed phasellus orci. Quam tortor facilisis eu pharetra risus ut viverra ultricies duis. Fermentum purus tellus nunc tortor tempus nulla. At purus vel elit eu.",
  loremImage = "img_ellipse_37.png",
  nathanDrakeText = "Nathan Drake",
  founderOfText = "Founder of Something",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-[32%] md:w-full gap-[1.00rem] p-[1.25rem] bg-black-900 rounded-[16px]`}
    >
      <div className="relative h-[11.38rem] content-center self-stretch">
        <Img
          src={userImage}
          width={324}
          height={182}
          alt="Userimage"
          className="mx-auto h-[11.38rem] w-full flex-1 rounded-lg object-cover"
        />
        <Button
          color="white_A700_66"
          size="sm"
          className="absolute bottom-0 left-0 right-0 top-0 m-auto w-[3.13rem] rounded-lg border border-solid border-white-a700"
        >
          <Img src="img_overflow_menu.svg" width={24} height={24} />
        </Button>
      </div>
      <Text size="textxs" as="p" className="w-[96%] leading-[150%]">
        {descriptionText}
      </Text>
      <div className="flex gap-[0.38rem] self-stretch">
        <Img src="img_signal.svg" width={16} height={16} alt="Signalicon1" className="h-[1.00rem] w-[1.00rem]" />
        <Img src="img_signal.svg" width={16} height={16} alt="Signalicon2" className="h-[1.00rem] w-[1.00rem]" />
        <Img src="img_signal.svg" width={16} height={16} alt="Signalicon3" className="h-[1.00rem] w-[1.00rem]" />
        <Img src="img_signal.svg" width={16} height={16} alt="Nathandrakeimage" className="h-[1.00rem] w-[1.00rem]" />
        <Img src="img_signal.svg" width={16} height={16} alt="Signalicon4" className="h-[1.00rem] w-[1.00rem]" />
      </div>
      <div className="flex items-center justify-center gap-[1.00rem] self-stretch">
        <Img
          src={loremImage}
          width={50}
          height={50}
          alt="Profileimage"
          className="h-[3.13rem] w-[3.13rem] rounded-[24px] object-cover"
        />
        <div className="flex flex-1 flex-col items-start justify-center gap-[0.25rem]">
          <Heading as="h6">{nathanDrakeText}</Heading>
          <Text size="textxs" as="p">
            {founderOfText}
          </Text>
        </div>
      </div>
    </div>
  );
}
