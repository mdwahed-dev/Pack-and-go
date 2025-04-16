import React from 'react'

const Button = ({text,className}) => {
  return (
  <>
  <button className={`text-base text-white text-3xl font-pop bg-[#007F5F] bg- px-9 py-4 rounded-2xl 
  hover:bg-amber-400 hover:text-black duration-500 ${className}`}>{text}</button>
  </>
  )
}

export default Button