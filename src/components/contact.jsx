import React from "react"
import { useForm} from "react-hook-form";
import axios from "axios"
import toast from "react-hot-toast";
// toast.configure()
export default function Contact() {
    

    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const userInfo={
        name:data.name,
        email:data.email,
        message:data.message
    }
    console.log(userInfo)
    try {
        const response=await axios.post("https://mailhandler-qf4n.onrender.com/send-email", userInfo);
        console.log(response.data)
        toast.success("Message sent successfully")
    }
    catch(error){
        console.log(error)
    }
  }
    return(
        <div name="Contact us" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
            <form className="bg-slate-200 w-96 px-8 py-6 rounded-xl">
                <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
                <div className="flex flex-col mb-4">
                    <label className="block text-gray-700" htmlFor="name">Fullname</label>
                    <input {...register("name", { required: true })}className="mt-1 bg-white block border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" 
                    type="text" 
                    id="name"
                    name="name" 
                    placeholder="Enter your fullname" />
                    {errors.name && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="flex flex-col mb-4">
                    <label className="block text-gray-700" htmlFor="email">Email</label>
                    <input {...register("email", { required: true })} className="mt-1 bg-white block border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder="Enter your email address" />
                    {errors.email && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="flex flex-col mb-4">
                    <label className="block text-gray-700" htmlFor="message">Message</label>
                    <textarea {...register("message", { required: true })} className="mt-1 bg-white block border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"  
                    id="message"
                    name="message"
                    placeholder="Enter your message" ></textarea>
                          {errors.message && <span className="text-red-500">This field is required</span>}
                </div>
                <button type="button" onClick={handleSubmit(onSubmit)} value="submit" className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-500 duration-300 cursor-pointer ">Send</button>
            </form>
        </div>
        </div>
    )
}