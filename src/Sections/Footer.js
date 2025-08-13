import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col sm:flex-row justify-around items-center bg-gray-800 text-white text-center py-6 sm:py-4 mt-6 sm:mt-8 lg:mt-10 min-h-[120px] sm:h-[170px] px-4 sm:px-6 lg:px-8'>
        <p className='text-base sm:text-lg lg:text-xl mb-4 sm:mb-0'>© 2023 Abdelrahman Antar. All rights reserved.</p>
        <div className='flex flex-col sm:flex-row justify-around gap-4 sm:gap-6 lg:gap-8'>
            <p className='text-base sm:text-lg lg:text-xl text-gray-400 cursor-pointer hover:text-white'>Terms & Condition</p>
            <p className='text-base sm:text-lg lg:text-xl text-gray-400 cursor-pointer hover:text-white'>Privacy Policy</p>
        </div>
    </div>
  )
}

export default Footer