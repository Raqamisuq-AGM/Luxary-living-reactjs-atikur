import { Container } from '@mui/material'
import React from 'react'
import logo3 from '../assets/logo-cupra-1.png'
import logo1 from '../assets/logo-mercedes.png'
import logo8 from '../assets/logo-nsi.png'
import logo5 from '../assets/logo-seat-1.png'
import logo4 from '../assets/logo-skoda-1.png'
import logo7 from '../assets/logo-thatcham-research.png'
import logo2 from '../assets/logo-vw.pmg.png'
import logo6 from '../assets/logo-yamaha-1.png'

const Supplier = () => {
  return (
    <div className='official_main '> 
        <Container className='d-flex display_c'>
            <div className='text-center border-left pe-5'>
                 <p className='text-bold font-14 mt-5 pt-3'>Official UK supplier to</p>
                <div className='mb-5'>
                <img src={logo1} />
                <img src={logo2} />
                <img src={logo3} />
                <img src={logo4} />
                <img src={logo5} />
                <img src={logo6} />
                </div> 
            </div>
            <div className='text-center'>
            <p className='text-bold font-14 mt-5 pt-3'>Accredited by</p>
            <div className='mb-5'>
                <img src={logo7} />
                <img src={logo8} /> 
            </div>

            </div>
        </Container>
    </div>
  )
}

export default Supplier