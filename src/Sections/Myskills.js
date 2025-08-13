import React from 'react'
import SkillBar from '../Components/Bar'

function Myskills() {
  return (
    <div id="skills" className="px-4 sm:px-6 lg:px-8">
      {/* upeer content */}
      <div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl text-center font-bold text-white mt-6 sm:mt-8 lg:mt-10'>My Skills</h1>
        <p className='text-center text-xl sm:text-2xl lg:text-4xl text-gray-400 mt-2 sm:mt-4 mb-12 sm:mb-16 lg:mb-[170px]'>
          I Develop Skills Regularly
          <br />
          <span className='text-white text-xs sm:text-sm lg:text-base mb-6 sm:mb-8 lg:mb-10 block'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </p>
      </div>

      {/* lower content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 lg:gap-x-16 gap-y-6 sm:gap-y-8 lg:gap-y-10 px-4 sm:px-8 md:px-16 lg:px-[290px] mb-12 sm:mb-16 lg:mb-[200px]">
        
        <SkillBar skill="HTML" percentage={100} color="#ffffff" />
        <SkillBar skill="JavaScript" percentage={95} color="#ffffff" />
        <SkillBar skill="React" percentage={90} color="#ffffff" />
        <SkillBar skill="SQL" percentage={100} color="#ffffff" />
        <SkillBar skill="nodejs" percentage={60} color="#ffffff" />
        <SkillBar skill=".NET" percentage={70} color="#ffffff" />
      </div>
    </div>
  )
}

export default Myskills
