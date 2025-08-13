import React from 'react'
import Input from '../Components/Input'
import Buttoon from '../Components/Buttoon'
import Labelcontact from '../Components/Labelcontact'
import LocationPinIcon from '@mui/icons-material/LocationPin';
import AddCallIcon from '@mui/icons-material/AddCall';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <div id="contact" className='flex flex-col lg:flex-row justify-around bg-black mt-[50px] sm:mt-[80px] lg:mt-[100px] mb-[60px] sm:mb-[100px] lg:mb-[220px] w-[90%] sm:w-[80%] lg:w-[65%] p-6 sm:p-8 lg:p-10 mx-auto rounded-xl shadow-lg min-h-[600px] lg:h-[780px]'>
        {/* left content */}
        <div className='mt-[50px] sm:mt-[80px] lg:mt-[100px] order-2 lg:order-1'>
            <p className='font-semibold text-lg sm:text-xl text-white text-center lg:text-left'>Don't be shy</p>
            <h1 className='font-bold text-2xl sm:text-3xl mb-6 sm:mb-8 lg:mb-[50px] text-white text-center lg:text-left'>Drop Me a Line</h1>
           <Input placeholder="Name"/>
           <Input placeholder="Email"/>
          <textarea 
          placeholder='Message'
          className='h-[200px] sm:h-[250px] rounded-xl w-full max-w-[450px] p-4 sm:p-6 lg:p-[30px] mb-4 sm:mb-6'/>
            <br/>
       
             <br/>

          
        <div className="flex justify-center lg:justify-start">
            <Buttoon 
            textcolor="text-white"
            bgcolor="bg-blue-500"
            width="w-full max-w-[450px]"
            name="Submit"/>
        </div>

        </div>

        {/* right content */}
        <div className='flex flex-col justify-center items-center mt-[30px] sm:mt-[50px] lg:mt-[50px] order-1 lg:order-2'>
         {/* <Labelcontact label="Address" text="20, London, United Kingdom" />
         <Labelcontact label="Email" text="abdoanter729@gmail.com" /> */}

          <Labelcontact
        icon={<LocationPinIcon />}
        label="Our Location"
        text="123 Main Street"
      />
          <Labelcontact
        icon={<EmailIcon />}
        label="Email"
        text="abdoanter729@gmail.com"
      />
          <Labelcontact
        icon={< AddCallIcon/>}
        label="Phone"
        text="+201150241163"
      />
        
    </div>
    </div>
  )
}

export default Contact