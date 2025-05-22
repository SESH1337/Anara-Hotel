import React from 'react'

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-auto">
      <div className="relative w-full aspect-[16/9]">
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src="/hotel-video2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <h1 className="hidden md:flex  text-white text-md md:text-lg xl:text-[30px] font-bold font-crimsonBold animate-fade-up-deep">
            Welcome to Our Hotel
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
