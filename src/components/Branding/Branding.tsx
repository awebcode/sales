import { Heading, Img } from "../../components";
import React from "react";

export default function Branding() {
  return (
    <>
      {/* sales section */}
      <div className="self-stretch ">
        <div className="flex justify-center bg-gray-900_02 py-[2.00rem] sm:py-[1.25rem]">
          <div className="container-xs flex items-center justify-center gap-[3.13rem] px-[0.25rem] md:flex-col md:px-[1.25rem]">
            <Heading as="h2">Trusted By</Heading>
            <div className="flex flex-wrap flex-1 md:gap-8  justify-center md:flex-col md:self-stretch">
              <div className="mb-[0.25rem] flex items-center justify-center self-start md:self-auto">
                <Img src="img_television.svg" width={36} height={22} alt="Television Image" className="h-[1.38rem]" />
                <Heading size="text3xl" as="h3" className="!text-[1.81rem]">
                  Match
                </Heading>
              </div>
              <div className="flex items-start gap-[0.38rem] justify-center px-[1.88rem] sm:px-[1.25rem]">
                <Img src="img_grid.svg" width={26} height={26} alt="Grid Image" className="h-[1.63rem] w-[1.63rem]" />
                <Heading size="text3xl" as="h4" className="self-center !text-[1.81rem]">
                  Puzzle
                </Heading>
              </div>
              <div className="flex-1 px-[1.88rem] justify-center md:self-stretch sm:px-[1.25rem]">
                <div className="flex items-center justify-center gap-[0.38rem]">
                  <div className="relative h-[2.00rem] w-[18%] content-end md:h-auto">
                    <div className="absolute right-[-0.06rem] top-[0.00rem] m-auto flex w-[66%] items-end justify-center gap-[0.25rem] rounded-lg border-[0.455px] border-solid border-white-a700 bg-white-a700 px-[0.13rem]">

                    </div>
                    <div className="mx-auto mb-[0.25rem] flex w-[70%] items-start justify-end">
                      <div className="flex w-[6%] flex-col items-center justify-center bg-white-a700">
                        <div className="h-[0.06rem] w-[0.06rem] bg-white-a700" />
                      </div>
                      <div className="h-[0.06rem] w-[0.06rem] self-end bg-white-a700" />
                      <div className="flex w-[48%] flex-col items-end self-center">
                        <div className="w-[40%] bg-white-a700 md:w-full">
                          <div className="bg-white-a700">
                            <div className="flex justify-end bg-white-a700">
                              <div className="h-[0.06rem] w-[0.06rem] bg-white-a700" />
                            </div>
                          </div>
                        </div>
                        <div className="flex w-[40%] justify-end bg-white-a700 md:w-full">
                          <div className="h-[0.06rem] w-[0.06rem] bg-white-a700" />
                        </div>
                      </div>
                    </div>
                    <Img
                      src="img_thumbs_up.svg"
                      width={26}
                      height={22}
                      alt="Thumbs Up Image"
                      className="absolute bottom-[-0.06rem] left-0 right-0 m-auto h-[1.38rem] w-full"
                    />
                  </div>
                  <Heading size="textxl" as="h5" className="self-end !text-[1.25rem]">
                    Management
                  </Heading>
                </div>
              </div>
              <div className="flex w-[16%] justify-center self-center px-[1.88rem] md:w-full sm:px-[1.25rem]">
                <div className="flex w-full items-center justify-center">
                  <Img
                    src="img_thumbs_up_white_a700.svg"
                    width={40}
                    height={36}
                    alt="Thumbs Up White"
                    className="h-[2.25rem]"
                  />
                  <Heading size="textlg" as="h6" className="relative ml-[-1.63rem] !font-poppins !text-[1.19rem]">
                    Connect
                  </Heading>
                </div>
              </div>
              <div className="flex w-[14%] justify-center px-[1.88rem] md:w-full sm:px-[1.25rem]">
                <div className="flex w-full items-start justify-center">
                  <Img src="img_sort.svg" width={34} height={32} alt="Sort Image" className="h-[2.00rem]" />
                  <Heading size="text2xl" as="p" className="relative ml-[-0.13rem] self-center !text-[1.63rem]">
                    Navi
                  </Heading>
                </div>
              </div>
              <div className="flex items-center justify-center self-start md:self-auto">
                <Img
                  src="img_user.svg"
                  width={22}
                  height={22}
                  alt="User Image"
                  className="mb-[0.38rem] h-[1.38rem] w-[1.38rem] self-end"
                />
                <Heading size="text3xl" as="p" className="!text-[1.81rem]">
                  ask
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
