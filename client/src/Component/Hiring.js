import React from 'react'
import { hiring } from '../Data'

const Hiring = () => {
  return (
    <div>
        <div className="p-2 bg-[#ffff] w-screen h-[18rem]">
            {hiring?.map((item, index) => {
                return <div key={index} className="">
                    <h1 className='text-4xl font_inter font-bold flex justify-center items-center text-black  res_title'>{item?.title}</h1>
                    <div className="flex justify-evenly items-center">
                        {item?.section?.map((list, index) => {
                            return <div key={index} className="flex ml-4 flex-col items-start w-full max-w-[20rem]">
                                <h1 className='text-2xl font_inter font-bold text-black res_para'>{list?.p1}</h1>
                                <h1 className='text-2xl font_inter font-bold text-black res_para'>{list?.p2}</h1>
                                <h1 className='text-2xl font_inter font-bold text-black res_para'>{list?.p3}</h1>
                            </div>
                        })}
                        <div className="container mt-5 pt-3 flex flex-col justify-center items-center">
                            <img src={item?.img} alt="" className='w-full res_img max-w-[7rem] h-[7rem] pb-4' />
                            <button className='text-white mt-5 pt-2 bg-[#FB4195] res_btn p-2 font_inter rounded-md w-full max-w-[12rem]'>{item?.sign_up}</button>
                        </div>
                        {item?.section2?.map((list, index) => {
                            return <div key={index} className="flex flex-col items-start w-full max-w-[18rem] mr-4 ">
                                <h1 className='text-2xl font_inter font-bold text-black res_para'>{list?.p1}</h1>
                                <h1 className='text-2xl font_inter font-bold text-black res_para'>{list?.p2}</h1>
                                <h1 className='text-2xl font_inter font-bold text-black res_para'>{list?.p3}</h1>
                            </div>
                        })}
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Hiring