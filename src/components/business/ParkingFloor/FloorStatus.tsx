import { H3 } from '@dnb/eufemia'
import React from 'react'
import { ParkingFloor } from '../../../model/serviceData'
import Field from './Field'
interface FloorStatusProps {
  data: ParkingFloor | undefined
}

const FloorStatus = (props: FloorStatusProps) => {
  const { data } = props
  return (
    <div className="card my-8 bg-[#f4fbf9]">
      <H3>Details of the {data?.name}</H3>
      <Field
        label="Total parking spots in this floor"
        value={data?.totalParkingSpaces}
      ></Field>
      <Field
        label="Parking spots available for compact"
        value={data?.availableCompactSpaces}
      ></Field>
      <Field
        label="Parking spots available for large"
        value={data?.availableLargeSpaces}
      ></Field>
      <Field
        label="Parking spots available for handicapped"
        value={data?.availableHandicappedSpaces}
      ></Field>
      <Field
        label="Parking spots available for motorcycle"
        value={data?.availableMotorcycle}
      ></Field>
    </div>
  )
}

export default FloorStatus
