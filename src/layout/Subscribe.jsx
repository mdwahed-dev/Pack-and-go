import React from 'react'
import Container from '../components/Container'
import CommonHeading from '../components/CommonHeading'
import CommonHeadingPara from '../components/CommonHeadingPara'
import Button from '../components/Button'

const Subscribe = () => {
    return (
        <section className=' bg-[#007F5F] '>
            <Container >
                <div className='py-20 max-w-xl mx-auto '>
                    <CommonHeading className=' text-white font-pop font-[40px] text-center' text='Subscribe To Get The Latest News About Us' />
                    <CommonHeadingPara className=' text-white text-base font-pop font-regular pt-[20px] text-center ' paratext='We Recommended you to subscribe to our newspaperm, enter your email below to get daily update about us.' />

                    <div className='relative py-10 '>
                        <input type="emal" placeholder='Enter your email address' className='w-[770px] h-[100px] rounded-xl px-5' />
                        <Button className=' w-[159px] h-[80px] item-center absolute top-[50px] left-[600px] ' text='subscribe' />
                    </div>
                </div>


            </Container>
        </section>
    )
}

export default Subscribe