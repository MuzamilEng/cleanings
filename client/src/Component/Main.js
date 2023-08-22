import React from 'react'
import { mainSection } from '../Data'

const Main = () => {
    return (
        <div>
            <main className='bg-[#FB4195] w-screen h-[30.5rem]'>
                <div className="flex">
                    {
                        mainSection?.map((item, index) => {
                            return <div key={index} className="flex justify-around items-center relative">
                                <div className="container relative">
                                    <img style={{marginLeft: '4rem'}} src={item.model1} alt="" className='max-w-[25rem] model_res -mt-[1rem] w-full h-[30rem] ml-2 rounded-md ' />
                                    <img src="images/brush.png" alt="" className='absolute brush_img top-[14rem] left-[5rem]' />
                                </div>
                                <div className="container main_container flex flex-col justify-center items-center">
                                    <div className="">
                                <h3 style={{ fontWeight: 400 }} className='text-white text-6xl pt-4 mt-2 font_medula res_title'>{item.title}</h3>
                                    <h1 style={{ fontWeight: 700, letterSpacing: ".4rem" }} className='text-white text-6xl max-w-[50rem] w-full res_heading font_mont'>{item.info}</h1>
                                    <p style={{ fontWeight: 400 }} className='text-white  font-bold text-base font_mont  res_para1'>{item.para}</p>
                                    <p style={{ fontWeight: 700 }} className='text-white text-3xl mt-3 pt-2 res_heading main_para max-w-[35rem] w-full ml-4 font_inter'>{item.goal}</p>
                                    <div className="flex mt-3 pt-3 res_main_btn justify-between ml-4 w-full max-w-[33rem]">
                                        {item.find?.map((list, index) => {
                                            return <div key={index} className="flex bg-[#ffff] res_main_btn border-2 border-gray-100 rounded-lg">
                                                <a href={list?.url} className='text-[#FB4195] main_btn ml-2 p-1 max-w-[12rem] w-full text-center text-base font_inter'>{list?.title}</a>
                                            </div>
                                        })}
                                    </div>
                                    </div>
                                    {/* ratings */}
                                    <div className="flex bg-[#ffff] rating_res rounded-md mt-4 p-2 w-[75rem] h-[8.7rem]">
                                        {
                                            item.ratings?.map((list, index) => {
                                                return <div key={index} className="flex justify-evenly ">
                                                    <div className="container -mt-[5rem] flex mr-2 items-center">
                                                        <div className="mr-2 mt-3 p-2 flex flex-col items-center">
                                                            <div className="flex">
                                                            {list?.stars?.map((star, index) => {
                                                                return <span key={index} className='text-black flex ml-2 text-4xl pt-7 font_inter'>{star?.icon}</span>
                                                            })}
                                                            </div>
                                                            <span className='text-black font_inter'>{list?.rated}</span>
                                                        </div>
                                                            <div className="mt-3 ml-5">
                                                                <span style={{ fontSize: "2.5rem", }} className='text-black font-bold res_para1 text-4xl'>{list?.people}</span>
                                                            </div>
                                                    </div>
                                                    <div className="container">
                                                        <p style={{ fontSize: "2.5rem" }} className='text-black res_para1 font-bold text-3xl'>{list?.hosts}</p>
                                                        <span className='text-black text-base font_inter res_para1'>{list?.satisfy}</span>
                                                    </div>
                                                    <div className="container -ml-[15rem] relative">
                                                        <span className='text-black text-base res_para1 font_inter'>{list?.info}</span>
                                                        <span className='text-black absolute right-2 font_inter dis_none'>{list?.satisfy}</span>
                                                    </div>
                                                </div>

                                            })
                                        }
                                    </div>
                                </div>
                                <div className="container relative model_2">
                                    <img style={{marginLeft: "-3rem"}} src={item.model2} alt="" className='max-w-[20rem] model_res -mt-[1rem]  w-full h-[30rem] rounded-md ml-4 ' />
                                </div>
                            </div>
                        })
                    }
                </div>
            </main>
        </div>
    )
}

export default Main