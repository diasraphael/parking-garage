import React, { useState } from 'react'
import { ToggleButton, ProgressIndicator } from '@dnb/eufemia'
import * as types from './serviceData'
import { useDispatch } from '../../../redux/hooks'
import { getSelectedParkingFloor } from '../../../redux/garageSlice'

interface AvailableFloorsProps {
  parkingFloors: types.ParkingFloor[]
  selectedFloor: string | undefined
  setSelectedFloor: (value: string) => void
}

const AvailableFloors = (props: AvailableFloorsProps) => {
  const { parkingFloors, selectedFloor, setSelectedFloor } = props
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  return (
    <>
      <ToggleButton.Group
        label="Available Parking Floors:"
        value={selectedFloor}
        layout_direction="row"
        on_change={({ value }) => {
          setLoading(true)
          setSelectedFloor(value)
          dispatch(getSelectedParkingFloor(value))
          setLoading(false)
        }}
      >
        {parkingFloors.map((floor: types.ParkingFloor) => (
          <div key={floor.id}>
            <ToggleButton text={floor.id} value={floor.id} />
          </div>
        ))}
      </ToggleButton.Group>
      {loading && <ProgressIndicator type="circular" />}
    </>
  )
}

export default AvailableFloors
