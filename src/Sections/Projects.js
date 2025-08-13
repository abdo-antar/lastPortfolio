import React from 'react'
import ProjectCard from '../Components/ProjectCard';

function Projects() {
  return (
    <div id="projects" className='mt-[50px] sm:mt-[80px] lg:mt-[100px] mb-[60px] sm:mb-[80px] lg:mb-[120px] px-4 sm:px-6 lg:px-8'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl text-center font-bold text-white'>Portfolio</h1>
        <h1 className='text-center text-white mt-2 sm:mt-4 text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-4'>My Amazing Works</h1>
        <p className='text-center text-white text-sm sm:text-base px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
        <div className='flex justify-center mt-6 sm:mt-8 lg:mt-10'>
            <div className='w-full max-w-7xl  lg:px-[100px] '>
                {/* Project Cards  */}
                
                <ProjectCard img="/assets/portfolio-1.jpg" title="Youtube"  />
                <ProjectCard img="/assets/portfolio-2.jpg" title="Vimeo" align='right'/>
                <ProjectCard img="/assets/portfolio-3.jpg" title="Souncloud"/>
                <ProjectCard img="/assets/portfolio-4.jpg" title="Details" align='right'/>
                
            </div>
        </div>
    </div>
  )
}

export default Projects