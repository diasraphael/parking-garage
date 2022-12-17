import React from 'react'
import * as types from './serviceData'
import { InfoCard } from '@dnb/eufemia'
import './ParkingGarage.css'
import AvailableFloors from './AvailableFloors'

interface ParkingGarageProps {
  template: types.ParkingGarage
  selectedParkingFloor: types.ParkingFloor | undefined
  selectedFloor: string | undefined
  setSelectedFloor: (value: string) => void
}

const ParkingGarage = (props: ParkingGarageProps) => {
  const { template, selectedFloor, selectedParkingFloor, setSelectedFloor } =
    props
  const { parkingsAvailableMessage, parkingFloors } = template

  return (
    <div>
      <div className="mb-12">
        <InfoCard
          text={parkingsAvailableMessage}
          title="Parking Garage Live Status:"
        />
      </div>
      <div className="ml-8">
        <AvailableFloors
          parkingFloors={parkingFloors}
          selectedFloor={selectedFloor}
          setSelectedFloor={setSelectedFloor}
        ></AvailableFloors>
      </div>
      <>
        {selectedParkingFloor?.parkingSpots.map((spot: types.ParkingSpot) => (
          <div key={spot.id}>{spot.id}</div>
        ))}
      </>
    </div>
  )
}

export default ParkingGarage
