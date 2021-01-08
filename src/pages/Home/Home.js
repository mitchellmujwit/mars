import React from 'react'
import { HomeMain, Pricing } from '../../components'
import { homeObjOne, homeObjTwo } from './Data'

const Home = () => {
  return (
    <>
      <HomeMain {...homeObjOne} />
      <HomeMain {...homeObjTwo} />
      <Pricing />
    </>
  )
}

export default Home
