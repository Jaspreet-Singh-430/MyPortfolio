import React,{useState} from "react"
import { Link } from "react-scroll"
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import pic from "../../public/Firefly.jpg";
export default function Navbar() {
    const [menu,setMenu]=useState(false)
    const navItems=[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Projects"
        },
        {
            id:4,
            text:"Skills"
        },
        {
            id:5,
            text:"Contact us"
        }
    ]
    console.log(navItems)
return(
    <>
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-20 shadow-md bg-white z-5 fixed top-0 right-0 left-0">
    <div className="flex justify-between h-20 items-center">
        <div className="flex space-x-5">
            <img src={pic} alt="" className="h-14 w-14 rounded-full"/>
            <div>
            <h1 className="text-xl font-semibold cursor-pointer">Jaspreet Singh</h1>
            <p>Web Developer</p>
            </div>
        </div>
        <div>
            <ul className=" hidden md:flex space-x-8 ">
                {
                    navItems.map(({id,text})=>(
                    <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>
                        <Link to={text}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass="active">{text}</Link>
                        </li>
                    ))
                }
            </ul>
            <div onClick={()=>setMenu(!menu)} className="md:hidden">{menu?<IoMdClose size={28}/>:<MdMenu size={28}/>}</div>
        </div>
    </div>
    {
        menu && (
    <div className="bg-white">
        <ul className="md:hidden flex flex-col items-center justify-center h-screen space-y-4">
            {navItems.map(({id,text})=>(
                <li className="font-semibold text-xl hover:scale-105 duration-200 cursor-pointer" key={id}>
                    <Link onClick={()=>setMenu(!menu)} to={text}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass="active">{text}</Link>
                </li>
                ))}
        </ul>
    </div>
        )
    }
    </div>
    </>
)
}