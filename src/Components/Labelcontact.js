import React from 'react';

function Labelcontact(props) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 w-full max-w-[300px] h-[80px] sm:h-[100px] lg:h-[120px]"> 
      <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-[#6c80d0] flex-shrink-0">
        {props.icon &&
          React.cloneElement(props.icon, {
            sx: {
              color: "white",
              fontSize: 20
            }
          })
        }
      </div>

      {/* النصوص */}
      <div className="flex flex-col">
        <h1 className="text-base sm:text-lg font-bold text-white">{props.label}</h1>
        <p className="text-xs sm:text-sm text-gray-300">{props.text}</p>
      </div>
    </div>
  );
}

export default Labelcontact;
