import React from 'react'

// components
import LandingImage from './landingImage/LandingImage'
import Introtext from './introText/Introtext'
import WhyUs from './whyUs/WhyUs'

const Home = () => {
  return (
    <>
      <LandingImage/>
      <Introtext />
      <WhyUs />
    </>
  )
}

export default Home