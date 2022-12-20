import React from 'react'
import { useSelector } from 'react-redux'
import * as types from '../../../model/serviceData'
import {
  updateFloorParkingSpaces,
  updateUsersParkingList
} from '../../../redux/garageSlice'
import { useDispatch } from '../../../redux/hooks'
import { RootState } from '../../../redux/store'
import ParkingSpot from './ParkingSpot'

interface ParkingSpotControllerProps {
  data: types.ParkingSpot
  floorId: string
}

const ParkingSpotController = (props: ParkingSpotControllerProps) => {
  const { data, floorId } = props
  const usersParkingList = useSelector(
    (state: RootState) => state.parkings.usersParkingList
  )

  const dispatch = useDispatch()
  const addUserParking = (userParking: types.NewUserParking) => {
    dispatch(updateUsersParkingList([...usersParkingList, userParking]))
    dispatch(updateFloorParkingSpaces(userParking))
  }
  return (
    <ParkingSpot
      addUserParking={addUserParking}
      data={data}
      floorId={floorId}
    ></ParkingSpot>
  )
}

export default ParkingSpotController
