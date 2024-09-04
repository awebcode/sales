import { Button, Img, Text, Heading } from "../../components";
import UserProfile3 from "../../components/UserProfile3";
import React, { Suspense } from "react";

const testimonialGrid = [
  {
    userImage: "img_ellipse_38.png",
    userName: "Nathan Drake",
    userRole: "Founder of Something",
    description:
      "Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. ",
  },
  {
    userImage: "img_ellipse_38_60x60.png",
    userName: "Nathan Drake",
    userRole: "Founder of Something",
    description:
      "Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. ",
  },
  {
    userImage: "img_ellipse_38_1.png",
    userName: "Nathan Drake",
    userRole: "Founder of Something",
    description:
      "Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. ",
  },
  {
    userImage: "img_ellipse_38_2.png",
    userName: "Nathan Drake",
    userRole: "Founder of Something",
    description:
      "Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. ",
  },
  {
    userImage: "img_ellipse_38_3.png",
    userName: "Nathan Drake",
    userRole: "Founder of Something",
    description:
      "Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. ",
  },
  {
    userImage: "img_ellipse_38_4.png",
    userName: "Nathan Drake",
    userRole: "Founder of Something",
    description:
      "Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. ",
  },
];

export default function TestimonialsSection() {
  return (
    <>
      {/* testimonials section */}
      <div className="mt-[9.38rem] flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col items-center gap-[3.13rem] md:px-[1.25rem]">
          <div className="flex flex-col gap-[3.13rem] self-stretch px-[0.38rem]">
            <div className="mx-[9.38rem] flex flex-col items-center gap-[1.25rem] md:mx-0">
              <Button
                color="gray_900_01"
                size="xs"
                className="min-w-[9.50rem] rounded-[14px] font-opensans uppercase tracking-[0.00rem]"
              >
                Testimonials
              </Button>
              <Heading size="heading_2_48_px" as="h2">
                Let’s see what our students say
              </Heading>
              <Text size="texts" as="p" className="self-stretch text-center leading-[160%]">
                Lorem ipsum dolor sit amet Amet sed elementum eget volutpat lectus dui sed. Sed risus dictumst faucibus
                vitae iaculis enim dui vitae. Sollicitudin consequat nibh nunc adipiscing laoreet faucibus. Velit
                lacinia etiam sed nisi at quam venenatis. Amet facilisi fusce non urna. Sed dolor dolor ut vitae
                ultricies. T
              </Text>
            </div>
            <div className="grid grid-cols-3 justify-center gap-[1.50rem] md:grid-cols-2 sm:grid-cols-1">
              <Suspense fallback={<div>Loading feed...</div>}>
                {testimonialGrid.map((d, index) => (
                  <UserProfile3 {...d} key={"userProfileGrid" + index} />
                ))}
              </Suspense>
            </div>
          </div>
          <Button
            shape="round"
            leftIcon={
              <Img
                src="img_phphonecall.svg"
                width={24}
                height={24}
                alt="Ph:phone-call"
                className="h-[1.50rem] w-[1.50rem]"
              />
            }
            className="min-w-[12.00rem] gap-[0.50rem] font-semibold !text-black-900_01"
          >
            Book A Call
          </Button>
        </div>
      </div>
    </>
  );
}
