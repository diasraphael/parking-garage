import React from 'react'
import { H1, H4 } from '@dnb/eufemia'
import * as types from '../../../model/serviceData'
import Field from './Field'
import ParkingSpotController from '../ParkingSpot/ParkingSpotController'

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
      <div className="card my-8 bg-[#f4fbf9]">
        <H4>Details of the {data?.name}</H4>
        <Field
          label="Total parking spots available in this floor"
          value={25}
        ></Field>
        <Field label="Parking spots available for compact" value={5}></Field>
        <Field label="Parking spots available for large" value={5}></Field>
        <Field
          label="Parking spots available for handicapped"
          value={5}
        ></Field>
        <Field label="Parking spots available for motorcycle" value={5}></Field>
      </div>
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
