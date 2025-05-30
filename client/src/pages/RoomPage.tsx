import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Rooms from '../components/Rooms/Rooms'

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
    <div className="container mx-auto bg-beigeBackground">
      <div className="flex justify-center items-center space-x-4 py-28">
        <h1 className="text-[35px] font-bold text-center font-crimson">
          Booking Rooms
        </h1>
        <img className="w-[44px] h-[44px]" src="../room-air.png" alt="" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-8 py-28 items-stretch">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="max-w-[450px] bg-white border border-black flex flex-col h-full"
          >
            <img
              className="h-[300px] w-full object-cover"
              src={room.image}
              alt={room.name}
            />
            <div className="w-full p-8 flex flex-col justify-between flex-1">
              <div>
                <p className="font-semibold pb-4">{room.name}</p>
                <p className="text-sm text-gray-700">{room.description}</p>
                <div className="flex items-center space-x-4 py-2">
                  <img className="w-6 h-6" src="../person.png" alt="person" />
                  <h3 className="text-sm">
                    {`${room.capacity} Adult${
                      room.capacity > 1 ? 's' : ''
                    } and ${room.bed} Child${room.bed > 1 ? 'ren' : ''}`}
                  </h3>
                </div>
              </div>
              <button className="mt-6 border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
                BOOK NOW {room.price}₾
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
