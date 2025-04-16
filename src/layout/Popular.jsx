import React from 'react'
import Container from '../components/Container'
import CommonHeading from '../components/CommonHeading'
import CommonHeadingPara from '../components/CommonHeadingPara'
import PopularCard from '../components/PopularCard'
import Flex from '../components/Flex'
import image1 from '../assets/PopularCardimg1.png'
import image2 from '../assets/PopularCardimg2.png'
import image3 from '../assets/PopularCardimg3.png'
import image4 from '../assets/PopularCardimg4.png'
import image5 from '../assets/PopularCardimg5.png'

const Popular = () => {
  return (
  <section className=' pt-[50px]'>
    <Container>
        <CommonHeading className='text-center' text='Popular Destination'/>
        <CommonHeadingPara className='text-center mx-auto w-[692px] p-5' paratext='We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.
        '/>
    </Container>
    <Flex className='gap-x-[30px] justify-center pt-[50px]'>
    <PopularCard image={image3} title='Paris, France' para='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam' price='$150'/>
    <PopularCard image={image2} title='Venice, Italy' para='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam' price='$150'/>
    <PopularCard image={image1} title='Mount Agung, Bali' para='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam' price='$150'/>
    <PopularCard image={image4} title='Santorini, Greece' para='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam' price='$150'/>
    <PopularCard image={image5} title='Lake Thun, Switzerland' para='Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam' price='$150'/>
    
    </Flex>
  </section>
  )
}

export default Popular