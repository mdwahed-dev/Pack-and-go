import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import Inputcard from '../components/Inputcard'
import { GoSearch } from "react-icons/go";
import Image from '../components/Image'
import BannerOne from '../assets/bannerlogo01.png.png'
import BannerTwo from '../assets/bannerlogo02.png.png'



const Banner = () => {
    return (
        <>
            <section className='bg-[#F8F8F8] py-[135px] relative'>
            <div className='absolute top-[170px] right-[0px]'><Image className='w-[80%]' src={BannerOne}/></div>
            <div className='absolute top-[265px] right-[290px]'><Image className='w-[80%]' src={BannerTwo}/></div>
                <Container>
                    <Flex>
                        <div className='w-1/2'>
                            <h1 className='text-[65px] font-semibold font-pop leading-[80px] text-[#1E1E1E]  '>Start Exploring to Find Inner Peace by Traveling</h1>
                            <p className='w-[597px] text-base font-semibold pt-8 pb-8'>Lost yourself with Vacation and Travel into the place that you never visit before. We have thousand places in our database for you.</p>
                            <Button className='mb-10' text='Discover Now' />

                            <div className='relative w-[825px] bg-white rounded-[10px]'>

                                <Flex className='py-9 px-6 gap-x-[70px]'>
                                    <Inputcard label='location'/>
                                    <Inputcard label='date'/>
                                    <Inputcard label='people'/>
                                </Flex>
                                <button className='absolute top-5 right-5 bg-[#007F5F] p-[30px] rounded-[10px]'><GoSearch className='text-white text-xl'/>
                                </button>


                            </div>


                        </div>


                    </Flex>
                </Container>
            </section>

        </>
    )
}

export default Banner
{/* <Flex>
<Inputcard/>
<Inputcard/>
<Inputcard/>
</Flex> */}