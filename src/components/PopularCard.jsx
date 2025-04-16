import React from 'react'
import Image from './Image'
import Flex from './Flex'
import { FaStar } from "react-icons/fa";
import Button from './Button';



const PopularCard = ({image,title,para,price}) => {
  return (
    <div className='w-[370px] shadow-xl p-5 rounded-[14px]'>
        <div className='w-[329px] h-[203px] rounded-[14px]'>
        <Image className='w-full rounded-[14px]' src={image}/>
        </div>
        <Flex className='list-none gap-x-[6px] py-4 '>
        <li><FaStar className='text-[#FF8B00]'/></li>
        <li><FaStar className='text-[#E0E0E0]'/></li>
        <li><FaStar className='text-[#E0E0E0]'/></li>
        <li><FaStar className='text-[#E0E0E0]'/></li>
        <li><FaStar className='text-[#E0E0E0]'/></li>
        <li className='text-[#FF8B00] text-base font-pop font-regular px-1'>5 review</li>
        </Flex> 
        <h4 className='text-[25px] font-pop font-medium '>{title}</h4>
        <p className='text-base text-[#616161] font-pop font-regular py-5'>{para}</p>
        <Flex>
            <h5 className='text-[20px] font-pop font-semibold pt-1'>{price} <span className='text-base text-[#616161]'>/ person</span></h5>
        </Flex>
        <Button className='mt-[30px] pt-2.5' text='Book Now'/>
    </div>
  )
}

export default PopularCard