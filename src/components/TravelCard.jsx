import React from 'react'
import Image from './Image'

const TravelCard = ({CardHeading,CardPara,src,alt}) => {
  return (
    <div className='w-[370px] py-[63px] px-[53px] shadow-2xl rounded-2xl '>
        <Image src={src} alt={alt} />
        <h2 className='text-2xl font-medium font-pop pt-10 pb-5'>{CardHeading}</h2>
        <p className='text-base text-[#616161] font-regular font-pop '>{CardPara}</p>

    </div>
  )
}

export default TravelCard