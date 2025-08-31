// import React from 'react'

// export default function Header() {
//   return (
//     <div>
      
//     </div>
//   )
// }
import About from "./about.jsx";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from "react-router-dom"; // <-- since you're using React Router, not Next.js

import React from 'react'

 



export default function Header() {
  return (
    <Navbar fluid rounded className="px-4 py-3 shadow-md">
      <NavbarBrand as={Link} to="/">
        <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </NavbarBrand>

      <div className="flex space-x-6">
        <NavbarLink as={Link} to="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} to="/About" >
          Cards
        </NavbarLink>
        <NavbarLink as={Link} to="/services">
          Prices
        </NavbarLink>
      </div>
    </Navbar>

    
  )
}