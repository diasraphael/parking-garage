import React, { useState } from 'react'
import { ToggleButton, ProgressIndicator } from '@dnb/eufemia'
import * as types from '../../../model/serviceData'
import { v1 } from 'uuid'

interface AvailableFloorsProps {
  parkingFloors: types.ParkingFloor[] | undefined
  selectedFloor: string | undefined
  getSelectedFloor: (value: string) => void
}

const AvailableFloors = (props: AvailableFloorsProps) => {
  const { parkingFloors, selectedFloor, getSelectedFloor } = props
  const [loading, setLoading] = useState(false)

  return (
    <div className="mx-4">
      <ToggleButton.Group
        label="Available Parking Floors:"
        value={selectedFloor}
        layout_direction="row"
        on_change={({ value }) => {
          setLoading(true)
          getSelectedFloor(value)
          setLoading(false)
        }}
      >
        {parkingFloors?.map((floor: types.ParkingFloor) => (
          <div key={v1()}>
            <ToggleButton text={floor.id} value={floor.id} />
          </div>
        ))}
      </ToggleButton.Group>
      {loading && <ProgressIndicator type="circular" />}
    </div>
  )
}

export default AvailableFloors
