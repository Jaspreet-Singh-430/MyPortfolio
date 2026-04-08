import React from "react"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
    return(
        <>
        <hr className="text-gray-300"/>
        <footer class="py-12">
        <div class="max-w-screen-2xl container mx-auto px-4 md:px-20">
            <div class="flex flex-col justify-between items-center">
                
                
                <div class="flex space-x-4">
                    {/* <a href="#" class="text-black hover:text-primary transition"> */}
                        <FaGithub className="md:text-3xl text-2xl cursor-pointer"/>
                    {/* </a> */}
                    {/* <a href="#" class="text-black hover:text-blue-600 transition"> */}
                        <FaLinkedin className="md:text-3xl text-2xl cursor-pointer"/>
                    {/* </a> */}
                    {/* <a href="#" class="text-black hover:text-blue-400 transition"> */}
                    <FaFacebook className="md:text-3xl text-2xl cursor-pointer"/>
                    {/* </a> */}
                    {/* <a href="#" class="text-black hover:text-pink-600 transition"> */}
                    <FaInstagramSquare className="md:text-3xl text-2xl cursor-pointer"/>
                    {/* </a> */}
                </div>
            <div class="border-t border-gray-500 mt-8 pt-8 flex flex-col items-center">
                <p className="text-sm">© 2025 Personal Portfolio. All rights reserved.</p>
            </div>
            </div>
            
        </div>
    </footer>
        </>
    )
}