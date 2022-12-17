import React from 'react'
import * as types from './serviceData'

interface ParkingGarageProps {
  template: types.ParkingGarage
}

const ParkingGarage = (props: ParkingGarageProps) => {
  const { template } = props
  const { parkingsAvailableMessage, parkingFloors } = template
  return (
    <div>
      <h1>Parking Garage Status: {parkingsAvailableMessage}</h1>
      {parkingFloors.map((floor: types.ParkingFloor) => (
        <div key={floor.id}>{floor.id}</div>
      ))}
    </div>
  )
}

export default ParkingGarage
