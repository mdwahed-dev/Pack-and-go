import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import CommonHeading from '../components/CommonHeading'
import CommonHeadingPara from '../components/CommonHeadingPara'
import TravelCard from '../components/TravelCard'
import Icon01 from '../assets/Cardimg01.png'
import Icon02 from '../assets/Cardimg02.png'
import Icon03 from '../assets/Cardimg03.png'
import Icon04 from '../assets/Cardimg04.png'
import Icon05 from '../assets/Cardimg05.png'
import Icon06 from '../assets/Cardimg06.png'


const TravelBenefits = () => {
    return (
        <section className='py-[150px]'>
            <Container>
                <CommonHeading className="text-center" text='Travel Benefit For User' />
                <CommonHeadingPara className="w-[692px] text-center font-pop mx-auto pt-5 pb-[112px]" paratext='We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.
                ' />
                <Flex className='flex-wrap gap-[30px]'>
                <TravelCard CardHeading='Cheap than Other' CardPara='Travelya is cheaper than other 
                travel agency.' src={Icon01} />
                <TravelCard CardHeading='Secure Payment' CardPara='You can pay your book without
doubt again.' src={Icon02} />
                <TravelCard CardHeading='Easy To Book' CardPara='Follow flow, Click, Pay. Wait
just wait e-ticket.' src={Icon03} />
                <TravelCard CardHeading='24/7 Support' CardPara='We’re ready help you anytime
and anywhere you are.' src={Icon04} />
                <TravelCard CardHeading='Best Offers' CardPara='Inform you about all best offers
                for all destination.' src={Icon05} />
                <TravelCard CardHeading='Fast Refund' CardPara='If you canceled. We can refund
                 your money 1*12.' src={Icon06} />

                </Flex>


            </Container>
        </section>

    )
}

export default TravelBenefits