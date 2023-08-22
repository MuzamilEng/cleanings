import React from 'react'
import { hosts } from '../Data'
import VideoSlider from './VideoSlider'

const Hosts = () => {
    const videos = [
        "images/video3.mp4",
        "images/video4.mp4",
        "images/video1.mp4",
        "images/video2.mp4",
    ]
    return (
        <div className='bg-[#ffff] w-screen h-[45rem] flex p-2 flex-col items-center justify-center overflow-x-hidden'>
            {hosts.map((item, index) => {
                return <div key={index}>
                    <h1 style={{ fontWeight: 800 }} className='font_inter text-4xl res_title font-bold flex p-2 justify-center items-center font_inter text-black'>{item.title}</h1>
                    <p className="text-black flex justify-center items-center pt-2 res_para text-center text-sm font_inter w-full max-w-[30rem]">{item.info}</p>
                    <div className="justify-center items-center flex pt-3">
                        <button className='text-white bg-[#FB4195] p-2 font_inter rounded-md w-full max-w-[12rem]'>{item.sign_up}</button>
                    </div>
                </div>
            })}
            <div className="videos mt-4 pt-3 flex justify-around items-center">
                <p style={{fontSize: ".9rem"}} className="w-full dis_none max-w-[17rem] text-gray-400">If you have short term rentals this app is a no brainer. It makes
                    working with cleaners and communication so much easier than
                    any other thing I have seen. Love it”</p>
                <VideoSlider videos={videos} />
                <div style={{marginLeft: "2rem"}} className="container dis_none">
                    <div className="flex items-center justify-around mr-2">
                        <img src="images/man.jpg" className='w-full max-w-[6rem] -mt-[10rem] h-[6rem] rounded-full' alt="" />
                        <div className="container ml-4">
                            <p className="text-gray-700 font_inter">Roberts</p>
                            <span className="pt-2 text-gray-400 font_inter">Host in Maimi</span>
                    <p  style={{fontSize: ".7rem"}} className='text-gray-400 w-full max-w-[25rem] md:w-[15rem] md:ml-[-3rem] sm:ml-[-3rem]  sm:w-[10rem]'>I manage two airbnb properties and having a tool
                     like turno is invaluable for reducing my work load, stress and letting things
                      fall through the cracks. Turno is a great product that is custom fit to make
                       a property manager's life simpler and keep his property cleanings scheduled
                        like clock work.”</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hosts