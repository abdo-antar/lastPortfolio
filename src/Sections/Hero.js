import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Buttoon from '../Components/Buttoon';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function Hero() {
  const [isBottom, setIsBottom] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="hero"
      style={{ backgroundImage: `url('/assets/hero-bg.jpg')` }}
      className="min-h-screen bg-cover bg-center flex items-center relative"
    >
      <div className="container max-w-[1300px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-10 py-20 lg:py-0">
        
        {/* content*/}
        <div className="max-w-[600px] px-4 sm:px-8 lg:px-[40px] pt-[90px] lg:pt-[90px] text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
            Hello <br /> I'm Abdelrahman Antar
          </h1>
          <p className="text-base sm:text-lg mb-6 lg:mb-8 text-white leading-relaxed">
            Web Developer from Egypt
            <br />
            with a passion for creating modern and functional web applications.
            <br />
            I specialize in React, JavaScript, and CSS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <div onClick={() => scrollToSection('contact')}>
              <Buttoon name="Get a Quote" bgcolor="bg-white" textcolor="text-black" />
            </div>
            <div onClick={() => scrollToSection('about')}>
              <Buttoon name="About Me" textcolor="text-white" />
            </div>
          </div>

          <div className="mt-16 lg:mt-28">
            <KeyboardDoubleArrowDownIcon
              sx={{ color: "white", fontSize: 40, cursor: "pointer" }}
              className={`transition-opacity duration-1000 absolute bottom-10 left-1/2 -translate-x-1/2 ${
                isBottom ? "opacity-0" : "opacity-100"
              } animate-bounce`}
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>

        {/* hero img left*/}
        <div className="relative px-4 sm:px-8 lg:px-[100px] order-first lg:order-last">
          <img
            className="w-[280px] h-[320px] sm:w-[350px] sm:h-[400px] lg:w-[400px] lg:h-[450px] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
            src="/assets/hero-banner.jpg"
            alt="Hero Banner"
          />
        </div>
      </div>

      {/* cards on img */}
      <div className="hidden lg:block absolute right-[170px] bottom-[250px] bg-white rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300">
        <span className="text-4xl font-bold text-red-800">800+</span>
        <br />
        <pre className="text-2xl font-bold">Projects Completed</pre>
      </div>

      <div className="hidden lg:block absolute right-[550px] top-[280px] bg-white rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300">
        <span className="text-4xl font-bold text-blue-800">12</span>
        <br />
        <pre className="text-2xl font-bold">Years of success</pre>
      </div>

      <div className="hidden lg:block absolute right-[300px] top-[240px] bg-white p-4 rounded-xl shadow-lg flex items-center justify-center w-[100px] h-[100px] hover:scale-105 transition-transform duration-300">
        <EmojiEventsIcon sx={{ fontSize: 80, color: '#FFD700' }} /> 
      </div>

      {/* Mobile Statistics Cards */}
      <div className="lg:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
          <span className="text-xl font-bold text-red-800">800+</span>
          <p className="text-xs font-bold">Projects</p>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
          <span className="text-xl font-bold text-blue-800">12</span>
          <p className="text-xs font-bold">Years</p>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg flex items-center justify-center w-12 h-12">
          <EmojiEventsIcon sx={{ fontSize: 30, color: '#FFD700' }} /> 
        </div>
      </div>
    </div>
  );
}

export default Hero;
