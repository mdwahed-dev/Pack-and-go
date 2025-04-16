import React from 'react'
import Flex from './Flex'
import { FaCheck } from 'react-icons/fa6'

const Promotionlist = ({text}) => {
  return (
    <>
                    <Flex className='gap-x-[10px] items-center'>
                <FaCheck className='text-[#00F5F]'/><li className='list-none text-base text-[#616161] font-normal'>{text}</li>
                </Flex>
    </>
  )
}

export default Promotionlist