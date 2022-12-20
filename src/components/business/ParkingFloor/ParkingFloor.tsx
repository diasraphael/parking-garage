import React from 'react'
import { H1 } from '@dnb/eufemia'
import * as types from '../../../model/serviceData'
import ParkingSpotController from '../ParkingSpot/ParkingSpotController'
import FloorStatus from './FloorStatus'

interface ParkingFloorProps {
  data: types.ParkingFloor | undefined
}

const ParkingFloor = (props: ParkingFloorProps) => {
  const { data } = props

  return (
    <div className="card my-12">
      <div className="text-center text-3xl font-medium">
        <h2>{data?.name}</h2>
      </div>
      <FloorStatus data={data} />
      <H1 size="large" className="ml-4 my-4">
        Status of the parking spaces in the floor
      </H1>
      <div className="flex flex-row flex-wrap justify-between">
        {data?.parkingSpots.map((spot: types.ParkingSpot) => (
          <ParkingSpotController
            key={spot.id}
            data={spot}
            floorId={data.id}
          ></ParkingSpotController>
        ))}
      </div>
    </div>
  )
}

export default ParkingFloor
