import React from 'react'
import { Link } from "react-router-dom"
import brand from "../assets/Brand.png"

function Navigation() {
  return (
    <nav className="bg-white-500 flex py-5 items-center">
      <div className='flex-1 flex gap-10'>
        <Link to={"/"}>
          <img style={{ maxWidth: "200px" }} src={brand} alt="Logo" />
        </Link>
      </div>
      <div className="flex flex-1 justify-evenly">
        <Link to={""}>Home</Link>
        <Link to={""}>Services</Link>
        <Link to={""}>Portfolio</Link>
        <Link to={""}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navigation