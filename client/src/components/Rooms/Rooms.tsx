import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaBed, FaRulerCombined } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const FaBedIcon = FaBed as unknown as React.FC<{
  className?: string
  color?: string
  fill?: string
}>

const FaRulerCombinedIcon = FaRulerCombined as unknown as React.FC<{
  className?: string
  color?: string
  fill?: string
}>

type Room = {
  _id: string
  name: string
  type: 'standard' | 'suite'
  image: string
  price: number
  description: string
  size: number
  bed: number
}

function toSlug(str: string) {
  return str.toLowerCase().replace(/\s+/g, '-')
}

export const Rooms: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([])
  const [filter, setFilter] = useState<'standard' | 'suite'>('standard')

  useEffect(() => {
    const fetchRooms = async () => {
      const res = await axios.get('https://anara-hotel.onrender.com/api/rooms')
      setRooms(res.data)
    }
    fetchRooms()
  }, [])

  const filteredRooms = rooms.filter((room) => room.type === filter)

  return (
    <div className="px-6 py-64 ">
      <div className="flex gap-8 mb-8 justify-center border-b border-gray-200">
        {['standard', 'suite'].map((type) => (
          <div
            key={type}
            onClick={() => setFilter(type as 'standard' | 'suite')}
            className={`cursor-pointer pb-2 px-1 font-bold capitalize relative font-crimsonBold text-xl
          ${
            filter === type
              ? 'text-[#7C4A27] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#7C4A27]'
              : 'text-gray-600'
          }
        `}
          >
            {type}
          </div>
        ))}
      </div>

      <div
        className="
          justify-center gap-14 py-8 
          xs:grid xs:gap-4 xs:justify-center
          sm:grid sm:gap-6 sm:justify-center
          lg:flex lg:justify-center lg:gap-6 
        "
      >
        {filteredRooms.map((room) => (
          <Link to={`/rooms/${toSlug(room.name)}`}>
            <div
              key={room._id}
              className="border rounded shadow bg-translucentBeige overflow-hidden w-full max-w-[500px] h-[600px] cursor-pointer hover:-translate-y-2 transition-transform"
            >
              <div className="relative">
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-[400px] w-full object-cover"
                />
                <div
                  className="
               absolute bottom-3 left-1/2 -translate-x-1/2
               bg-white text-black text-sm px-4 py-4 rounded-full
               font-bold font-PlayfairDisplayRegular
               transition-transform duration-200 ease-in-out
               hover:scale-105 active:scale-100
             "
                >
                  {room.price} / Night
                </div>
              </div>

              <div className="p-8 text-center">
                <h3 className="text-xl font-semibold text-mediumGray mb-4">
                  {room.name}
                </h3>
                <p className="text-md text-softGray line-clamp-2 font-crimson">
                  {room.description}
                </p>

                <div className="flex justify-center items-center gap-8 mt-6 text-sm text-custom-beige">
                  <div className="flex items-center gap-[5px] font-oswald text-mediumGray">
                    <FaBedIcon className="w-6 h-6 text-mediumGray" />
                    <i className="fas fa-users font-bold text-mediumGray"></i>
                    {room.bed}
                  </div>
                  <div className="flex items-center gap-[5px] font-oswald text-mediumGray">
                    <FaRulerCombinedIcon className="w-4 h-4 text-mediumGray" />
                    <i className="fas fa-ruler-combined font-bold "></i>
                    {room.size}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Rooms
