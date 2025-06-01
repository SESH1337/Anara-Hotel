import React from 'react'
import {
  FaBed,
  FaUtensils,
  FaSpa,
  FaSwimmer,
  FaWifi,
  FaParking,
} from 'react-icons/fa'

const FaBedIcon = FaBed as unknown as React.FC<{
  className?: string
  color?: string
  fill?: string
}>

const FaUtensilsIcon = FaUtensils as unknown as React.FC<{
  className?: string
  color?: string
  fill?: string
}>

const FaSwimmerIcon = FaSwimmer as unknown as React.FC<{
  className?: string
  color?: string
  fill?: string
}>

const FaSpaIcon = FaSpa as unknown as React.FC<{
  className?: string
  color?: string
  fill?: string
}>

const FaWifiIcon = FaWifi as unknown as React.FC<{
  className?: string
  color?: string
  fill?: string
}>

const FaParkingIcon = FaParking as unknown as React.FC<{
  className?: string
  color?: string
  fill?: string
}>

const iconStyle = 'text-4xl text-[#7C4A27] mb-4'

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 font-crimson">
      <h1 className="text-4xl font-bold text-center mb-16">Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* Accommodation */}
        <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <FaBedIcon className={iconStyle} />
          <h3 className="text-xl font-semibold mb-2">Accommodation</h3>
          <p className="font-raleway">
            Experience luxurious rooms and suites featuring modern design, plush
            bedding, and breathtaking city views — your private sanctuary in the
            heart of the city.
          </p>
        </div>

        {/* Dining */}
        <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <FaUtensilsIcon className={iconStyle} />
          <h3 className="text-xl font-semibold mb-2">Dining</h3>
          <p className="font-raleway">
            Savor gourmet cuisine at our on-site restaurant, offering a fusion
            of local and international flavors. Room service is also available
            24/7 for your convenience.
          </p>
        </div>

        {/* Spa & Wellness */}
        <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <FaSpaIcon className={iconStyle} />
          <h3 className="text-xl font-semibold mb-2">Spa & Wellness</h3>
          <p className="font-raleway">
            Relax and recharge at our full-service spa. Enjoy a range of
            treatments, a modern fitness center, and wellness programs tailored
            for mind and body balance.
          </p>
        </div>

        {/* Pool & Recreation */}
        <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <FaSwimmerIcon className={iconStyle} />
          <h3 className="text-xl font-semibold mb-2">Pool & Recreation</h3>
          <p className="font-raleway">
            Unwind by our outdoor swimming pool or take a refreshing dip.
            Families and solo travelers alike can enjoy moments of relaxation
            and fun.
          </p>
        </div>

        {/* Free High-Speed Wi-Fi */}
        <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <FaWifiIcon className={iconStyle} />
          <h3 className="text-xl font-semibold mb-2">Free High-Speed Wi-Fi</h3>
          <p className="font-raleway">
            Stay connected throughout the hotel with complimentary high-speed
            internet — whether for work, streaming, or sharing your travel
            moments.
          </p>
        </div>

        {/* Parking & Airport Transfers */}
        <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <FaParkingIcon className={iconStyle} />
          <h3 className="text-xl font-semibold mb-2">
            Parking & Airport Transfers
          </h3>
          <p className="font-raleway">
            We offer secure on-site parking and reliable airport pickup and
            drop-off services to make your journey smooth from start to finish.
          </p>
        </div>
      </div>
    </div>
  )
}
