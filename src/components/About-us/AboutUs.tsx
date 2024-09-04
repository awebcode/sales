import React from 'react'
import { Img } from '../../reusable-components/Img'
import { Button } from '../../reusable-components/Button'
import { Heading } from '../../reusable-components/Heading'
import { Text } from '../../reusable-components/Text'

const AboutUs = () => {
    return (
        <><div className="flex items-center md:flex-col">
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
            </div></>
    )
}

export default AboutUs