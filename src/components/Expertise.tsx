import { Button, Container } from '@mui/material'
import React from 'react'

function Expertise () {
    return (
        <div className='pt-5 mt-5 pb-5 mb-5 class_of_top'>    
 
      <div className="hover_image_" id={"solution"}> </div>
       <Container className='d_grid_center'>
        <h2 className='protection text-left'>EXPERTISE</h2>
        <div className='display_g_e mt-2'>
            <p className='w_65 text-left mt-3'>Unrivalled expertise from the vehicle security experts.</p>
            <p className='mt-3 w_65 text-left font-16'>Always one step ahead, we provide the most advanced tracking and immobilisation solutions available, accredited by Thatcham, the industry benchmark for product quality and performance.</p>
            <div className='text-left w_65 mt-3'>
             <Button variant="contained" className='bg-red text-bold me-3'>OUR STANDARDS</Button>
             <Button variant="contained" className='bg-gree text-bold'>CONTACT US</Button>
            </div>
        </div> 
       </Container> 
          
      </div>
    )
}

export default Expertise 
