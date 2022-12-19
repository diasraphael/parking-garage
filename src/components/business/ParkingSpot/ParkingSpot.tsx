import React from 'react'
import * as types from '../../../model/serviceData'
import { Button, Icon } from '@dnb/eufemia'
import { thumbs_down as occupied } from '@dnb/eufemia/icons'
import { thumbs_up as available } from '@dnb/eufemia/icons'
import { PARKING_STATUS } from '../ParkingGarage/types'
import Field from '../ParkingFloor/Field'

interface ParkingSpotProps {
  data: types.ParkingSpot
}

const ParkingSpot = (props: ParkingSpotProps) => {
  const { data } = props
  return (
    <div
      className={`card p-[10] m-[10px] w-full md:w-[30%] ${
        data.status === PARKING_STATUS.AVAILABLE
          ? 'bg-[#F4FBF9]'
          : 'bg-[#FDEEEE]'
      }`}
    >
      <div>{data.id}</div>
      <Field label="Id:" value={data.id}></Field>
      <Field label="Type:" value={data.type}></Field>
      <Field label="Status:" value={data.status}></Field>
      <div className="flex items-center justify-between">
        <div className="my-4">
          {data.status === PARKING_STATUS.AVAILABLE ? (
            <Icon icon={available} size="large" aria-hidden color="#007B5E" />
          ) : (
            <Icon icon={occupied} size="large" aria-hidden color="red" />
          )}
        </div>
        <div>
          {data.status === PARKING_STATUS.AVAILABLE ? (
            <Button
              text="Enter Parking"
              className="my-2"
              on_click={() => {
                console.log('on_click')
              }}
              variant="secondary"
            />
          ) : (
            <Button
              text="Exit Parking"
              className="my-2"
              on_click={() => {
                console.log('on_click')
              }}
              variant="secondary"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ParkingSpot
