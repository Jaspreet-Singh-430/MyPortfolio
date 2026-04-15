
import html from '../assets/html.png'
import css from '../assets/css.jpg'
import js from '../assets/javascript.png'
import react from '../assets/reactjs.png'  
import node from '../assets/node.png'
import express from '../assets/express.png'
import mongodb from '../assets/mongodb.jpg'
import unity from  '../assets/unity.png'
import FruitNinja from '../assets/FruitNinja.png'
import Endless from '../assets/Endless.png'
import RockPaperScissor from '../assets/RockPaperScissor.png'
import zegocloud from '../assets/zegocloud.png'
import ShoppingCart from '../assets/ShoppingCart.png'
import grocery from '../assets/grocery.png'
import Bookstore from '../assets/Bookstore.png'
import NoteTaker from '../assets/NoteTaker.png'
import toast from 'react-hot-toast'
const portfolio = () => {
    const cardItems = [
        {
            id:1,
            title:"Book Store",
            image:Bookstore,
            description:" Allows users to browse, search, and manage books online. It typically includes: book listings, search functionality, user accounts, and a shopping cart.",
            liveDemoLink:"",
            sourceCodeLink:"https://github.com/Jaspreet-Singh-430/BookStoreMERNApp"
        },
        {
            id:2,
            title:"Grocery app",
            image:grocery,
            description:" A simple grocery shopping app that allows users to add items to their cart and checkout.",
            liveDemoLink:"",
            sourceCodeLink:"https://github.com/Jaspreet-Singh-430/GroceryApp"
        },
        {
            id:3,
            title:"Shopping Cart",
            image:ShoppingCart,
            description:" A shopping cart application that allows users to add items to their cart and checkout.",
            liveDemoLink:"https://react-shopping-cart-theta-livid.vercel.app/",
            sourceCodeLink:"https://github.com/Jaspreet-Singh-430/React-ShoppingCart"
        },
        {
            id:4,
            title:"ZegoCloud Video Conferencing app",
            image:zegocloud,
            description:" A video conferencing app that allows users to join a video call and chat with other participants.",
            liveDemoLink:"https://zego-cloud-video-call-app-mu.vercel.app/",
            sourceCodeLink:"https://github.com/Jaspreet-Singh-430/ZegoCloudVideoCallApp"
        },
        {
            id:5,
            title:"Fruit Ninja Light",
            image:FruitNinja,
            description:" A simple version of the popular mobile game Fruit Ninja, where players slice fruits while avoiding bombs.",
            liveDemoLink:"https://jaspreet-singh-430.github.io/My-Unity-Games/",
            sourceCodeLink:"https://github.com/Jaspreet-Singh-430/My-Unity-Games/tree/FruitNinjaLight"
        },
        {
            id:6,
            title:"Endless Runner",
            image:Endless,
            description:" A simple endless runner game where players control a character to run and jump over obstacles.",
            liveDemoLink:"https://jaspreet-singh-430.github.io/EndlessRunner/",
            sourceCodeLink:"https://github.com/Jaspreet-Singh-430/EndlessRunner/tree/endRun"
        },
        {
            id:7,
            title:"Rock Paper Scissor",
            image:RockPaperScissor,
            description:" A simple implementation of the classic game Rock Paper Scissor, where players choose one of the three options and compete against the computer.",
            liveDemoLink:"https://jaspreet-singh-430.github.io/RockPaperScissors/",
            sourceCodeLink:"https://github.com/Jaspreet-Singh-430/RockPaperScissors/tree/rpss"
        },
        {
            id:8,
            title:"Note Taker",
            image:NoteTaker,
            description:" A simple note-taking app that allows users to create, edit, and delete notes.",
            liveDemoLink:"https://note-taking-app-tan-ten.vercel.app/",
            sourceCodeLink:"https://github.com/Jaspreet-Singh-430/NoteTakingApp"

        }
        
    ]
    const ShowWarning=(e, liveDemoLink)=>{
        if(!liveDemoLink){
            e.preventDefault();
            toast('Live demo link is not available for this project. Will update soon!',
  {
    icon: '⚠️',
    style: {
      borderRadius: '5px',
      background: '#333',
      color: '#fff',
    },
  }
);
            
            }
            
        } 
    
  return (
    <div name="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
        <div>
            <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
            <span className='underline font-semibold'>Featured Projects</span>
            <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-8 my-5'>

            
            {
                cardItems.map(({id,title,image,description,sourceCodeLink,liveDemoLink})=>{
                    return (
                        <div key={id} className="flex flex-col justify-between lg:w-[280px] border-[2px] h-auto border-gray-300 rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
                            <img src={image} alt={title} className="w-full h-[200px] p-1 rounded-lg" />
                            <div className=''>
                                <div className='font-bold text-xl mb-2 px-2'>{title}</div>
                                <p className='px-2 text-gray-700'>{description}</p>
                            </div>
                            <div className='flex justify-around px-6 py-4 space-x-3'>
                                <a onClick={(e)=>ShowWarning(e, liveDemoLink)} href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 py-2 rounded">Live Demo</a>
                                <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-700 text-white font-bold px-3 py-2 rounded">Source Code</a>
                            </div>
                            
                        </div>
                    )
                })
            }
            
            </div>
        </div>
    </div>
  )
}

export default portfolio
