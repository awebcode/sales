import React from 'react'
import { Button } from '../../reusable-components/Button'
import { Heading } from '../../reusable-components/Heading'
import { Text } from '../../reusable-components/Text'
import { Img } from '../../reusable-components/Img'

const HeroSection = () => {
    return (
        <> <div id='#' className="mx-[10.63rem] flex w-[86%] flex-col gap-[2.50rem] md:mx-0 md:w-full"> <div className="flex flex-col items-center gap-[0.50rem]">
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
            </div></div>
            {/* Video section */}
            <div className="flex h-[33.25rem] w-[90%] items-center justify-center rounded-[16px] bg-[url(/images/img_video.png)] bg-cover bg-no-repeat px-[3.50rem] py-[14.38rem] md:h-full md:min-h-[200px] md:w-full md:p-[1.25rem]">
                <Button
                    color="white_A700_66"
                    size="lg"
                    className="w-[4.38rem] rounded-lg border border-solid border-white-a700"
                >
                    <Img src="img_overflow_menu.svg" width={34} height={34} />
                </Button>
            </div>
        </>
    )
}

export default HeroSection