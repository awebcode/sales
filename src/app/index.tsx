import { Text, Img, Button, Heading } from "./../components";
import Header from "./../components/Header";
import UserProfile from "./../components/UserProfile";
import SalesSection from "./_components/SalesSection";
import SalesSection1 from "./_components/SalesSection1";
import SalesSection2 from "./_components/SalesSection2";
import SalesSection3 from "./_components/SalesSection3";
import SalesSection4 from "./_components/SalesSection4";
import SalesTeamSection from "./_components/SalesTeamSection";
import TestimonialsSection from "./_components/TestimonialsSection";
import VideoTestimonialsSection from "./_components/VideoTestimonialsSection";
import React, { Suspense } from "react";

const userProfilesList = [
  {
    userImage: "img_frame.svg",
    userSelfExpressionTitle: " Self-Expression",
    userDescription:
      "sit aAdipiscing sed faucibus vitae nibh vitae id tortor sit. Integer quis volutpat aliquam turpis vitae risus quis euismod lectus. Quam in mauris sem cras orci sed luctus sit convallis.",
  },
  {
    userImage: "img_frame_lime_400.svg",
    userSelfExpressionTitle: " Confidence",
    userDescription:
      "sit aAdipiscing sed faucibus vitae nibh vitae id tortor sit. Integer quis volutpat aliquam turpis vitae risus quis euismod lectus. Quam in mauris sem cras orci sed luctus sit convallis.",
  },
  {
    userImage: "img_frame_lime_400_60x60.svg",
    userSelfExpressionTitle: "Enhanced Authority",
    userDescription:
      "sit aAdipiscing sed faucibus vitae nibh vitae id tortor sit. Integer quis volutpat aliquam turpis vitae risus quis euismod lectus. Quam in mauris sem cras orci sed luctus sit convallis.",
  },
];

