import React from 'react'

const FooterLi = ({headingtext,liOne,liTwo,liThree,liFour,liFive}) => {
  return (
    <div className='w-2/12'>
    <h3 className='text-[25px] font-pop font-semibold pb-10'>{headingtext}</h3>
    <ul className='text-base font-regular font-pop text-[#616161] flex flex-col gap-y-5'>
     <li>{liOne}</li>
     <li>{liTwo}</li>
     <li>{liThree}</li>
     <li>{liFour}</li>
     <li>{liFive}</li>

    </ul>
    </div>
  )
}

export default FooterLi