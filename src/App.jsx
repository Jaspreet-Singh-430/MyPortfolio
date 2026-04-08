import React from "react"
import Navbar from "./components/navbar.jsx"
import Home from "./components/home.jsx"
import About from "./components/about.jsx" 
import Portfolio from "./components/portfolio.jsx"
import Footer from './components/footer.jsx'
import Contact from "./components/contact.jsx"
import Experience from "./components/experience.jsx"
export default function App() {
  return(
    <div className="bg-dark">
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Experience/>
    <Contact/>
    <Footer/>
    {/* <div className="text-pink-500 font-bold">Hello</div> */}
    </div>
  )
}