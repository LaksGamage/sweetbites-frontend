import React from 'react'
import { assets } from '../assets/asset'

const MainBanner = () => {
  return (
    <div className='relative'>
      <img src={assets.main_banner_bg} alt="banner" className='w-full hidden md:block'/>
      <img src={assets.main_banner_bg_s} alt="banners" className='w-full md:hidden'/>
    </div>
  )
}

export default MainBanner
