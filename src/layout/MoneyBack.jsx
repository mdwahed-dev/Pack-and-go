import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import CommonHeading from '../components/CommonHeading'
import CommonHeadingPara from '../components/CommonHeadingPara'
import { FaCircle, FaRegCircle } from 'react-icons/fa6'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import Image from '../components/Image'
import MoneyBackimage from '../assets/MoneyBackimage.png'

const MoneyBack = () => {
    return (
        <section className='pt-[50px] pb-[140px]'>
            <Container>
                <Flex>
                    <div className='w-1/2'>
                        <CommonHeading className='w-[507px]' text='100% Money back Guarantee If you Cancel' />
                        <CommonHeadingPara className='w-[516px] pt-5 pb-10' paratext='We Promises in this case. We still want to refund your money when you cancel order.' />
                        <div className='w-[420px] h-[156px] bg-[#E4F1EE] p-3 '>
                        <Flex>
                            <FaCircle />
                            <p className='font-pop font-medium px-3 '>Friendly, Quick, Easy</p><IoMdArrowDropup  className='text-[25px]' />
                        </Flex>
                        <p className='text-[#616161] text-lg font-pop font-regular pt-[10px]'>Business messaging that feels just like the messenger apps you and your customers
                            use every day.</p>
                    </div>
                    <Flex className='gap-3 items-center p-3'>
                    <FaRegCircle />
                            <p className='font-pop font-medium px-3 '>Friendly, Quick, Easy</p><IoMdArrowDropdown className='text-[25px]' />
                        </Flex>
                    <Flex className='gap-3 items-center p-3'>
                    <FaRegCircle />
                            <p className='font-pop font-medium px-3 '>Friendly, Quick, Easy</p><IoMdArrowDropdown className='text-[25px]' />
                        </Flex>

                    </div>


                    <div className='w-1/2 relative'>
                    <Image src={MoneyBackimage}/>
                    <div className='bg-white w-[222px] h-[52px] shadow-2xl rounded-[8px] absolute p-3 bottom-[150px] left-[40px]'>Hi, Can you help me? 😔</div>
                    <div className='bg-white w-[222px] h-[52px] shadow-2xl rounded-[8px] absolute p-3 bottom-[80px] left-[14px]'>Can I get my money back?</div>
                    <div className='bg-white w-[222px] h-[52px] shadow-2xl rounded-[8px] absolute bottom-[10px] left-[10px]'>Thanks for your help!! 😍😍😍😍</div>
                    </div>

                </Flex>
            </Container>
        </section>
    )
}

export default MoneyBack