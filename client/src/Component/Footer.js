import React from 'react'
import { Icons, footers } from '../Data'

const Footer = () => {
  return (
    <div className='w-screen p-3 bg-[#ffff]'>
        <div className="grid grid-cols-7 items-center footer_res">
           {footers?.map((item, index) => {
               return <div key={index} className="">
                <p style={{fontWeight: 400}} className={`text-xl w-full max-w-[12rem] -pt-[2rem] font_lato font-bold text-black ${item?.title === 'Resource' ? 'resourse_res' : ''} `}>{item?.title}</p>
                <div className="grid grid-col-1 items-center">
                    {item?.address?.map((list, index) => {
                        return <div key={index} className="grid grid-cols-5 items-center">
                            <span style={{fontWeight: 700, fontSize: ".9rem"}} className={` font_lato italic hover:underline hover:cursor-pointer text-black w-[10rem] ${item?.title === 'Resource' ? 'resourse_res' : ''}`}>{list?.location}</span>
                        </div>
                    })}
                </div>
               </div>
           })}
           <span style={{width: '3rem', marginLeft: "-2rem"}} className="flex font_lato branding_res text-lg">Branding</span>
           {Icons?.map((item, index) => {
               return <div style={{ marginLeft: "-9rem"}} key={index} className="grid grid-col-1 items-center">
                <p style={{fontWeight: 400}} className='text-xl w-full max-w-[20rem] pb-3 font_lato font-bold text-black dis_none'>{item?.title}</p>
               <div  className="flex p-2 footer_icon">
               {item?.icons?.map((list, index) => {
                    return <div key={index} className="flex items-center ">
                        <a href={list?.url} target="_blank" rel="noopener noreferrer" className='flex'>
                        <span style={{fontSize: '2.5rem'}} className='flex justify-evenly rounded-md bg-[#EBE9E9] footer_icon mr-4 p-3 shadow-md text-[#485B7C]'>{list?.icon}</span>
                        </a>
                    </div>
                })}
               </div>
                <span className="text-black text-sm font-bold font_lato dis_none">{item?.caption}</span>
               </div>
           })}
        </div>
        
    </div>
  )
}

export default Footer