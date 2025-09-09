import React from "react"
import { Search } from "lucide-react"
import { useEffect, useState } from "react"

const SLIDES = [
  {
    image: "/banner/indonesia-map.png",
    title: "Open, Collaborative Data on the World’s Buildings",
    subtitle:
      "The Colouring Cities Research Programme (CCRP) is a global academic consortium creating open, reproducible urban data platforms for research and public good.",
  },
  {
    image: "/banner/ger.png",
    title: "Colouring Cities: Collaborative Urban Knowledge",
    subtitle:
      "Building free, open datasets to help cities become more sustainable, resilient, and inclusive.",
  },
  {
    image: "/banner/Aust.png",
    title: "Join the Global Network of City Platforms",
    subtitle:
      "Connect with researchers, cities, and communities working on open urban data.",
  },
]


export default function HeaderBannerCarousel() {
  const [index, setIndex] = useState(0)

  // Auto-play every 5 seconds
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      5000
    )
    return () => clearInterval(interval)
  }, [])

  const slide = SLIDES[index]

  return (
    <div>
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between  py-4  px-0 ">
          {/* Logo */}
          <div className="flex items-center gap-2  p-0 px-0">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            <span className="font-bold text-lg">Colouring Cities</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm  text-gray-700 font-bold  pr-0 ">
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
            <a href="#news" className="hover:text-blue-600">
              News
            </a>
             <a href="#map" className="hover:text-blue-600">
              GlobalHubs
            </a>
           <a href="#contact" className="hover:text-blue-600">
              GitHub
            </a>
               <a href="#contact" className="hover:text-blue-600">
              Researchers
            </a>
               <a href="#contact" className="hover:text-blue-600">
              PlatformLinks
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center  p-0 m-0  gap-1 ml-3">
             <input
          type="text"
          placeholder="Search in site..."
          className="outline-none text-sm text-gray-700 w-40 md:w-40 border rounded p-2 pb-0.5 py-1 m-0"
        />
            <Search className="h-5 w-5 text-gray-600 cursor-pointer " />
            
            {/* <Menu className="h-6 w-6 text-gray-600 md:hidden cursor-pointer" /> */}
          </div>
        </div>
      </header>

      {/* BANNER (Carousel) */}
      <section className="relative bg-gray-900 text-white 2xl:h-[70vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-1xl font-bold mb-6 leading-tight">
            {slide.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            {slide.subtitle}
          </p>
          <a
            href="#get-started"
            className="inline-block px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition font-medium"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  )
}
