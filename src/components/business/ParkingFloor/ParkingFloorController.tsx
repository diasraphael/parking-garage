import React from 'react'
import { useSelector } from 'react-redux'
import * as types from '../../../model/serviceData'
import { updateFloorParkingSpaces } from '../../../redux/garageSlice'
import { useDispatch } from '../../../redux/hooks'
import { RootState } from '../../../redux/store'
import { PARKING_SPOT, PARKING_STATUS } from '../ParkingGarage/types'
import ParkingFloor from './ParkingFloor'
interface ParkingFloorControllerProps {
  data: types.ParkingFloor | undefined
}

const ParkingFloorController = (props: ParkingFloorControllerProps) => {
  const { data } = props
  const parkingFloors = useSelector(
    (state: RootState) =>
      state.parkings.garageTemplate?.parkingGarage?.parkingFloors
  )
  const updateParkingSpot = (
    data: types.ParkingFloor | undefined,
    value: PARKING_SPOT | undefined
  ) => {
    return parkingFloors?.map((floor: types.ParkingFloor) => {
      if (floor.id === data?.id) {
        const newFloor = { ...floor }
        const { parkingSpots } = newFloor
        const updatedSpots = [
          ...parkingSpots,
          {
            id: `PS10${parkingSpots.length + 1}`,
            name: data.name,
            type: value,
            status: PARKING_STATUS.AVAILABLE
          }
        ]
        return {
          ...newFloor,
          parkingSpots: updatedSpots
        }
      }
      return floor
    })
  }
  const dispatch = useDispatch()
  const addParkingSpot = (value: PARKING_SPOT | undefined) => {
    const updatedFloors = updateParkingSpot(data, value)
    dispatch(updateFloorParkingSpaces(updatedFloors))
  }
  return (
    <div>
      <ParkingFloor data={data} addParkingSpot={addParkingSpot}></ParkingFloor>
    </div>
  )
}

export default ParkingFloorController
