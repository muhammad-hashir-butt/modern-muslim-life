import React from 'react'
import Navbar from './components/Navbar'
import Home from './Components/Home'   // ❌ ERROR HERE
import Footer from './components/Footer'


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