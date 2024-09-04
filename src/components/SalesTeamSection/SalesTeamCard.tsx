import { Img, Text, Heading } from "./..";
import React from "react";

interface Props {
    className?: string;
    userImage?: string;
    userName?: React.ReactNode;
    userLocation?: React.ReactNode;
    userDescription?: React.ReactNode;
}

export default function SalesTeamCard({
    userImage = "img_rectangle_115_100x100.png",
    userName = "Roland Beck",
    userLocation = "Germany",
    userDescription,
    ...props
}: Props) {
    return (
        <div
            {...props}
            className={`${props.className} flex flex-col items-center w-[32%] md:w-full gap-[1.25rem] p-[2.13rem] sm:p-[1.25rem] bg-white-a700 rounded-lg`}
        >
            <Img
                src={userImage}
                width={100}
                height={100}
                alt="Profileimage"
                className="h-[6.25rem] w-[6.25rem] rounded-lg object-cover"
            />
            <div className="flex flex-col items-center gap-[0.88rem] self-stretch">
                <div className="flex flex-col gap-[0.50rem] self-stretch">
                    <div className="mx-[1.63rem] flex flex-col items-center gap-[0.38rem] px-[2.63rem] md:px-[1.25rem]">
                        <Heading size="headingxs" as="h4" className="!font-redhatdisplay !text-black-900">
                            {userName}
                        </Heading>
                        <Text as="p" className="!text-gray-800">
                            {userLocation}
                        </Text>
                    </div>
                    <Text size="textxs" as="p" className="text-center leading-[150%] !text-gray-800">
                        <span>
                            &nbsp;Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl
                            mattis&nbsp;
                        </span>
                        <span>
                            &nbsp;Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl
                            mattis&nbsp;
                        </span>
                    </Text>
                </div>
                <div className="flex gap-[0.63rem]">
                    <Img
                        src="img_mdi_linkedin.svg"
                        width={30}
                        height={30}
                        alt="Linkedinicon"
                        className="h-[1.88rem] w-[1.88rem]"
                    />
                    <Img
                        src="img_ic_baseline_facebook.svg"
                        width={30}
                        height={30}
                        alt="Facebookicon"
                        className="h-[1.88rem] w-[1.88rem]"
                    />
                </div>
            </div>
        </div>
    );
}
