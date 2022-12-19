import React from 'react'
import { H3 } from '@dnb/eufemia'
import * as types from '../../../model/serviceData'

interface ParkingSpotProps {
  data: types.ParkingSpot
}

const ParkingSpot = (props: ParkingSpotProps) => {
  const { data } = props
  return (
    <div className="card p-[10] m-[10px] w-full md:w-[30%]">
      <H3>{data.name}</H3>
      <div>{data.id}</div>
      <div>{data.name}</div>
      <div>{data.status}</div>
      <div>{data.type}</div>
    </div>
  )
}

export default ParkingSpot
