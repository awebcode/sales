import { Img, Text, Heading } from "..";
import WeeklyOverviewCard from "./WeeklyOverviewCard";
import React, { Suspense } from "react";

const weeklyProgressList = [
  {
    weekCounterText: "Week 1",
    weekImage: "img_arcticons_gps_test_plus.svg",
    titleText: "Lorem ipsum ",
    descriptionText:
      "Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. ",
  },
  {
    weekCounterText: "Week 2",
    weekImage: "img_simple_icons_speedtest.svg",
    titleText: "Lorem ipsum ",
    descriptionText:
      "Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. ",
  },
  {
    weekCounterText: "Week 3",
    weekImage: "img_solar_test_tube.svg",
    titleText: "Lorem ipsum ",
    descriptionText:
      "Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. ",
  },
];

export default function WeeklyTimeline() {
  return (
    <>
      {/* sales section */}
      <div className="mt-[9.38rem] flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col gap-[3.13rem] md:px-[1.25rem]">
          <div className="mx-[9.75rem] flex flex-col items-center gap-[1.25rem] md:mx-0">
            <Heading size="heading_2_48_px" as="h2">
              Lorem Ipsum
            </Heading>
            <Text size="texts" as="p" className="self-stretch text-center leading-[160%]">
              Lorem ipsum dolor sit amet Amet sed elementum eget volutpat lectus dui sed. Sed risus dictumst faucibus
              vitae iaculis enim dui vitae. Sollicitudin consequat nibh nunc adipiscing laoreet faucibus. Velit lacinia
              etiam sed nisi at quam venenatis. Amet facilisi fusce non urna. Sed dolor dolor ut vitae ultricies. T
            </Text>
          </div>
          <div className="px-[0.38rem]">
            <div className="mx-[7.13rem] flex gap-[8.75rem] md:mx-0 md:flex-col">
              <Suspense fallback={<div>Loading feed...</div>}>
                {weeklyProgressList.map((d, index) => (
                  <WeeklyOverviewCard {...d} key={"cardList" + index} />
                ))}
              </Suspense>
            </div>
            <Img
              src="img_frame_2067.svg"
              width={1138}
              height={38}
              alt="Featured Image"
              className="h-[2.38rem] w-full md:hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
}
