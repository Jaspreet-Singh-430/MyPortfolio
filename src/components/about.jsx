import React from "react"
export default function About() {
    return(
        <>
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
            <div>
            <h1 className="text-3xl font-bold mb-5">About</h1>
            <p>Hello I'm Jaspreet Singh, a passionate web developer with a keen eye for MERN stack. With a
                background in IT, I strive to create impactful and visually good Software solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mt-3">
                    <h4 className="font-semibold mb-2">Name :&nbsp; 
                    <span className="font-thin">Jaspreet Singh</span>
                    </h4>
                    <h4 className="font-semibold mb-2">Email:&nbsp; 
                        <span className="font-thin">jaspreet9322@gmail.com</span>
                    </h4>
                    <h4 className="font-semibold mb-2">Mobile no :&nbsp;
                    <span className="font-thin">(+91) 951 863 6525</span>
                    </h4>
                </div>
                <div className="mt-3">
                    <h4 className="font-semibold mb-2">Age:&nbsp;
                        <span className='font-thin'>25</span>
                    </h4>
                    <h4 className="font-semibold mb-2">Experience:&nbsp;
                        <span className="font-thin">&lt;1 year</span>
                    </h4>
                    <h4 className="font-semibold mb-2">Location:&nbsp;
                    <span className='font-thin'>Yamunanagar 135001,Haryana</span>
                    </h4>
                </div>
            </div>
            <br/>
            <h1 className="text-blue-500 font-semibold text-xl mb-1">Education and Training</h1>
            <p>Master of Computer Applications from Maharaja Agrasen Institute of Mgt and Tech, 2025.</p>
            <p>Certified by Next Algorithms Web Development course, 2023.</p><br/>
            <h1 className="text-blue-500 font-semibold text-xl mb-1">Professional Experience</h1>
            <p>Software Developer Executive Intern ,Virtualize Technologies, Mohali, Punjab (jan 2026 - apr 2026). Developed canvas based,2D and 3D games in unity and deployed their builds for web platforms support.</p><br/>
            <h1 className="text-blue-500 font-semibold text-xl mb-1">Achievements and Awards</h1>
            <p>Won 3rd prize in Coding Hustle competition by Maharaja Agrasen Institute of Mgt and Tech.</p><br/>
            <h1 className="text-blue-500 font-semibold text-xl mb-1">Mission Statement</h1>
            <p>My mission is to leverage my skills and creativity to deliver and implement innovative web solutions by using popular frameworks and libraries in order to meet the requirements of digital world. I am commited to continuous learning and growth, always seeking new challenges and opportunities
                to expand my horizons.
            </p>
            </div>
        </div>
        </>
    )
}