import React from 'react'
import CheckRate from './CheckRate'
import DatePicker from './DatePicket'
import GuestsSelector from './GuestsSelector'

export default function ChildrenSelector() {
  return (
    <div className="flex justify-center">
      <div className="w-1/1 bg-white p-[50px] flex relative bottom-[100px] cursor-pointer">
        <DatePicker />
        <GuestsSelector />
        <CheckRate />
      </div>
    </div>
  )
}
