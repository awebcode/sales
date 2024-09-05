import { Button, Img, Text, Heading } from "..";
import React from "react";

export default function BottomTT2() {
  return (
    <>
      {/* sales section */}
      <div className="relative mt-[9.38rem] h-[32.13rem] content-center self-stretch md:h-auto">
        <div className=" sm:hidden container-xs flex justify-center md:px-[1.25rem]">
          <Img
            src="img_bg.png"
            width={1154}
            height={514}
            alt="Background Image"
            className="h-[32.13rem] w-full rounded-[24px] object-cover md:h-auto"
          />
        </div>
        <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max items-center justify-between gap-[1.25rem] px-[0.50rem] md:relative md:flex-col md:px-[1.25rem]">
          <Img
            src="img_image_379.png"
            width={526}
            height={308}
            alt="Main Image"
            className="ml-[0.38rem] h-[19.25rem]  w-[46%] object-contain md:ml-0 md:w-full md:h-full"
          />
          <div className="flex w-[46%] flex-col items-start gap-[2.50rem] md:w-full">
            <div className="flex flex-col gap-[1.25rem] self-stretch">
              <Heading size="heading_2_48_px" as="h2" className="leading-[3.94rem]">
                Lorem ipsum amet consectetur. Mauris diam.
              </Heading>
              <Text size="texts" as="p" className="w-[90%] leading-[160%] md:w-full">
                Lorem ipsum dolor sit amet consectetur. Amet sed elementum eget volutpat lectus dui sed. Sed risus
                dictumst faucibus vitae iaculis enim dui vitae. Sollicitudin consequat nibh nunc adipiscing laoreet
                faucibus. Velit lacinia etiam sed nisi at quam venenatis. Amet facilisi fusce non urna. Sed dolor dolor
                ut
              </Text>
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
      </div>
    </>
  );
}
