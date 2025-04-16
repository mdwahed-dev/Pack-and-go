import React from 'react'

const CommonHeading = ({text,className}) => {
  return (
    
    <h3 className={`text-[40px] text-[#1E1E1E] font-pop font-semibold ${className}`}>{text}</h3>
  )
}

export default CommonHeading