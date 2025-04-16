import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Promotionimage from '../assets/Promotionimage.png'
import CommonHeading from '../components/CommonHeading'
import CommonHeadingPara from '../components/CommonHeadingPara'
import Promotionlist from '../components/Promotionlist'

const Promotion = () => {
  return (
<>
<Container>
    <Flex className='py-20'>
        <div className='w-1/2 '> 
        <Image src={Promotionimage}/>
        </div>
        <div className='w-1/2 px-[50px]'> 
        <CommonHeading className='w-489px ' text='Always give you promo on every Month / Event'/>
        <CommonHeadingPara className='w-431px py-5' paratext='We make sure give you a lot of promo every motnh or event based on calendar. If you want, just Subscribe on Newsletter.
        '/>
        <Flex className='flex-wrap gap-x-7 gap-y-4'>

            <Promotionlist text='25% for New Members'/>
            <Promotionlist text='25% for New Members'/>
            <Promotionlist text='25% for New Members'/>
            <Promotionlist text='25% for New Members'/>
            <Promotionlist text='25% for New Members'/>

        </Flex>

        
        </div>
    </Flex>
</Container>

</>
  )
}
 
export default Promotion