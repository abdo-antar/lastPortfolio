import React from 'react';
import Buttoon from './Buttoon';

function ProjectCard({ img, title, align = "left" }) {
  return (
    <div className="hover:cursor-pointer relative bg-white h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full max-w-[1100px] rounded-xl mb-6 sm:mb-8 lg:mb-10 overflow-hidden hover:scale-105 transition-transform duration-300">
    
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="h-full w-full bg-cover bg-center"
      ></div>

      
      <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-4 sm:p-6 md:p-8 lg:p-[60px] flex">
        <div
          className={`${align === "right" ? "ml-auto text-right" : "mr-auto text-left"} w-full`}
        >
          <h5 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-white">{title}</h5>
          <p className="text-white mb-3 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-[30px] font-bold leading-tight">
            Web Application For
            <br />
            Desiverse
          </p>
          <div className={`${align === "right" ? "flex justify-end" : "flex justify-start"}`}>
            <Buttoon name="View Project" bgcolor="bg-white" textcolor="text-black" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
