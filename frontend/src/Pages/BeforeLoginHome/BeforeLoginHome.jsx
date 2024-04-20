import React from 'react'

import Banner from '../../components/HomePageComponents/Banner/Banner'
import UserCard from '../../components/HomePageComponents/UserCard/UserCard'
import { BeforeLoginHeader } from '../../components/BeforeLogin/BeforeLoginHeader'
import { Footer } from '../../components/Footer/Footer'

export const BeforeLoginHome = () => {
  return (
    <div>
        <BeforeLoginHeader/>
        <Banner/>
        <UserCard/>
        <Footer/>
    </div>
  )
}
