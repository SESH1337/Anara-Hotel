import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

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

export default function RoomDetailsPage() {
  const { slug } = useParams()
  const [room, setRoom] = useState<Room | null>(null)

  useEffect(() => {
    const fetchRoom = async () => {
      const res = await axios.get(`http://localhost:5000/api/rooms`)
      const allRooms = res.data as Room[]
      const foundRoom = allRooms.find((r) => toSlug(r.name) === slug)
      setRoom(foundRoom || null)
    }

    fetchRoom()
  }, [slug])

  if (!room) {
    return <div className="text-center py-22">Room not found</div>
  }

  return (
    <div className="container mx-auto py-24">
      <h1 className="text-3xl font-bold mb-4 font-ptSerif">{room.name}</h1>
      <img
        src={room.image}
        alt={room.name}
        className="w-full h-[400px] object-cover mb-6"
      />
      <p className="text-lg mb-4 font-raleway">{room.description}</p>
      <ul className="space-y-2 text-md font-ptSerif">
        <li>
          <strong>Type:</strong> {room.type}
        </li>
        <li>
          <strong>Size:</strong> {room.size} m²
        </li>
        <li>
          <strong>Capacity:</strong> {room.capacity} Adult(s), {room.bed}{' '}
          Child(ren)
        </li>
        <li>
          <strong>Price:</strong> {room.price}₾
        </li>
      </ul>
    </div>
  )
}

function toSlug(str: string) {
  return str.toLowerCase().replace(/\s+/g, '-')
}
