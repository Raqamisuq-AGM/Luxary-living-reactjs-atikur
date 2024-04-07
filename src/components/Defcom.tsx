import React from 'react'

const Defcom = () => {
    return (
        <div>
            <div className=' space-y-10 h-[100vh] p-24 defcom text-white'>
                <p className='relative font-medium text-left text-xl'>Tracking with a connected alarm</p>
                <img src="https://metatrak.co.uk/wp-content/uploads/2022/04/DEADLOCK-PR0-V3-01.svg" alt="" className='relative -left-67 w-full h-15' />
                <div className="flex gap-14">
                    {/* <div className=""> */}
                    <ul className='space-y-5'>
                        <li className='flex items-center'> <img src="https://metatrak.co.uk/wp-content/uploads/2022/01/icon-insurance-tracking.svg" alt="" /> Category S% Approved tracking</li>
                        <li className='flex items-center'><img src="https://metatrak.co.uk/wp-content/uploads/2022/01/icon-insurance-tracking.svg" alt="" /> Category S% Approved tracking</li>
                        <li className='flex items-center'><img src="https://metatrak.co.uk/wp-content/uploads/2022/01/icon-insurance-tracking.svg" alt="" /> Category S% Approved tracking</li>
                    </ul>
                    {/* </div> */}
                    {/* <div className=""> */}
                    <ul className='space-y-5'>
                        <li className='flex items-center'><img src="https://metatrak.co.uk/wp-content/uploads/2022/01/icon-insurance-tracking.svg" alt="" /> Category S% Approved tracking</li>
                        <li className='flex items-center'><img src="https://metatrak.co.uk/wp-content/uploads/2022/01/icon-insurance-tracking.svg" alt="" /> Category S% Approved tracking</li>
                        <li className='flex items-center'><img src="https://metatrak.co.uk/wp-content/uploads/2022/01/icon-insurance-tracking.svg" alt="" /> Category S% Approved tracking</li>
                    </ul>

                    {/* </div> */}
                </div>
                <button className='bg-orange-600 text-white px-4 py-2 rounded relative'>About Meta Track</button>
                <button className='bg-slate-600 ms-5 text-white px-4 py-2 rounded relative'>About Meta Track</button>
            </div>
        </div>
    )
}

export default Defcom