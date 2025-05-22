import React from 'react'

export default function Services() {
  return (
    <div className="mt-[200px] px-4">
      {/* Header */}
      <div className="flex justify-center mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-center font-crimsonBold text-black opacity-[0.6] font-crimson">
          Our Services For You
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-stretch justify-center">
        <div className="w-full md:w-1/2 max-w-[700px] overflow-hidden">
          <img
            src="/images/room1.jpg"
            alt="Room of Anara hotel"
            className="w-full h-full aspect-[4/3] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          />
        </div>

        <div className="w-full md:w-1/2 max-w-[700px] p-8 md:p-10 shadow-md flex flex-col justify-center bg-white">
          <h2 className="text-2xl font-bold text-center mb-6 font-crimson opacity-[0.8] text-black">
            Rooms
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-justify tracking-wide font-raleway text-black">
            <span className="font-bold">Anara Hotel </span> offers a total of 39
            elegantly designed rooms built to meet European standards. Our
            spacious, bright accommodations feature luxurious mattresses and
            modern, fully equipped bathrooms, crafted with top-quality materials
            and offering a private entrance. Each room is outfitted with premium
            amenities and facilities to ensure you enjoy a truly relaxing and
            care-free stay. You’ll find a walk-in shower, a flat-screen TV with
            satellite channels, a coffee/tea maker, and a secure safe. Anara
            Hotel also provides cozy bathrobes, comfortable slippers, and a
            variety of other thoughtful touches to elevate your experience.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-stretch justify-center">
        <div className="w-full md:w-1/2 max-w-[700px] p-8 md:p-10 shadow-md flex flex-col justify-center bg-white">
          <h2 className="text-2xl font-bold text-center mb-6 font-crimson opacity-[0.8] text-black">
            Terrace
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-justify tracking-wide font-raleway text-black">
            <span className="font-bold ">Anara Café Terrace</span> offers a
            serene and stylish outdoor space to enjoy your favorite beverages
            and dishes. With beautiful views and a relaxing atmosphere, it's the
            perfect place to unwind, sip on fresh coffee, and enjoy delicious
            meals in the open air.
          </p>
        </div>

        <div className="w-full md:w-1/2 max-w-[700px] overflow-hidden max-h-[400px]">
          <img
            src="/images/terrace.jfif"
            alt="Terrace of Anara hotel"
            className="w-full h-full object-cover aspect-[4/3] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-stretch justify-center">
        <div className="w-full md:w-1/2 max-w-[700px] overflow-hidden max-h-[400px]">
          <img
            src="/images/pool.jfif"
            alt="Pool of Anara hotel"
            className="w-full h-full object-cover aspect-[4/3] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          />
        </div>

        <div className="w-full md:w-1/2 max-w-[700px] p-8 md:p-10 shadow-md flex flex-col justify-center bg-white">
          <h2 className="text-2xl font-bold text-center mb-6 font-crimson opacity-[0.8] text-black font-crimson">
            Pool
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-justify tracking-wide font-ptSerif text-black font-raleway">
            The hotel’s pool is the perfect place to relax and refresh.
            Surrounded by a peaceful atmosphere, the outdoor area offers a calm
            escape where guests can swim, sunbathe, or simply unwind. Whether
            it's a morning swim or a sunset dip, the experience is designed for
            total comfort and tranquility.
          </p>
        </div>
      </div>
    </div>
  )
}