export default function SalesPage() {
  return (
    <div className="w-full bg-black-900 ">
      <div className=" flex flex-col items-center">
        <div className="relative h-[73.13rem] self-stretch md:h-auto">
          {/* sales section */}
          <SalesSection />
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center gap-[4.88rem] md:gap-[3.63rem] sm:gap-[2.44rem]">
            <div className="container-xs md:px-[1.25rem]">
              <Header />
            </div>
            <div className="flex flex-col items-center gap-[3.13rem] self-stretch">
              <div className="container-xs flex flex-col items-center gap-[3.13rem] px-[3.50rem] md:px-[1.25rem]">
                <div className="mx-[10.63rem] flex w-[86%] flex-col gap-[2.50rem] md:mx-0 md:w-full">
                  <div className="flex flex-col items-center gap-[0.50rem]">
                    <Heading size="headingmd" as="h1" className="!font-redhatdisplay text-center" >
                      Let’s learn & gain skills
                    </Heading>
                    <Text as="p" className="self-stretch text-center leading-[150%]">
                      Lorem ipsum dolor sit amet consectetur. In at mauris sollicitudin phasellus enim tellus et. Lectus
                      mauris consequat nam leo eget.Lorem ipsum dolor sit amet consectetur. In at mauris sollicitudin
                      phasellus enim tellus et. Lectus mauris consequat nam leo eget.
                    </Text>
                  </div>
                  <div className="mx-[3.25rem] flex md:flex-wrap gap-[1.25rem] md:mx-0">
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
                      className="w-full gap-[0.50rem] font-semibold"
                    >
                      Schedule A Call
                    </Button>
                    <Button
                      color="gray_900_03"
                      shape="round"
                      leftIcon={
                        <Img
                          src="img_icoutlinegridview.svg"
                          width={24}
                          height={24}
                          alt="Ic:outline-grid-view"
                          className="h-[1.50rem] w-[1.50rem]"
                        />
                      }
                      className="w-full gap-[0.50rem] font-semibold"
                    >
                      View case studies
                    </Button>
                  </div>
                </div>
                <div className="flex h-[33.25rem] w-[90%] items-center justify-center rounded-[16px] bg-[url(/images/img_video.png)] bg-cover bg-no-repeat px-[3.50rem] py-[14.38rem] md:h-auto md:w-full md:p-[1.25rem]">
                  <Button
                    color="white_A700_66"
                    size="lg"
                    className="w-[4.38rem] rounded-lg border border-solid border-white-a700"
                  >
                    <Img src="img_overflow_menu.svg" width={34} height={34} />
                  </Button>
                </div>
              </div>

              {/* sales section */}
              <SalesSection1 />
            </div>
          </div>
        </div>
        <div className="container-xs mt-[9.38rem] flex flex-col gap-[9.38rem] md:gap-[7.00rem] md:px-[1.25rem] sm:gap-[4.69rem]">
          <div className="flex flex-col gap-[9.38rem] px-[0.38rem] md:gap-[7.00rem] sm:gap-[4.69rem]">
            <div className="flex gap-[2.00rem] md:flex-col">
              <Suspense fallback={<div>Loading feed...</div>}>
                {userProfilesList.map((d, index) => (
                  <UserProfile {...d} key={"profileList" + index} />
                ))}
              </Suspense>
            </div>
            <div className="flex items-center md:flex-col">
              <div className="flex w-full items-center gap-[1.56rem] sm:flex-col">
                <Img
                  src="img_rectangle_106.png"
                  width={266}
                  height={340}
                  alt="First Image"
                  className="h-[21.25rem] w-[48%] rounded-[16px] object-contain sm:w-full"
                />
                <Img
                  src="img_rectangle_107.png"
                  width={212}
                  height={250}
                  alt="Second Image"
                  className="h-[15.63rem] w-[38%] rounded-lg object-contain sm:w-full"
                />
              </div>
              <div className="flex w-full flex-col items-start gap-[2.50rem]">
                <div className="flex flex-col items-start gap-[1.25rem] self-stretch">
                  <Button
                    color="gray_900_04"
                    size="xs"
                    className="min-w-[7.63rem] rounded-[14px] font-opensans uppercase tracking-[0.00rem]"
                  >
                    About us
                  </Button>
                  <Heading size="heading_2_48_px" as="h2">
                    Who we are
                  </Heading>
                  <Text size="texts" as="p" className="w-full leading-[160%] !text-blue_gray-100_cc">
                    Lorem ipsum dolor sit amet Amet sed elementum eget volutpat lectus dui sed. Sed risus dictumst
                    faucibus vitae iaculis enim dui vitae. Sollicitudin consequat nibh nunc adipiscing laoreet faucibus.
                    Velit lacinia etiam sed nisi at quam venenatis. Amet facilisi fusce non urna. Sed dolor dolor ut
                    vitae ultricies. Tortor ligula enim eros maecenas. Magna eget porttitor augue eu enim. Iaculis
                    luctus magna tellus ullamcorper dui nisl viverra at. Ac amet lorem vel enim fames imperdiet varius.
                    Semper
                  </Text>
                </div>
                <Button
                  shape="round"
                  rightIcon={
                    <Img
                      src="img_cilarrowright.svg"
                      width={24}
                      height={24}
                      alt="Cil:arrow-right"
                      className="h-[1.50rem] w-[1.50rem]"
                    />
                  }
                  className="min-w-[12.00rem] gap-[0.63rem] font-semibold"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-[1.25rem] px-[0.38rem] md:flex-col">
            <div className="flex flex-1 flex-col items-start gap-[2.50rem] md:self-stretch">
              <div className="flex flex-col items-start self-stretch">
                <Button
                  color="gray_900_04"
                  size="xs"
                  className="min-w-[7.63rem] rounded-[14px] font-opensans uppercase tracking-[0.00rem]"
                >
                  About us
                </Button>
                <Heading size="heading_2_48_px" as="h3" className="mt-[1.25rem]">
                  <>
                    Here is how we Help
                    <br />
                    people
                  </>
                </Heading>
                <Text
                  size="texts"
                  as="p"
                  className="mt-[0.75rem] w-[92%] leading-[160%] !text-blue_gray-100_cc md:w-full"
                >
                  Lorem ipsum dolor sit amet Amet sed elementum eget volutpat lectus dui sed. Sed risus dictumst
                  faucibus vitae iaculis enim dui vitae. Sollicitudin consequat nibh nunc adipiscing laoreet faucibus.
                  Velit lacinia etiam sed nisi at quam venenatis. Amet facilisi fusce non urna. Sed dolor dolor ut vitae
                  ultricies. Tortor ligula enim eros maecenas. Magna eget porttitor augue eu enim. Iaculis luctus magna
                  tellus ullamcorper dui nisl viverra at. Ac amet lorem vel enim fames imperdiet varius. Semper
                </Text>
              </div>
              <Button
                shape="round"
                rightIcon={
                  <Img
                    src="img_cilarrowright.svg"
                    width={24}
                    height={24}
                    alt="Cil:arrow-right"
                    className="h-[1.50rem] w-[1.50rem]"
                  />
                }
                className="min-w-[12.00rem] gap-[0.63rem] font-semibold"
              >
                Learn More
              </Button>
            </div>
            <div className="flex items-center gap-[1.50rem] sm:flex-col">
              <Img
                src="img_rectangle_107_250x212.png"
                width={212}
                height={250}
                alt="Third Image"
                className="h-[15.63rem] w-[40%] rounded-lg object-contain sm:w-full"
              />
              <Img
                src="img_rectangle_106_340x266.png"
                width={266}
                height={340}
                alt="Fourth Image"
                className="h-[21.25rem] w-[52%] rounded-[16px] object-contain sm:w-full"
              />
            </div>
          </div>
        </div>

        {/* video testimonials section */}
        <VideoTestimonialsSection />

        {/* sales section */}
        <SalesSection2 />

        {/* sales team section */}
        <SalesTeamSection />

        {/* testimonials section */}
        <TestimonialsSection />

        {/* sales section */}
        <SalesSection3 />

        {/* sales section */}
        <SalesSection4 />
        <div className="flex justify-center self-stretch bg-lime-400 py-[0.63rem]">
          <div className="container-xs flex justify-center self-end px-[3.50rem] md:px-[1.25rem]">
            <Text as="p" className="!text-black-900">
              Lorem ipsum dolor sit amet consectetur. Lectus vulputate imperdiet in facilisi risus.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
