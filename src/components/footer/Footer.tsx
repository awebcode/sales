import { Text } from '@/reusable-components/Text'
import React from 'react'

const Footer = () => {
  return (
      <div className="flex justify-center self-stretch bg-lime-400 py-[0.63rem]">
          <div className="container-xs flex justify-center self-end px-[3.50rem] md:px-[1.25rem]">
               <Text as="p" className="!text-black-900">
                  Lorem ipsum dolor sit amet consectetur. Lectus vulputate imperdiet in facilisi risus.
              </Text>
          </div>
      </div>
  )
}

export default Footer