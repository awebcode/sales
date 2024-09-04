import { Text, Img, Heading } from "./..";
import React from "react";

interface Props {
  className?: string;
  userImage?: string;
  userName?: React.ReactNode;
  userRole?: React.ReactNode;
  description?: React.ReactNode;
}

export default function UserProfile3({
  userImage = "img_ellipse_38.png",
  userName = "Nathan Drake",
  userRole = "Founder of Something",
  description = "Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. ",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full gap-[0.88rem] px-[1.25rem] py-[1.63rem] sm:py-[1.25rem] border-gray-800 border border-solid bg-gray-900 rounded-[16px]`}
    >
      <div className="flex items-start justify-center gap-[1.63rem] self-stretch">
        <div className="flex flex-1 items-center gap-[0.88rem]">
          <Img
            src={userImage}
            width={60}
            height={60}
            alt="Userimage"
            className="h-[3.75rem] w-[3.75rem] rounded-[30px] object-cover"
          />
          <div className="flex flex-1 flex-col items-start gap-[0.25rem]">
            <Heading size="headingxs" as="h4" className="!font-redhatdisplay">
              {userName}
            </Heading>
            <Text as="p" className="!text-blue_gray-100_d9">
              {userRole}
            </Text>
          </div>
        </div>
        <Img src="img_entypo_quote.svg" width={28} height={28} alt="Quoteimage" className="h-[1.75rem] w-[1.75rem]" />
      </div>
      <Text size="textxs" as="p" className="w-full leading-[150%]">
        {description}
      </Text>
    </div>
  );
}
