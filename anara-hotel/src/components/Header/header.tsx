import React from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from './HeaderNavigation/Navigation'

export default function Header() {
  return (
    <div className="absolute z-[1000] flex flex-col items-center justify-center w-full mt-[50px]">
      <div className="center">
        <h1 className="text-white text-center">ANARA</h1>
      </div>
      <nav>
        <ul className="flex mt-[20px] space-x-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link className="text-white" to={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
