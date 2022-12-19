import React from 'react'
import { H1 } from '@dnb/eufemia'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/')
  }
  return (
    <div className="p-8 h-60 flex flex-row justify-start items-center header w-full bg-[#A5E1D2]">
      <H1 space={0} className="ml-4 cursor-pointer container" onClick={goHome}>
        DNB Parking Garage
      </H1>
    </div>
  )
}

export default Header
