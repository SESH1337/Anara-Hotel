import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from './HeaderNavigation/Navigation'
import BurgerMenu from '../Navbar/BurgerMenu'

export default function Header() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div
      className={`${
        isHomePage ? 'absolute z-[1000] bg-transparent' : 'relative bg-black'
      } flex flex-col items-center justify-center w-full p-[50px]`}
    >
      <div className="center flex items-center justify-center w-full relative px-0 md:px-8">
        <Link to={'/'}>
          <h1 className="text-[40px] font-boldonse text-transparent bg-clip-text animate-rainbow">
            ANARA
          </h1>
        </Link>

        <div className="hidden md:flex absolute right-8 flex items-center space-x-2">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-[30px] h-[30px]"
              src="../icons/instagram.png"
              alt="instagram_icon"
            />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-[30px] h-[30px]"
              src="../icons/facebook.png"
              alt="facebook_icon"
            />
          </a>

          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-[30px] h-[30px]"
              src="../icons/twitter.png"
              alt="twitter_png"
            />
          </a>
        </div>

        {/* Mobile Burger */}
        <div className="flex justify-end w-full md:hidden">
          <BurgerMenu />
        </div>
      </div>

      <nav className="mt-[40px]">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-[18px]">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link className="text-white font-oswald" to={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
