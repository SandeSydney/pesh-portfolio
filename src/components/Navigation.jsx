import React from 'react'
import { Link } from "react-router-dom"
import brand from "../assets/Brand.png"

function Navigation() {
  return (
    <nav className="relative border-b-2 flex py-5 items-center">
      <div className='flex-1 flex gap-10'>
        <Link to={"/"}>
          <img className='mx-3 w-1/3' src={brand} alt="Logo" />
        </Link>
      </div>
      <div className="hidden md:flex flex-1 justify-evenly">
        <Link to={""} className={"hover:text-[#ee2328] hover:underline hover:underline-offset-8"}>
          Home
        </Link>
        <Link to={""} className={"hover:text-[#ee2328] hover:underline hover:underline-offset-8"}>
          Services
        </Link>
        <Link to={""} className={"hover:text-[#ee2328] hover:underline hover:underline-offset-8"}>
          Portfolio
        </Link>
        <Link to={""} className={"hover:text-[#ee2328] hover:underline hover:underline-offset-8"}>
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navigation