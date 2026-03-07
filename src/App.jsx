import React from "react"
import Navbar from "./components/navbar.jsx"
import Home from "./components/home.jsx"
import About from "./components/about.jsx" 
import Footer from './components/footer.jsx'
export default function App() {
  return(
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Footer/>
    {/* <div className="text-pink-500 font-bold">Hello</div> */}
    </>
  )
}