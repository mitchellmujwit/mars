import React from 'react'
import { HomeMain, Pricing } from '../../components'
import { homeObjOne } from './Data'

const Price = () => {
  return (
    <>
      <Pricing />
      <HomeMain {...homeObjOne} />
    </>
  )
}

export default Price
