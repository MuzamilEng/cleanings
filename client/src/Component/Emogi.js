import React from 'react'
import { emojies } from '../Data'
import { useMediaQuery } from 'react-responsive';

const Emogi = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 639 }); // Define your small screen breakpoint
  return (
    <div className='bg-[#FB4195] w-screen h-[43rem] p-2'>
      <div className="grid grid-cols-3 gap-4 items-center p-3">
      {emojies.map((item, index) => (
        <div key={index} className='flex flex-col mb-2 pb-5 pt-3 items-center'>
          <img
            src={item?.img}
            alt=""
            className={`w-full res_img max-w-[7rem] h-[7rem] ${
              item?.hide === true && isSmallScreen ? 'hidden sm:block' : ''
            } md:w-full max-w-[5rem] md:h-[5rem] sm:w-[2rem] sm:h-[2rem]`}
          />
          <div className={`container h-[7rem] flex flex-col items-center ${
              item?.hide === true && isSmallScreen ? 'hidden sm:block' : ''
            }`}>
            <h1 className={`text-white text-lg res_title font-bold font_mont emo_title_res ${
              item?.hide === true && isSmallScreen ? 'hidden sm:block' : ''
            }`}>{item?.title}</h1>
            <p className={` text-white text-base res_para font_inter mt-2 text-center xl:w-full max-w-[26rem] md:w-full max-w-[20rem] sm:w-full max-w-[15rem] emoji_para_res ${
              item?.hide === true && isSmallScreen ? 'hidden sm:block' : ''
            }`}>{item?.info}</p>
          </div>
        </div>
      ))}
      </div>
       <div className="flex justify-center items-center emogi_btn mt-10 pt-10">
       <button className='text-black bg-[#ffff] p-2 font_inter rounded-md w-full max-w-[12rem]'>Get Started</button>
       </div>
    </div>
  )
}

export default Emogi