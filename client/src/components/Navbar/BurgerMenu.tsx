import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../Header/HeaderNavigation/Navigation'

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      {!isOpen && (
        <button onClick={() => setIsOpen(true)}>
          <Menu size={28} className="text-white opacity-90 z-[10000]" />
        </button>
      )}

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8 z-[999]">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white z-[10000]"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>

          {/* Nav Links */}
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="text-white text-xl font-oswald"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default BurgerMenu
