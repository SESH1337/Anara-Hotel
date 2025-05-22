import React from 'react'
import ChildrenSelector from '../components/CheckRate/ChildrenSelector'
import Services from '../components/Services/Services'

export default function HomePage() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-[0.6] bg-black bg-fixed"
        style={{
          backgroundImage: "url('/images/bg.jpg')",
        }}
      ></div>

      <div className="relative z-10">
        <ChildrenSelector />
        <Services />
      </div>
    </div>
  )
}
