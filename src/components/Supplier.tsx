import React from 'react';
import logo3 from '../assets/logo-cupra-1.png';
import logo1 from '../assets/logo-mercedes.png';
import logo8 from '../assets/logo-nsi.png';
import logo5 from '../assets/logo-seat-1.png';
import logo4 from '../assets/logo-skoda-1.png';
import logo7 from '../assets/logo-thatcham-research.png';
import logo2 from '../assets/logo-vw.pmg.png';
import logo6 from '../assets/logo-yamaha-1.png';

const Supplier = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start space-y-8 sm:space-y-0 sm:space-x-8 py-8">
        <div className="text-center border p-5 rounded-lg w-full lg:w-2/3">
          <p className="font-bold text-sm mt-5 pt-3">Official UK supplier to</p>
          <div className="mb-5 flex flex-wrap justify-center">
            <img src={logo1} alt="logo" className="m-2 w-27" />
            <img src={logo2} alt="logo" className="m-2 w-27" />
            <img src={logo3} alt="logo" className="m-2 w-27" />
            <img src={logo4} alt="logo" className="m-2 w-27" />
            <img src={logo5} alt="logo" className="m-2 w-27" />
            <img src={logo6} alt="logo" className="m-2 w-27" />
          </div>
        </div>
        <div className="text-center border p-5 rounded-lg w-full lg:w-1/3">
          <p className="font-bold text-sm mt-5 pt-3">Accredited by</p>
          <div className="mb-5 flex flex-wrap justify-center">
            <img src={logo7} alt="logo" className="m-2 w-27" />
            <img src={logo8} alt="logo" className="m-2 w-27" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supplier;
