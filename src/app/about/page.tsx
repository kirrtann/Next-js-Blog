import React from 'react'
import Image from 'next/image';
import Footer from '../Footer/page';
import Navbar from '../Navbar/page';

const About = () => {
  return (
    <>
      <div className=" bg-[#222222]   font-lato">
        <div className="bg-cover bg-gradient-image-about w-full bg-center   bg-no-repeat min-h-[350px]">
          <div className=" max-w-[940px] mx-auto " >
            <Navbar/>
            <div className='mx-auto lg:mt-[140px] md:mt-[115px] sm:mt-[72px] mt-[50px] px-[5%] md:px-[15%] text-center'>
              <h1 className='text-white md:text-[48px] text-[38px]  mb-[27px]'>A little about me. </h1>
            </div>

          </div>
        </div>
        <div className=' text-white max-w-[940px] mx-auto  mb-20'>

          <Image src={"https://cdn.prod.website-files.com/560f27977849849d0e1fee5c/56146952978774c311f33aab_128-25.jpg"} width={90} height={90} alt='photo' className='rounded-full mx-auto mb-[31px]' />


          <div className="w-[91%] text-[#ffffff] text-[14px] tracking-[0.5px] sm:w-[81%] md:w-[61%] mx-auto">
            <p className="mb-[10px] text-[14px] opacity-60">Something very like the war fever that occasionally runs through a civilised community had got into my blood, and in my heart I was not so very sorry that I had to return to Maybury that night.  I was even afraid that that last fusillade I had heard might mean the extermination of our invaders from Mars.  I can best express my state of mind by saying that I wanted to be in at the death.</p>
            <p className="mb-[10px] text-[14px] opacity-60">It was nearly eleven when I started to return.  The night was unexpectedly dark; to me, walking out of the lighted passage of my cousins' house, it seemed indeed black, and it was as hot and close as the day.  Overhead the clouds were driving fast, albeit not a breath stirred the shrubs about us.  My cousins' man lit both lamps.  Happily, I knew the road intimately.  My wife stood in the light of the doorway, and watched me until I jumped up into the dog cart.  Then abruptly she turned and went in, leaving my cousins side by side wishing me good hap.</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default About