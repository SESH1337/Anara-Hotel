import React, { useEffect, useState } from 'react'

type Room = {
  _id: string
  type: string
  name: string
  description: string
  capacity: number
  bed: string
  size: number | string
  price: string
  image: string
}

export default function RoomsList() {
  const [rooms, setRooms] = useState<Room[]>([])

  useEffect(() => {
    fetch('https://anara-hotel.onrender.com/api/rooms')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        return res.json()
      })
      .then((data) => setRooms(data))
      .catch((err) => console.error('Failed to fetch rooms:', err))
  }, [])

  return (
    <div className="bg-black font-ptSerif flex justify-center p-4 text-custom-beige">
      <h3>Copyright © Anara Hotel</h3>
    </div>
  )
}
