import { Button, Text, Heading } from "../../components";
import UserProfile1 from "../../components/UserProfile1";
import React, { Suspense } from "react";

const userDetailsList = [
  {
    userImage: "img_rectangle_110.png",
    descriptionText:
      "Lorem ipsum dolor sit amet consectetur. Lectus leo sed phasellus orci. Quam tortor facilisis eu pharetra risus ut viverra ultricies duis. Fermentum purus tellus nunc tortor tempus nulla. At purus vel elit eu.",
    loremImage: "img_ellipse_37.png",
    nathanDrakeText: "Nathan Drake",
    founderOfText: "Founder of Something",
  },
  {
    userImage: "img_rectangle_110_182x324.png",
    descriptionText:
      "Lorem ipsum dolor sit amet consectetur. Lectus leo sed phasellus orci. Quam tortor facilisis eu pharetra risus ut viverra ultricies duis. Fermentum purus tellus nunc tortor tempus nulla. At purus vel elit eu.",
    loremImage: "img_ellipse_37_50x50.png",
    nathanDrakeText: "Nathan Drake",
    founderOfText: "Founder of Something",
  },
  {
    userImage: "img_rectangle_110_1.png",
    descriptionText:
      "Lorem ipsum dolor sit amet consectetur. Lectus leo sed phasellus orci. Quam tortor facilisis eu pharetra risus ut viverra ultricies duis. Fermentum purus tellus nunc tortor tempus nulla. At purus vel elit eu.",
    loremImage: "img_ellipse_37_1.png",
    nathanDrakeText: "Nathan Drake",
    founderOfText: "Founder of Something",
  },
];

export default function VideoTestimonialsSection() {
  return (
    <>
      {/* video testimonials section */}
      <div className="mt-[9.38rem] self-stretch">
        <div className="flex flex-col items-center bg-gray-900 py-[3.13rem] md:py-[1.25rem]">
          <div className="container-xs flex flex-col items-center gap-[3.13rem] md:px-[1.25rem]">
            <div className="mx-[9.75rem] flex flex-col gap-[1.25rem] self-stretch md:mx-0">
              <div className="mx-[4.00rem] flex flex-col items-center gap-[1.25rem] md:mx-0">
                <div className="flex w-[26%] justify-center rounded-[14px] bg-white-a700 p-[0.38rem] md:w-full">
                  <Text size="textxs" as="p" className="!font-opensans uppercase tracking-[0.00rem] !text-gray-900">
                    Video Testimonials
                  </Text>
                </div>
                <Heading size="heading_2_48_px" as="h2">
                  Let’s see what our students say
                </Heading>
              </div>
              <Text size="texts" as="p" className="text-center leading-[160%]">
                Lorem ipsum dolor sit amet Amet sed elementum eget volutpat lectus dui sed. Sed risus dictumst faucibus
                vitae iaculis enim dui vitae. Sollicitudin consequat nibh nunc adipiscing laoreet faucibus. Velit
                lacinia etiam sed nisi at quam venenatis. Amet facilisi fusce non urna. Sed dolor dolor ut vitae
                ultricies. T
              </Text>
            </div>
            <div className="flex gap-[1.50rem] self-stretch px-[0.38rem] md:flex-col">
              <Suspense fallback={<div>Loading feed...</div>}>
                {userDetailsList.map((d, index) => (
                  <UserProfile1 {...d} key={"profileList" + index} />
                ))}
              </Suspense>
            </div>
            <Button color="white_A700" variant="outline" shape="round" className="min-w-[9.50rem] font-semibold">
              Load more
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
