import { Img, Text, Heading } from "../../components";
import React, { Suspense } from "react";
import SalesTeamCard from "./SalesTeamCard";

const userProfilesList = [
    {
        userImage: "img_rectangle_115_100x100.png",
        userName: "Roland Beck",
        userLocation: "Germany",
        userDescription:
            " Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis ",
    },
    {
        userImage: "img_rectangle_115_1.png",
        userName: "Roland Beck",
        userLocation: "Germany",
        userDescription:
            " Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis ",
    },
    {
        userImage: "img_rectangle_115_2.png",
        userName: "Roland Beck",
        userLocation: "Germany",
        userDescription:
            " Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis ",
    },
];

export default function SalesTeamSection() {
    return (
        <>
            {/* sales team section */}
            <div className="mt-[8.25rem] self-stretch">
                <div className="flex justify-center bg-gray-900 py-[3.13rem] md:py-[1.25rem]">
                    <div className="container-xs flex justify-center md:px-[1.25rem]">
                        <div className="flex w-full flex-col gap-[1.50rem]">
                            <div className="mx-[0.38rem] flex gap-[1.50rem] md:mx-0 md:flex-col">
                                <div className="flex flex-1 flex-col gap-[1.25rem] rounded-[16px] bg-white-a700 p-[1.50rem] md:self-stretch sm:p-[1.25rem]">
                                    <div className="flex items-center gap-[1.88rem] md:flex-col">
                                        <Img
                                            src="img_rectangle_113.png"
                                            width={362}
                                            height={198}
                                            alt="Profile Image"
                                            className="h-[12.38rem] w-[54%] rounded-lg object-contain md:w-full"
                                        />
                                        <div className="flex w-[46%] flex-col gap-[1.25rem] md:w-full">
                                            <div className="flex flex-col items-start gap-[0.50rem]">
                                                <Heading size="headings" as="h2" className="!font-redhatdisplay !text-black-900">
                                                    Nathan Drake
                                                </Heading>
                                                <Text size="textmd" as="p" className="!text-gray-800">
                                                    Lorem ipsum dolor sit amet
                                                </Text>
                                            </div>
                                            <div className="flex gap-[0.75rem]">
                                                <Img
                                                    src="img_link.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="Link Image"
                                                    className="h-[1.50rem] w-[1.50rem]"
                                                />
                                                <Img
                                                    src="img_settings.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="Settings Image"
                                                    className="h-[1.50rem] w-[1.50rem]"
                                                />
                                                <Img
                                                    src="img_group.png"
                                                    width={24}
                                                    height={24}
                                                    alt="Group Image"
                                                    className="h-[1.50rem] w-[1.50rem] object-cover"
                                                />
                                                <Img
                                                    src="img_logos_facebook.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="Facebook Logo"
                                                    className="h-[1.50rem] w-[1.50rem]"
                                                />
                                                <Img
                                                    src="img_settings_green_a700.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="Circle Settings"
                                                    className="h-[1.50rem] w-[1.50rem] rounded-[50%]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <Text as="p" className="mb-[0.38rem] leading-[150%] !text-gray-800">
                                        Lorem ipsum dolor sit amet consectetur. Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio
                                        cursus eleifend fermentum. Non nisl mattis fringilla sagittis blandit nec arcu massa. Ac luctus
                                        lorem non auctor. Sagittis vehicula.Lorem ipsum dolor sit amet consectetur. Ipsum donec tortor
                                        laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis fringilla
                                        sagittis blandit nec arcu massa. Ac luctus lorem non auctor.{" "}
                                    </Text>
                                </div>
                                <div className="flex w-[32%] flex-col items-center gap-[1.25rem] rounded-lg bg-white-a700 p-[2.13rem] md:w-full sm:p-[1.25rem]">
                                    <Img
                                        src="img_rectangle_115.png"
                                        width={100}
                                        height={100}
                                        alt="Feature Image"
                                        className="h-[6.25rem] w-[6.25rem] rounded-lg object-cover"
                                    />
                                    <div className="flex flex-col items-center gap-[0.88rem] self-stretch">
                                        <div className="flex flex-col gap-[0.50rem] self-stretch">
                                            <div className="mx-[1.63rem] flex flex-col items-center gap-[0.38rem] px-[2.63rem] md:mx-0 md:px-[1.25rem]">
                                                <Heading size="headingxs" as="h3" className="!font-redhatdisplay !text-black-900">
                                                    Roland Beck
                                                </Heading>
                                                <Text as="p" className="!text-gray-800">
                                                    Germany
                                                </Text>
                                            </div>
                                            <Text size="textxs" as="p" className="text-center leading-[150%] !text-gray-800">
                                                <span>
                                                    &nbsp;Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum.
                                                    Non nisl mattis&nbsp;
                                                </span>
                                                <span>
                                                    &nbsp;Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum.
                                                    Non nisl mattis&nbsp;
                                                </span>
                                            </Text>
                                        </div>
                                        <div className="flex gap-[0.63rem]">
                                            <Img
                                                src="img_mdi_linkedin.svg"
                                                width={30}
                                                height={30}
                                                alt="Linkedin Image"
                                                className="h-[1.88rem] w-[1.88rem]"
                                            />
                                            <Img
                                                src="img_ic_baseline_facebook.svg"
                                                width={30}
                                                height={30}
                                                alt="Facebook Image"
                                                className="h-[1.88rem] w-[1.88rem]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-[1.50rem] px-[0.38rem] md:flex-col">
                                <Suspense fallback={<div>Loading feed...</div>}>
                                    {userProfilesList.map((d, index) => (
                                        <SalesTeamCard {...d} key={"listColumn" + index} />
                                    ))}
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
