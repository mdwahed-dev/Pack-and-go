import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Logo from '../assets/logo.png.png'
import { FaFacebook, FaLinkedin, FaPinterest } from 'react-icons/fa6'
import { AiFillTwitterCircle } from 'react-icons/ai'
import FooterLi from '../components/FooterLi'

const Footer = () => {
  return (
    <section className='py-20' >
        <Container>
            <Flex>
               <div className='w-6/12  '>
               <img className='w-[200px]' src={Logo} alt="" />

               <ul className='list-none flex gap-x-10 py-10'>
                <li><FaFacebook className='text-4xl text-[#1877F2]' /></li>
                <li><AiFillTwitterCircle className='text-4xl text-[#1877F2]' /></li>
                <li><FaLinkedin className='text-4xl text-[#0A66C2]'/></li>
                <li><FaPinterest className='text-4xl text-[#E60019]'/></li>
               </ul>
               <ul className='list-none text-[#616161] text-base font-pop font-regular flex flex-col gap-y-1.5'>
                <li>Business Number : +12 4825415478</li>
                <li>3131 Doctor Drive. LA, California</li>
                <li>Complaints/Enquiries: pack&go@mail.com</li>
               </ul>
               </div>
               <FooterLi headingtext='Tour' liOne='Thailand' liTwo='Vietnam' liThree='Korea'liFour='Mexico'liFive='Italy'/>
               <FooterLi headingtext='Support' liOne='Account' liTwo='Legal' liThree='Contact'liFour='Affiliate Program'liFive='Privacy Policy'/>
               <FooterLi headingtext='Useful Pages' liOne='Deals' liTwo='FAQs' liThree='Why Choose Us'liFour='Subscribe'/>


            </Flex>
        </Container>
  

    </section>
  )
}

export default Footer