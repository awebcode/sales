import { Text, Heading, Img } from "./..";
import React from "react";

interface Props {
    className?: string;
    userImage?: string;
    userSelfExpressionTitle?: React.ReactNode;
    userDescription?: React.ReactNode;
}

export default function Card({
    userImage = "img_frame.svg",
    userSelfExpressionTitle = " Self-Expression",
    userDescription = "sit aAdipiscing sed faucibus vitae nibh vitae id tortor sit. Integer quis volutpat aliquam turpis vitae risus quis euismod lectus. Quam in mauris sem cras orci sed luctus sit convallis.",
    ...props
}: Props) {
    return (
        <div
            {...props}
            className={`${props.className} flex flex-col items-center w-[32%] md:w-full gap-[1.25rem] px-[1.13rem] py-[3.13rem] md:py-[1.25rem] border-gray-800 border-[0.5px] border-solid bg-gray-900 rounded-[16px]`}
        >
            <Img src={userImage} width={60} height={60} alt="Profileimage" className="h-[3.75rem] w-[3.75rem]" />
            <div className="flex flex-col items-center gap-[0.63rem] self-stretch">
                <Heading size="headingxs" as="h4" className="!font-redhatdisplay">
                    {userSelfExpressionTitle}
                </Heading>
                <Text as="p" className="self-stretch text-center leading-[150%]">
                    {userDescription}
                </Text>
            </div>
        </div>
    );
}
