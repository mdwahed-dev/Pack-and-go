import React from 'react'
import Flex from '../components/Flex'
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlinePeople } from "react-icons/md";



const inputcard = ({label,Icon}) => {
    return (
        <div>
            <Flex className='gap-x-2 items-center'>
                <IoLocationOutline className='text-[#007F5F]'/>
                <p className='text-base font-bold font-nuni'>{label}</p>
                <IoIosArrowDown />
            </Flex>
            <p className='text-base font-normal- font-nuni pt-2 pl-6'>Enter your {label}</p>
        </div>
    )
}

export default inputcard