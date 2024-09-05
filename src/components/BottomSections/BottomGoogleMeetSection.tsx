import { Img, Button, Text, Heading } from "..";
import React from "react";

export default function BottomGoogleMeetSection() {
  return (
    <>
      {/* sales section */}
      <div className="mt-[9.38rem] self-stretch">
        <div className="flex justify-center bg-gray-900 py-[3.13rem] md:py-[1.25rem]">
          <div className="container-xs flex items-center justify-center px-[0.38rem] md:flex-col md:px-[1.25rem]">
            <div className="flex flex-1 flex-col items-start gap-[2.50rem] md:self-stretch">
              <div className="flex flex-col items-start gap-[1.25rem] self-stretch">
                <Img
                  src="img_image_375.png"
                  width={196}
                  height={36}
                  alt="Featured Image"
                  className="h-[2.25rem] w-[32%] object-contain"
                />
                <Heading size="heading_2_48_px" as="h2" className="w-[82%] leading-[3.94rem] md:w-full">
                  Ipsum amet sectetur. Mauris diam.
                </Heading>
                <Text size="texts" as="p" className="w-[86%] leading-[160%] md:w-full">
                  <>
                    {" "}
                    ipsum dolor sit amet consectetur. Amet sed elementum eget volutpat lectus dui sed. Sed risus
                    dictumst faucibus vitae iaculis enim dui vitae.
                    <br />
                    psum dolor sit amet consectetur. Amet sed elementum eget volutpat lectus dui sed. Sed risus dictumst
                    faucibus vitae iaculis enim dui vitae.
                  </>
                </Text>
              </div>
              <Button
                color="white_A700"
                shape="round"
                leftIcon={
                  <Img
                    src="img_phphonecall_black_900.svg"
                    width={24}
                    height={24}
                    alt="Ph:phone-call"
                    className="h-[1.50rem] w-[1.50rem]"
                  />
                }
                className="min-w-[14.25rem] gap-[0.50rem] font-semibold md:mb-10"
              >
                Schedule A Call
              </Button>
            </div>
            <div className="container">
              <Img
                src="img_rectangle_118.png"
                width={548}
                height={350}
                alt="Background Image"
                className="h-[21.88rem] w-[48%] rounded-[16px] object-contain md:h-auto md:w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
