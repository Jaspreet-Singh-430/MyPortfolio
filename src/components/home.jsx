import React from "react"
import pic from "../../public/vite.svg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import {ReactTyped} from "react-typed";
export default function Home() {
    return(
        <>
        <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
            <div className="flex flex-col md:flex-row">
            <div className="md:w-3/5 md:mt-24 mt-12 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl mt-3">
                <h1>Hello I'm a &nbsp;</h1>
                {/* <span className="text-red-700 font-bold">Developer</span> */}
                <ReactTyped className="text-red-700 font-bold"
                strings={["Web Developer","Programmer","Game Coder","Tech Enthusiast"]}
                typedSpeed={40}
                backSpeed={50}
                loop={true}
                />
            </div>
            <br/>
            <p className="text-md md:text-lg text-justify">Lorem djfhjd fjksdkj djksfsdjk dfsjk hdfbjh jhdbjh h sdfhbjsdfh hdbfh hdbfsjhd hsdfb jkf wehfbjh 
                hejfb jefh kjk jdjk jksjksjkfkj jkjfdkjdf jkfkjdjfkjk kdjfksdfj dskjfsdkfjd djkfsfj jkds</p>
                <br/>
                
                {/* social media icons */}
                <div className='flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0'>
                <div className="space-y-1">
                    <h1 className="font-bold text-center md:text-start">Available on</h1>
                    <ul className="flex space-x-5">
                    <li><a href='' target="_blank"><FaFacebook className="md:text-3xl text-2xl cursor-pointer"/></a></li>
                    <li><a href='' target="_blank"><FaInstagramSquare className="md:text-3xl text-2xl cursor-pointer"/></a></li>
                    <li><a href='' target="_blank"><FaLinkedin className="md:text-3xl text-2xl cursor-pointer"/></a></li>
                    <li><a href="" target="_blank"><FaGithub className="md:text-3xl text-2xl cursor-pointer"/></a></li>
                    </ul>
                </div>
                <div className='space-y-1'>
                    <h1 className="font-bold mt-1">Currently working on</h1>
                    <ul className="flex space-x-5">
                        <li><BiLogoMongodb className="text-2xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full"/></li>
                        <li><SiExpress className="text-2xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full"/></li>
                        <li><FaReact className="text-2xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full"/></li>
                        <li><FaNodeJs className="text-2xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full"/></li>
                    </ul>
                </div>
                </div>
            </div>
 
            <div className="md:w-2/5 mt-10 md:mt-20 md:ml-30 order-1">
            <img className="w-full h-[400px] md:w-[400px] md:h-[400px] rounded-full" src={pic} alt=""/>
            </div>
            </div>
        </div>
        <hr  style={{color:'lightgray'}}/>
        </>
    )
}