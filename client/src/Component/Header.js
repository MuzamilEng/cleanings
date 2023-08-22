import React from 'react'
import { headers } from '../Data'

const Header = () => {
    return (
        <div>
            <header>
                <div className="content bg-[#ffff] p-2">
                    {headers?.map((item, index) => {
                        return <div key={index} className='flex justify-around items-center'>
                            <div className="flex">
                                <a href="{item.url}">
                                    <h1 className="text-4xl logo">{item?.title}</h1>
                                </a>
                            </div>
                            <div className="flex header_res">
                                {item?.form?.map((list, index) => {
                                    return <div key={index} className="flex ml-2 justify-evenly">
                                        <a className='text-base text-black ml-2 p-2 font_lato res_para1' href="{list.url}">{list.title}</a>
                                    </div>
                                })}
                            </div>
                            <div className="flex">
                                {item?.signInForm?.map((list, index) => {
                                    // #FB4195
                                    return <div key={index} className="flex ml-2 justify-evenly rounded-md">
                                        <a className={`${list?.title === "Sign In" ? "border-2 border-gray-400" : ""} ${list?.title === "Sign Up" ? "bg-[#FB4195] hover:bg-[#b8346f]" : "bg-white"} ${list?.title === "Sign Up" && 'header_res'} ${list?.title === "Sign In" ? "text-black" : "text-white"} hover:bg-[#f14e98]  p-1 rounded-md text-center w-[10rem] text-base text-black`} href="{list.url}">{list.title}</a>
                                    </div>
                                })}
                            </div>
                        </div>
                    })}
                </div>
            </header>
        </div>
    )
}

export default Header