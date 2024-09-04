import { Text, Heading, Img } from "..";
import React from "react";

interface Props {
  className?: string;
  weekCounterText?: React.ReactNode;
  weekImage?: string;
  titleText?: React.ReactNode;
  descriptionText?: React.ReactNode;
}

export default function WeeklyOverviewCard({
  weekCounterText = "Week 1",
  weekImage = "img_arcticons_gps_test_plus.svg",
  titleText = "Lorem ipsum ",
  descriptionText = "Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. ",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[32%] md:w-full`}>
      <div className="flex flex-col gap-[1.25rem] self-stretch rounded-lg bg-gray-900">
        <div className="flex justify-center rounded-tl-lg rounded-tr-lg bg-lime-400">
          <Heading as="h6" className="!text-gray-900">
            {weekCounterText}
          </Heading>
        </div>
        <div className="mx-[0.38rem] mb-[1.25rem] flex flex-col items-center gap-[1.25rem]">
          <Img src={weekImage} width={24} height={24} alt="Week Icon" className="h-[1.50rem] w-[1.50rem]" />
          {/* <div className="flex flex-col items-center gap-[0.63rem] self-stretch">
            <Heading size="headingxs" as="h4" className="!font-redhatdisplay">
              {titleText}
            </Heading>
            <Text size="textxs" as="p" className="self-stretch text-center leading-[150%]">
              {descriptionText}
            </Text>
          </div> */}
        </div>
      </div>
      <div className="h-[5.38rem] w-[0.06rem] bg-gray-800" />
    </div>
  );
}
