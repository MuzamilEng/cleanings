import React from 'react'
import { findMaid } from '../Data'

const FindMaid = () => {
    return (
        <div className='bg-[#FB4195] w-screen h-[17rem] p-2'>
            <div className="flex justify-center pt-3 items-center">
                {findMaid?.map((item, index) => {
                    return <div key={index} className="flex flex-col items-center">
                        <h1 className='text-2xl font_inter font-bold text-white res_title'>{item?.title}</h1>
                        <p className='text-white text-sm pt-4 font_inter mt-2 text-center w-full max-w-[30rem] res_para'>{item?.info}</p>
                        <div className="flex mt-4 items-center">
                            <div className="content mr-2">
                                <h2 className='text-white font-bold text-xl font_inter res_title'>{item?.maid_no}</h2>
                                <p style={{maxWidth: "10rem ", width: "100"}} className='text-white  text-sm font_inter res_para'>{item?.info_maid}</p>
                            </div>
                            <div className="content ml-3">
                                <h2 className='text-white font-bold text-xl font_inter res_title'>{item?.host_no}</h2>
                                <p style={{width: "100", maxWidth: "12rem "}} className='text-white text-sm font_inter res_para'>{item?.info_host}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
                <div className="flex justify-center mt-3 pt-4 items-center">
                    <input type="text" placeholder='Type An Address' className='p-2 font_inter text-sm rounded-md w-full max-w-[30rem] mr-2 focus:outline-none' />
                    <button className='bg-[#FE83AB] font_inter text-white w-full max-w-[15rem] ml-4 rounded-md p-2'>Find Your Next Maid</button>
                </div>

        </div>
    )
}

export default FindMaid