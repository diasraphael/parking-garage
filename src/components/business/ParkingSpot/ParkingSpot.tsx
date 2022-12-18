import React from 'react'
import { H1 } from '@dnb/eufemia'
import * as types from '../../../model/serviceData'

interface ParkingSpotProps {
  data: types.ParkingSpot
}

const ParkingSpot = (props: ParkingSpotProps) => {
  const { data } = props
  return (
    <div className="basis-1/3 p-8">
      <H1>{data.name}</H1>
      <div>{data.id}</div>
      <div>{data.name}</div>
      <div>{data.status}</div>
      <div>{data.type}</div>
    </div>
  )
}

export default ParkingSpot
