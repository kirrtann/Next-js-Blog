import React from 'react'
import Footer from '../Footer/page';
import Navbar from '../Navbar/page';

const Contact = () => {
  return (
    <>
      <div className=" bg-[#222222]   font-lato">
        <div className="bg-cover bg-gradient-image-main w-full bg-center   bg-no-repeat min-h-[450px]">
          <div className=" max-w-[940px] mx-auto " >
            <Navbar />
            <div className='mx-auto lg:mt-[140px] md:mt-[115px] sm:mt-[72px] mt-[50px] px-[5%] md:px-[15%] text-center'>
              <h1 className="text-white md:text-[48px] text-[38px]  mb-[27px]">Reach out! Let's start something together. </h1>
            </div>
          </div>
        </div>
        <div className='max-w-[940px] mx-auto'>
          <div>
            <form className='flex flex-col mx-auto  w-[60%] tracking-[1px] text-[#ffffff]'>
              <label htmlFor="name" className='mb-1 text-[12px]  '>NAME</label>
              <input type="text" className='rounded-[3px] mb-[19px] p-3 min-h-[50px] bg-[#4b4b4b] placeholder:text-[14px] ' placeholder='Enter Your Name' required />
              <label htmlFor="name" className='mb-1 text-[12px]  uppercase'>Email Address</label>
              <input type="email" className='rounded-[3px] mb-[19px] p-3 min-h-[50px] bg-[#4b4b4b] placeholder:text-[14px] ' placeholder='Enter Your email address' required />
              <label htmlFor="name" className='mb-1 text-[12px]  uppercase'>Message</label>
              <textarea name="field" className='min-h-[141px] rounded-[3px] mb-[19px] p-3 bg-[#4b4b4b] placeholder:text-[14px] ' placeholder='Example Text' required />
              <button className='text-[#00d6b4] border uppercase text-[13px] rounded-[3px] mx-auto hover:text-white hover:border-white px-[45px] py-2 border-[#00d6b4]'>Submit</button>
            </form></div></div>
        <Footer />
      </div>
    </>
  )
}

export default Contact