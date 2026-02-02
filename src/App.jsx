import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './Components/Home.jsx' 
import Footer from './components/Footer.jsx'


export default function App(){
return (
<div className="min-h-screen flex flex-col bg-white text-gray-900">
<Navbar />
<main className="flex-1">
<Home />
</main>
<Footer />
</div>
)
}