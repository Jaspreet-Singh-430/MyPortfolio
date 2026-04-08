import React from "react"
export default function Contact() {
    return(
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
            <form action="" class="bg-slate-200 w-96 px-8 py-6 rounded-xl">
                <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
                <div className="flex flex-col mb-4">
                    <label className="block text-gray-700" htmlFor="name">Fullname</label>
                    <input className="mt-1 bg-white block border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" 
                    type="text" 
                    id="name"
                    placeholder="Enter your fullname" />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="block text-gray-700" htmlFor="email">Email</label>
                    <input className="mt-1 bg-white block border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" 
                    type="email" 
                    id="email"
                    placeholder="Enter your email address" />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="block text-gray-700" htmlFor="message">Message</label>
                    <textarea className="mt-1 bg-white block border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"  
                    id="message"
                    placeholder="Enter your message" ></textarea>
                </div>
                <button className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300">Send</button>
            </form>
        </div>
        </div>
    )
}