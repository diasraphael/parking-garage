import React from 'react'
import { H1, InfoCard } from '@dnb/eufemia'
import * as types from '../../../model/serviceData'
import ParkingSpot from '../ParkingSpot/ParkingSpot'

interface ParkingFloorProps {
  data: types.ParkingFloor | undefined
}

const ParkingFloor = (props: ParkingFloorProps) => {
  const { data } = props
  return (
    <>
      <div className="my-12">
        <InfoCard
          text={data?.parkingPanelMessage}
          title="Parking Floor Available Spaces:"
        />
      </div>
      <H1 size="x-large">
        Status on the available parking spaces in floor {data?.name} is
        {data?.parkingPanelMessage}
      </H1>
      <div className="flex flex-row flex-wrap">
        {data?.parkingSpots.map((spot: types.ParkingSpot) => (
          <ParkingSpot key={spot.id} data={spot} />
        ))}
      </div>
    </>
  )
}

export default ParkingFloor
