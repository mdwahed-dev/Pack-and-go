import React from 'react'

const CommonHeadingPara = ({paratext,className}) => {
  return (
    <p className={`text-base text-[16px] text-[#616161] font-pop ${className}`}>{paratext}</p>
  )
}

export default CommonHeadingPara