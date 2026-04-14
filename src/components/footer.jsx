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
                    <a href="https://github.com/Jaspreet-Singh-430/" class="text-black hover:text-primary transition">
                        <FaGithub size={24} className="md:text-3xl text-2xl cursor-pointer"/>
                    </a>
                    <a href="https://www.linkedin.com/in/jaspreetsingh2882000/" class="text-black hover:text-blue-600 transition">
                        <FaLinkedin size={24} className="md:text-3xl text-2xl cursor-pointer"/>
                    </a>
                    <a href="https://www.facebook.com/jaspreet.singh2808" class="text-black hover:text-blue-400 transition">
                    <FaFacebook size={24} className="md:text-3xl text-2xl cursor-pointer"/>
                    </a>
                    <a href="https://www.instagram.com/jas_preet1234singh/" class="text-black hover:text-pink-600 transition">
                    <FaInstagramSquare size={24} className="md:text-3xl text-2xl cursor-pointer"/>
                    </a>
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