import React, { useState, useRef, useEffect } from 'react'

const GuestsSelector: React.FC = () => {
  const [guestCount, setGuestCount] = useState<number>(1)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="self-end ml-[15px] w-50 font-crimsonBold" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border px-4 py-2 rounded text-left bg-white"
      >
        Guests: {guestCount}
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-50 max-h-40 overflow-y-auto border bg-white rounded shadow">
          {Array.from({ length: 9 }, (_, i) => (
            <div
              key={i}
              className={`px-4 py-2 cursor-pointer hover:bg-blue-100 ${
                guestCount === i + 1 ? 'bg-blue-200 font-bold' : ''
              }`}
              onClick={() => {
                setGuestCount(i + 1)
                setIsOpen(false)
              }}
            >
              {i + 1} {i === 0 ? 'guest' : 'guests'}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default GuestsSelector
