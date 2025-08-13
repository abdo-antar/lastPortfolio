import React from 'react'

function Input(props) {
  return (
    <div> 
        <input 
            className='rounded-lg px-4 sm:px-6 lg:px-[50px] py-3 sm:py-4 lg:py-[20px] mb-4 sm:mb-5 lg:mb-[20px] h-[50px] sm:h-[55px] lg:h-[60px] w-full max-w-[450px] text-sm sm:text-base'
            placeholder={props.placeholder}
        />
    </div>
  )
}

export default Input