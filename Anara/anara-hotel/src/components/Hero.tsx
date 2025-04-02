import React from 'react'

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src="../hotel-video2.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <h1 className="text-white text-4xl font-bold">Welcome to Our Hotel</h1>
      </div>
    </div>
  )
}

export default Hero
