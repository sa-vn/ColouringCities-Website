

import React from "react"
export default function Footer() {
  const universities = [
   { id: 1, name: "Alan Turing Institute", logo: "/logo/Alan_Turing_Institute_logo.png" },
    { id: 2, name: "Concordia University", logo: "/logo/Université_Concordia_logo.png" },
    { id: 3, name: "University of Oxford", logo: "/logo/University_of_Oxford.png" },
   
    
  ]

  return (
    <footer className="bg-gray-100 border-t mt-0 py-0">
      <div className="w-full  px-6 py-12 grid md:grid-cols-3 gap-10">
        
        {/* Left: About */}
        <div>
          <h3 className="font-semibold text-1xl mb-3">About</h3>
          <p className="text-sm text-gray-600">
            The Colouring Cities Research Programme (CCRP) is a global academic consortium creating open, reproducible
            urban data platforms for research and public good.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h3 className="font-semibold text-1xl mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="#resources" className="hover:underline">Resources</a></li>
            <li><a href="#community" className="hover:underline">Community</a></li>
            <li><a href="#docs" className="hover:underline">Documentation</a></li>
          </ul>
        </div>

        {/* Right: University Logos */}
        <div>
          <h3 className="font-semibold text-1xl mb-3">our Partners</h3>
          <div className="flex flex-wrap items-center gap-6">
            {universities.map((uni) => (
              <img
                key={uni.id}
                src={uni.logo}
                alt={uni.name}
                className="h-10 object-contain grayscale hover:grayscale-0 transition text-sm"
                title={uni.name}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Colouring Cities Research Programme. All rights reserved.
      </div>
    </footer>
  )
}
