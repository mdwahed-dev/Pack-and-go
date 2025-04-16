import React from 'react'
import Navber from '../layout/Navber'
import Banner from '../layout/Banner'
import TravelBenefits from '../layout/TravelBenefits'
import AboutUs from '../layout/AboutUs'
import Popular from '../layout/Popular'
import Promotion from '../layout/Promotion'
import MoneyBack from '../layout/MoneyBack'
import Footer from '../layout/Footer'
import Subscribe from '../layout/Subscribe'

const Home = () => {
  return (
    <>
    <Navber/>
    <Banner/>
    <TravelBenefits/>
    <Popular/> 
    <AboutUs/>
    <Promotion/>
    <MoneyBack/>
    <Subscribe/>
    <Footer/>
  </>
  )
}

export default Home