import React from 'react'
import { IoPeople } from "react-icons/io5";


const AboutCard = ({ CardTitle, CardText, className }) => {
  return (
    <div className={`group w-[275px] bg-white hover:bg-[#007F5F] duration-1 px-9  py-[62px] rounded-xl bg-[#007F5F] duration-500 ${className}`}>
      <div className='flex justify-center items-center w-[74px] h-[78px] bg-[#007f5f1a] group-hover:bg-white duration-500 rounded-[14px] '><IoPeople className='text-3xl text-[#007F5F]' /></div>
      <h3 className='text-[40px]  font-pop font-medium pt-5 group-hover:text-white duration-500'>{CardTitle}</h3>
      <p className='text-base  font-pop font--normal group-hover:text-white duration-500 '>{CardText}</p>
      </div>
  )
}
export default AboutCard