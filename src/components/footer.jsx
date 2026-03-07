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
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="mb-6 md:mb-0">
                    <a href="#" class="text-2xl font-bold">Portfolio</a>
                    <p class="mt-2">© 2023 Alex Carter. All rights reserved.</p>
                </div>
                
                <div class="flex space-x-6">
                    <a href="#" class="text-black hover:text-primary transition">
                        <FaGithub className="md:text-3xl text-2xl cursor-pointer"/>
                    </a>
                    <a href="#" class="text-black hover:text-blue-600 transition">
                        <FaLinkedin className="md:text-3xl text-2xl cursor-pointer"/>
                    </a>
                    <a href="#" class="text-black hover:text-blue-400 transition">
                    <FaFacebook className="md:text-3xl text-2xl cursor-pointer"/>
                    </a>
                    <a href="#" class="text-black hover:text-pink-600 transition">
                    <FaInstagramSquare className="md:text-3xl text-2xl cursor-pointer"/>
                    </a>
                </div>
            </div>
            
            <div class="border-t border-slate-500 mt-8 pt-8 text-center">
                <p>Made with <i class="fas fa-heart text-red-500"></i> and lots of <i class="fas fa-coffee text-amber-500"></i></p>
            </div>
        </div>
    </footer>
        </>
    )
}