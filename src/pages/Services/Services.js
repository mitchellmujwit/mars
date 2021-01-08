import React from 'react'
import { HomeMain, Pricing } from '../../components'
import { homeObjOne } from './Data'

const Services = () => {
  return (
    <>
      <HomeMain {...homeObjOne} />
      <Pricing />
    </>
  )
}

export default Services
