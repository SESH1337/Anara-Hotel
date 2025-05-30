import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FaCalendarAlt } from 'react-icons/fa'
import type { SVGProps } from 'react'

const CalendarIcon = FaCalendarAlt as unknown as React.FC<{
  className?: string
  color?: string
  fill?: string
}>

const DateSelector: React.FC = () => {
  const today = new Date()
  const [startDate, setStartDate] = useState<Date | null>(today)
  const [endDate, setEndDate] = useState<Date | null>(null)

  {
    console.log(startDate)
  }
  return (
    <div className="flex flex-col gap-4 font-crimsonBold">
      <h2 className="text-lg font-bold font-ptSerif">
        Your stay: {startDate?.toLocaleDateString() || 'Start date'} to{' '}
        {endDate?.toLocaleDateString() || 'End date'}
      </h2>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Start Date Picker */}
        <div className="w-full relative">
          <label className="font-medium mb-1 block font-crimsonBold">
            Start Date
          </label>
          <div className="relative">
            <DatePicker
              selected={startDate}
              onChange={(date: Date | null) => {
                setStartDate(date)
                if (endDate && date && date > endDate) {
                  setEndDate(null)
                }
              }}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={today}
              placeholderText="Select start date"
              dateFormat="dd MMM yyyy"
              className="pl-10 pr-4 pt-[0.7rem] pb-2 border rounded w-full focus:outline-none"
            />
            <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400 fill-current z-[1000]" />
          </div>
        </div>

        {/* End Date Picker */}
        <div className="w-full relative">
          <label className="font-medium mb-1 block font-crimsonBold">
            End Date
          </label>
          <div className="relative sm:d-block">
            <DatePicker
              selected={endDate}
              onChange={(date: Date | null) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate || today}
              placeholderText="Select end date"
              dateFormat="dd MMM yyyy"
              className="pl-10 pr-4 pt-[0.7rem] pb-2 border rounded w-full focus:outline-none"
            />
            <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400 fill-current z-[1000]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DateSelector
