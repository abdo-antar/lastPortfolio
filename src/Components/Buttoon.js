import React from 'react'

function Buttoon(props) {
  return (
    <>
        <button className={`${props.bgcolor} ${props.textcolor} ${props.width || 'w-auto'} mx-2 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-black/80 hover:text-white transition duration-300 whitespace-nowrap`}>
            {props.name}
        </button>
    </>
  )
}

export default Buttoon