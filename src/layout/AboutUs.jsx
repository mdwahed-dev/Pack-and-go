import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import CommonHeading from '../components/CommonHeading'
import CommonHeadingPara from '../components/CommonHeadingPara'
import Button from '../components/Button'
import { FaCheck } from "react-icons/fa6";
import AboutCard from '../components/AboutCard'
import Icon1 from '../assets/AboutCardIcon1.png'
import Icon2 from '../assets/AboutCardIcon2.png'
import Icon3 from '../assets/AboutCardIcon3.png'
import Icon4 from '../assets/AboutCardIcon4.png'


const AboutUs = () => {
  return (
    <section className='py-[150px] bg-[#F8F8F8]	'>
      <Container>
        <Flex>
          <div className='w-1/2'>
            <CommonHeading text='Go Travel, Discover Remember Us' />
            <CommonHeadingPara paratext='We are self-service data analytics software that lets 
             you create visually appealing data visualizations and insightful dashboards in minutes.'/>

            <Flex className='gap-x-5 pt-4'>
              <FaCheck className='text-[#007F5F] ' />
              <CommonHeadingPara className='w-[338]' paratext='We are self-service data software visually 
                appealing data visualizations.'/>
            </Flex>
            <Flex className='gap-x-5 pt-4'>
              <FaCheck className='text-[#007F5F]' />
              <CommonHeadingPara className='w-[338]' paratext='We are self-service data software visually 
                appealing data visualizations.'/>
            </Flex>
            <Flex className='gap-x-5 pt-4'>
              <FaCheck className='text-[#007F5F]' />
              <CommonHeadingPara className='w-[338]' paratext='We are self-service data software visually 
                appealing data visualizations.'/>
            </Flex>


            <Button text='Discover Now' className='mt-[30px]' />

          </div>
          <div className='w-1/2'>
            <Flex className='flex-wrap gap-[30px]'>
              <AboutCard CardTitle='500K+' CardText='Satisfied Clients' />
              <AboutCard CardTitle='250K+' CardText='Active Achieve' />
              <AboutCard CardTitle='15K+' CardText='Active Members' />
              <AboutCard CardTitle='10K+' CardText='Tour Destination' />
            </Flex>

          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default AboutUs