import React from 'react'

// Styles
import { Wrapper } from './LandingImage.Styles'

//image
import image from '../../../assets/images/wallpaperflare.com_wallpaper (2).jpg'

const LandingImage = () => {
  return (
    <>
      <Wrapper>
        <img src={image} alt="no media" />
      </Wrapper>
    </>
  );
}

export default LandingImage