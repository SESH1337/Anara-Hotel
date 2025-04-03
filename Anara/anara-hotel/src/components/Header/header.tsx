import React from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from './HeaderNavigation/Navigation'

export default function Header() {
  return (
    <div className="absolute z-[1000] flex flex-col items-center justify-center w-full mt-[50px]">
      <div className="center flex items-center justify-center w-full relative px-8">
        <h1 className="text-[40px] font-boldonse text-transparent bg-clip-text animate-rainbow">
          ANARA
        </h1>

        <div className="absolute right-8 flex items-center space-x-2">
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
      </div>

      <nav>
        <ul className="flex mt-[40px] space-x-6 text-[18px]">
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
