import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import logo from '../assets/logo.png.png'
import Lists from '../components/Lists'
import Button from '../components/Button'
import { Link } from 'react-router-dom'


const Navber = () => {
    return (
        <nav class='py-12'>
            <Container>
                <Flex className='items-center'>
                    <div className='w-2/12'>
                        <Image src={logo} />
                    </div>
                    <div className='w-8/12'>
                        <ul className='flex gap-x-10  justify-center'>
                            <Link to='/'><Lists items='Home' /></Link>
                            <Link to='/'><Lists items='Tours' /></Link>
                            <Link to='/'><Lists items='Booking' /></Link>
                            <Link to='/'><Lists items='Pages' /></Link>
                            <Link to='/'><Lists items='Features' /></Link>
                            <Link to='/'><Lists items='Blog' /></Link> 
                        </ul>

                    </div>
                    <div className='w-2/12 text-right'>
                    <Button text='Book Now'/>
                    </div>

                </Flex>
            </Container>
        </nav>
    )
}

export default Navber