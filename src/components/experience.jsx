import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.jpg'
import js from '../assets/javascript.png'
import react from '../assets/reactjs.png'  
import node from '../assets/node.png'
import express from '../assets/express.png'
import mongodb from '../assets/mongodb.jpg'
import unity from  '../assets/unity.png'
const experience = () => {
    const cardItems = [
            {
                id:1,
                title:"HTML",
                image:html
            },
            {
                id:2,
                title:"CSS",
                image:css
            },
            {
                id:3,
                title:"JavaScript",
                image:js
            },
            {
                id:4,
                title:"ReactJS",
                image:react
            },
            {
                id:5,
                title:"NodeJS",
                image:node
            },
            {
                id:6,
                title:"ExpressJS",
                image:express
            },
            {
                id:7,
                title:"MongoDB",
                image:mongodb
            },
            {
                id:8,
                title:"Unity",
                image:unity
            }
        ]
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <div>
            <h1 className="text-3xl font-bold mb-5">Skills</h1>
            <p className=''>I have more than 9 months of experience in below technologies except unity(3 months).</p>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-5'>

            
            {
                cardItems.map(({id,title,image})=>{
                    return (
                        <div key={id} className="flex flex-col items-center md:w-[150px] md:h-[150px]justify-center rounded-full p-1 cursor-pointer hover:scale-110 duration-300">
                            <img src={image} alt={title} className="w-[150px] h-[150px] rounded-full " />
                            <div>
                                <div>{title}</div>
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

export default experience
