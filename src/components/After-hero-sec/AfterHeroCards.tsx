import React, { Suspense } from 'react'
import Card from './Card'
import { afterHeroSectionData } from '../../../data/data'

const AfterHeroCards = () => {
  return (
      <div className="flex gap-[2.00rem] md:flex-col">
          <Suspense fallback={<div>Loading feed...</div>}>
              {afterHeroSectionData.map((d, index) => (
                  <Card {...d} key={"profileList" + index} />
              ))}
          </Suspense>
      </div>
  )
}

export default AfterHeroCards