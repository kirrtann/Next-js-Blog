import React from 'react'

import { imageDatajson } from '../Image/Image';
import Image from 'next/image';
import Footer from '../Footer/page';
import Navbar from '../Navbar/page';
import Link from 'next/link';



const Main = () => {
  return (
    <>
      <div className=" bg-[#222222]   font-lato">
        <div className="bg-cover bg-gradient-image-main  w-full bg-center   bg-no-repeat min-h-[550px]">
          <div className=" max-w-[940px] mx-auto " >
            <Navbar />
            <div className='mx-auto lg:mt-[140px] md:mt-[115px] sm:mt-[72px] mt-[50px] px-[5%] md:px-[15%] text-center'>
              <h1 className='text-white md:text-[48px] text-[38px] tracking-[1px]  mb-[27px]'>We build beautiful web and mobile apps.</h1>
              <button className='text-[#00d6b4] border uppercase text-[13px] rounded-[3px] hover:text-white hover:border-white px-[25px] py-2 border-[#00d6b4]'>Get a quote</button>
            </div>

          </div>
        </div>
        <div className='max-w-[940px] py-[50px] mx-auto gap'>
          <h1 className='text-white text-[26px] mb-[22px] text-center'>Latest Work</h1>
          <div className=' grid sm:grid-cols-3'>
            {imageDatajson.map((image: { url: string, }, index: number) => (
              <Link href={"/blog/blogdetail"} key={index}  className='  mb-[20px]'>
              
                <Image src={image.url} alt='photo' width={1000} height={300} className='px-[10px] rounded hover:opacity-75 ' />
              </Link>
            ))}
          </div>

        </div>
        <Footer />
      </div>
    </>
  )
}

export default Main;