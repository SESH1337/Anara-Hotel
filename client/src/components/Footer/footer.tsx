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
}

export default function RoomsList() {
  const [rooms, setRooms] = useState<Room[]>([])

  useEffect(() => {
    fetch('http://localhost:5000/api/rooms')
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
    <div>
      <h1>Rooms List</h1>
      {rooms.length === 0 ? (
        <p>No rooms found</p>
      ) : (
        rooms.map((room) => (
          <div
            key={room._id}
            style={{
              border: '1px solid #ccc',
              marginBottom: '10px',
              padding: '10px',
            }}
          >
            <h2>
              {room.name} ({room.type})
            </h2>
            <p>{room.description}</p>
            <p>Capacity: {room.capacity}</p>
            <p>Bed type: {room.bed}</p>
            <p>Size: {room.size} m²</p>
            <p>Price: {room.price}</p>
          </div>
        ))
      )}
    </div>
  )
}
