import React from 'react'
import Buttoon from '../Components/Buttoon';
import { FaJava, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiAngular } from "react-icons/si";
import { FaAngular } from "react-icons/fa";

function About() {
    
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
        <>
            {/* container */}
            <div id="about" className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row justify-around relative mt-[100px] items-center my-[100px] lg:my-[300px] gap-12 lg:gap-8'>
                {/* title */}
               <div className='relative order-2 lg:order-1'>
                <img src="/assets/about-banner.jpg" alt="About Me" className='w-[280px] sm:w-[350px] lg:w-[400px] shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl' />
                <img src='/assets/absolute-image.jpg' alt='About Me' className='absolute -top-[-200px] sm:-top-[-250px] lg:-top-[-300px] -left-[50px] sm:-left-[75px] lg:-left-[100px] w-[200px] sm:w-[250px] lg:w-[300px] rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out' />
               </div>
                {/* content */} 
                <div className='max-w-2xl order-1 lg:order-2 text-center lg:text-left'>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-white' >I'm a Frontend Developer</h2>

                    <p className='text-base sm:text-lg text-gray-400 mb-4 leading-relaxed'>

                        I am a passionate web developer with a focus on creating modern and functional web applications. 
                        My expertise lies in React, JavaScript, and CSS, and I have a strong commitment to delivering high-quality code.
                    </p>
                    <p className='text-base sm:text-lg text-gray-400 mb-6 lg:mb-[30px] leading-relaxed'>
                        With over 3 years of experience in the industry, I have successfully completed numerous projects that showcase my skills and dedication to excellence.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <div onClick={() => scrollToSection('projects')}>
                            <Buttoon name="View my work" bgcolor="bg-white" textcolor="text-black" />
                        </div>
                    </div>
                </div>

                {/* icons */}
                <FaAngular 
                className="hidden lg:block"
                style={{
                    fontSize: 100, 
                    color: "#dd0031",
                    position: "absolute",
                    top: "90%", 
                    left: "24%", 
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "20%"
                }} />    
                
                <SiJavascript 
                className="hidden lg:block"
                style={{ 
                    fontSize: 100, 
                    position: "absolute",
                    top: "10%", 
                    left: "30%", 
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "white",
                    color: "yellow",
                    borderRadius: "20%"
                }} />

                <FaCss3Alt 
                className="hidden lg:block"
                style={{ 
                    fontSize: 100, 
                    position: "absolute",
                    top: "50%", 
                    left: "1%", 
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "blue",
                    color: "white",
                    borderRadius: "20%"
                }} />

                {/* Mobile Icons */}
                <div className="lg:hidden flex justify-center gap-6 mt-8">
                    <FaAngular style={{ fontSize: 40, color: "#dd0031", backgroundColor: "red", color: "white", borderRadius: "20%" }} />
                    <SiJavascript style={{ fontSize: 40, backgroundColor: "white", color: "yellow", borderRadius: "20%" }} />
                    <FaCss3Alt style={{ fontSize: 40, backgroundColor: "blue", color: "white", borderRadius: "20%" }} />
                </div>
            </div>
        </>
  )
}

export default About