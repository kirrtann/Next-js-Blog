import React from 'react'
import Image from 'next/image';
import Navbar from '@/app/Navbar/page';
import Footer from '@/app/Footer/page';
import { imageDatajson } from '@/app/Image/Image';
import Link from 'next/link';

const BlogDetail = () => {
  return (
    <>

      <div className=" bg-[#222222]   font-lato">
        <div className="bg-cover bg-gradient-image-main w-full bg-center   bg-no-repeat min-h-[350px]">
          <div className=" max-w-[940px] mx-auto " >
            <Navbar />
            <div className='mx-auto lg:mt-[140px] md:mt-[115px] sm:mt-[72px] mt-[50px] px-[5%] md:px-[15%] text-center'>
              <h6 className='uppercase text-[#00d6b4] text-[12px] tracking-[.5px] my-[10px] '>app desing</h6>
              <h1 className='text-white md:text-[48px] text-[38px]  mb-[27px]'>Music Player </h1>
              <Image src={"https://cdn.prod.website-files.com/56104995fd4f22cf7e335ea0/56148d518924f1f620d590e3_zip-code-800-p-800x.jpeg"} width={400} height={300} alt='photo' className=' rounded mx-auto mb-[31px]' />

            </div>

          </div>
        </div>
        <div className=' text-white max-w-[940px] mx-auto  mb-20'>
          <div className='sm:mx-[12%] mx-[20px]'>
            <p className='mb-[10px] font-light text-[14px] opacity-60  tracking-[0.5px] '>
              But as we neared Zodanga their personal quarrels were submerged by their greater hatred for the red men, and especially for the Zodangans, who had for years waged a ruthless campaign of extermination against the green men, directing special attention toward despoiling their incubators.
            </p>
            <h3 className='text-[24px] py-[10px] '>Nearing Zodanga and their personal quarrels</h3>
            <p className='mb-[10px] text-[14px] opacity-60 tracking-[0.5px]'>Now that we were before Zodanga the task of obtaining entry to the city devolved upon me, and directing Tars Tarkas to hold his forces in two divisions out of earshot of the city, with each division opposite a large gateway, I took twenty dismounted warriors and approached one of the small gates that pierced the walls at short intervals.  These gates have no regular guard, but are covered by sentries, who patrol the avenue that encircles the city just within the walls as our metropolitan police patrol their beats.</p>
            <Image src={"https://cdn.prod.website-files.com/56104995fd4f22cf7e335ea0/5614b861e5c769ea031871b2_just-laptop.png"} width={350} height={350} alt='phto' className='mx-auto' />
            <h3 className='text-[24px] py-[10px]'>The walls of Zodanga
            </h3>
            <p className='mb-[10px] text-[14px] opacity-60 tracking-[0.5px]'>The walls of Zodanga are seventy-five feet in height and fifty feet thick.  They are built of enormous blocks of carborundum, and the task of entering the city seemed, to my escort of green warriors, an impossibility.  The fellows who had been detailed to accompany me were of one of the smaller hordes, and therefore did not know me.</p>
            <p className='mb-[10px] text-[14px] opacity-60 tracking-[0.5px]'>Placing three of them with their faces to the wall and arms locked, I commanded two more to mount to their shoulders, and a sixth I ordered to climb upon the shoulders of the upper two.  The head of the topmost warrior towered over forty feet from the ground.</p>
            <h3 className='text-[24px] py-[10px]'>Final bound from the broad shoulders</h3>
            <p className='mb-[10px] text-[14px] opacity-60 tracking-[0.5px]'>In this way, with ten warriors, I built a series of three steps from the ground to the shoulders of the topmost man.  Then starting from a short distance behind them I ran swiftly up from one tier to the next, and with a final bound from the broad shoulders of the highest I clutched the top of the great wall and quietly drew myself to its broad expanse.  After me I dragged six lengths of leather from an equal number of my warriors.  </p>
            <p className='mb-[10px] text-[14px] opacity-60 tracking-[0.5px]'>These lengths we had previously fastened together, and passing one end to the topmost warrior I lowered the other end cautiously over the opposite side of the wall toward the avenue below.  No one was in sight, so, lowering myself to the end of my leather strap, I dropped the remaining thirty feet to the pavement below.</p>
            <Image src={"https://cdn.prod.website-files.com/56104995fd4f22cf7e335ea0/5614b8b0b90f3cb23a0b1afa_flat-white.png"} width={400} height={1} alt='phto' className='mx-auto' />


          </div>
        </div>
        <div className='max-w-[940px]  mx-auto gap'>
          <h1 className='text-white text-[26px] mb-[22px] text-center uppercase'>All Recent Work</h1>
          <div className=' grid sm:grid-cols-3'>
            {imageDatajson.map((image: { url: string, }, index: number) => (
              <Link href={"/blog/blogdetail"} key={index} className='mb-[20px]'>

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

export default BlogDetail