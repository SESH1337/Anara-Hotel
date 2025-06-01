import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Rooms from '../components/Rooms/Rooms'
import { Link } from 'react-router-dom'

type Room = {
  _id: string
  name: string
  type: 'standard' | 'suite'
  image: string
  price: number
  description: string
  size: number
  bed: number
  capacity: number | string
}

function toSlug(str: string) {
  return str.toLowerCase().replace(/\s+/g, '-')
}
export default function RoomPage() {
  const [rooms, setRooms] = useState<Room[]>([])

  useEffect(() => {
    const roomsData = async () => {
      const res = await axios.get('http://localhost:5000/api/rooms')
      setRooms(res.data)
    }
    roomsData()
  }, [])
  return (
    <div className="container mx-auto bg-wheat">
      <div className="flex justify-center items-center space-x-4 py-22 mt-28">
        <h1 className="text-[35px] font-bold text-center font-crimson">
          Booking Rooms
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-22 py-28 items-stretch">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="max-w-[450px] bg-white border border-black flex flex-col h-full"
          >
            {/* სურათი + hover effect */}
            <div className="relative group h-[300px] w-full overflow-hidden">
              <img
                className="h-full w-full object-cover group-hover:blur-sm transition duration-300"
                src={room.image}
                alt={room.name}
              />
              <Link to={`/rooms/${toSlug(room.name)}`}>
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="bg-black text-white px-4 py-2 font-semibold rounded shadow-md">
                    Details
                  </span>
                </button>
              </Link>
            </div>

            {/* ტექსტები და ღილაკი */}
            <div className="w-full p-8 flex flex-col justify-between flex-1">
              <div>
                <p className="font-semibold pb-4 font-ptSerif font-bolder">
                  {room.name}
                </p>
                <p className="text-sm text-gray-700 font-mono">
                  {room.description}
                </p>
                <div className="flex items-center space-x-4 py-4 font-ptSerif">
                  <img
                    className="w-6 h-6 text-black"
                    src="../person.png"
                    alt="person"
                  />
                  <h3 className="text-sm">
                    {`${room.capacity} Adult${
                      room.capacity > 1 ? 's' : ''
                    } and ${room.bed} Child${room.bed > 1 ? 'ren' : ''}`}
                  </h3>
                </div>
              </div>
              <Link to={`/rooms/${toSlug(room.name)}`}>
                <button className="mt-2 w-full border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors font-mono font-bold">
                  BOOK NOW {room.price}₾
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
