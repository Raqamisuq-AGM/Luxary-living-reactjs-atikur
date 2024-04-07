import HistoryIcon from '@mui/icons-material/History';
import { Container } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png';
import image8 from '../assets/image8.png';
const Protection = () => {
  const [hoveredLink, setHoveredLink] = useState("link_8");
  const handleLinkHover = (link) => {
    setHoveredLink(link);
  };
  return (
    <div className='pt-5 mt-5 pb-5 class_of_top h-[80vh] '>
      <div className="hover_image_ py-24" id={hoveredLink}> </div>
       <Container className='d_grid_center py-24 space-y-7'>
        <h2 className='protection1 text-left text-9xl ms-24'>PROTECTION</h2>
        <div className='display_g_e mt-2'>
            <p className='w_70 text-left mt-3'>Find the right  <span className='text-red'>Meta Trak</span> solution for your customers, <strong> become an installers </strong>.</p>
            <p className='mt-3 w_70 text-red text-left'>What do you need to protect?</p>
        </div>
        <div className='text-lg-end mt-2 mb-4 flex ms-54'>
         <Link to="" className='link_ '
         onMouseEnter={() => handleLinkHover("link_1")}>
          <img src={image1} className='image_h' />
          </Link>
         <Link to="" className='link_'
         onMouseEnter={() => handleLinkHover("link_2")}
         >  <img src={image2} className='image_h' /> </Link>
         <Link to="" className='link_ link_3'
         onMouseEnter={() => handleLinkHover("link_3")}
         >  <img src={image3} className='image_h' /> </Link>
         <Link to="" className='link_ link_4'
         onMouseEnter={() => handleLinkHover("link_4")}
         >  <img src={image4} className='image_h' /> </Link>
         <Link to="" className='link_'
           onMouseEnter={() => handleLinkHover("link_5")}
         >  <img src={image5} className='image_h' /> </Link>
         <Link to="" className='link_'
         onMouseEnter={() => handleLinkHover("link_6")}
         >  <img src={image6} className='image_h' /> </Link>
         <Link to="" className='link_ link_7'
         onMouseEnter={() => handleLinkHover("link_7")}
         >  <img src={image7} className='image_h' /> </Link>
         <Link to="" className='link_ link_8'
         onMouseEnter={() => handleLinkHover("link_8")}
         >  <img src={image8} className='image_h' /> </Link>
        </div>
        <div className='w_70'>
         <p className='text_sm'><HistoryIcon className='font_40'/> All Meta Trak solutions are compatible with <strong>hybrid and electric vehicles.</strong>  </p>
         </div>
       </Container>
    </div>
  )
}
export default Protection