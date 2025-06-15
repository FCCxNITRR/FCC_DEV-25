import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-[#0A0E17] shadow-sm px-10 py-7 flex items-center justify-between">
      {/* Logo and Name */}
      <Link to="/">
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="FCC Logo"
            className="h-10 w-10 object-contain"
          />
          <div className="text-left leading-tight">
            <h1 className="text-lg font-semibold text-white ">Finance and Consulting Club</h1>
            <p className="text-md text-gray-200">NIT Raipur</p>
          </div>
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="flex space-x-15 text-lg font-medium text-gray-100 pr-10">
        <Link to="/team" className="hover:text-blue-400">About Us</Link>
        <Link to="/events" className="hover:text-blue-400">Events</Link>
        <Link to="projects" className="hover:text-blue-400">Projects</Link>
        <Link to="/contact" className="hover:text-blue-400">Contact Us</Link>
        <Link to="/alumni" className="hover:text-blue-400">Alumni Corner</Link>
      </div>

      <div className="peer-checked:flex hidden flex-col space-y-4 px-8 pb-6 md:hidden text-lg font-medium">
        <Link to="/team" className="hover:text-blue-400">About Us</Link>
        <Link to="/events" className="hover:text-blue-400">Events</Link>
        <Link to="/projects" className="hover:text-blue-400">Projects</Link>
        <Link to="/contact" className="hover:text-blue-400">Contact Us</Link>
        <Link to="/alumni" className="hover:text-blue-400">Alumni Corner</Link>
      </div>

    </nav>
  )
}

export default Navbar
