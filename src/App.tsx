import React from 'react'
import './App.css'
import WorldMap from "./components/designed/worldmap"
import NewsHighlights from './components/designed/newshighlights'
import Footer from './components/designed/footer'
import HeaderBannerCarousel from './components/designed/headerbannercracousel'

 export default function  App() {
 return(
  <div className='min-h-screen max-w-5xl mx-auto  m-0  px-0'>
    {/* <Header/>
    <Banner/> */}
    {/* <HeaderBannerCarousel2/> */}

    <HeaderBannerCarousel/>
    <WorldMap/>
    <NewsHighlights/>
    <Footer/>
  </div>
 );
}

// function Header() {
// return (
// <header className=" top-0.5 m-0 pt-0 z-50 backdrop-blur bg-white/70 border-b">
// <div className="max-w-7xl mx-auto px-4 pt-0 pb-3 flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <img src="/logo.png" alt="Colouring Cities logo"  />
//           <span className="font-semibold">Colouring Cities</span>
//         </div>
// <nav className="hidden md:flex items-center gap-6 text-sm">
// <a href="#map" className="hover:underline">Network map</a>
// <a href="#news" className="hover:underline">News</a>
// <a href="#about" className="hover:underline">About</a>
// </nav>
// <div className="flex items-center gap-2">
// <Input placeholder="Search cities…" className="w-40 md:w-64" />
// <Button asChild>
// <a href="#get-started">Get started</a>
// </Button>
// </div>
// </div>
// </header>
// );
// }

