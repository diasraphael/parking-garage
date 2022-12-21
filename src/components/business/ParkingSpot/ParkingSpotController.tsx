import React from 'react'
import { useSelector } from 'react-redux'
import * as types from '../../../model/serviceData'
import {
  updateFloorParkingSpaces,
  updateUsersParkingList
} from '../../../redux/garageSlice'
import { useDispatch } from '../../../redux/hooks'
import { RootState } from '../../../redux/store'
import { PARKING_SPOT, PARKING_STATUS } from '../ParkingGarage/types'
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
  const parkingFloors = useSelector(
    (state: RootState) =>
      state.parkings.garageTemplate?.parkingGarage?.parkingFloors
  )
  const updateParkingSpot = (type: PARKING_SPOT | undefined, value: number) => {
    switch (type) {
      case PARKING_SPOT.COMPACT:
        return { availableCompactSpaces: value }
      case PARKING_SPOT.LARGE:
        return { availableLargeSpaces: value }
      case PARKING_SPOT.HANDICAPPED:
        return { availableHandicappedSpaces: value }
      case PARKING_SPOT.MOTORCYCLE:
        return { availableMotorcycle: value }
    }
  }
  const updateSpotAvailability = (
    data:
      | {
          status: PARKING_STATUS
          spotId: string
          type: PARKING_SPOT | undefined
        }
      | types.NewUserParking,
    status: PARKING_STATUS
  ) => {
    return parkingFloors?.map((floor: types.ParkingFloor) => {
      if (floor.id === floorId) {
        const newFloor = { ...floor }
        const { parkingSpots } = newFloor
        const updatedSpots = parkingSpots.map((spot: types.ParkingSpot) => {
          if (spot.id === data.spotId) {
            return { ...spot, status: data.status }
          }
          return spot
        })
        const spots = updatedSpots.filter(
          (spot: types.ParkingSpot) =>
            spot.type === data.type && PARKING_STATUS.AVAILABLE === spot.status
        )
        return {
          ...newFloor,
          ...updateParkingSpot(data.type, spots.length),
          parkingSpots: updatedSpots
        }
      }
      return floor
    })
  }

  const modifyParkingSpot = (
    spotId: string,
    type: PARKING_SPOT | undefined,
    floorId: string
  ) => {
    return parkingFloors?.map((floor: types.ParkingFloor) => {
      if (floor.id === floorId) {
        const newFloor = { ...floor }
        const { parkingSpots } = newFloor
        const updatedSpots = parkingSpots.map((spot: types.ParkingSpot) => {
          if (spot.id === spotId) {
            return { ...spot, type: type }
          }
          return spot
        })
        return {
          ...newFloor,
          parkingSpots: updatedSpots
        }
      }
      return floor
    })
  }

  const dispatch = useDispatch()
  const addUserParking = (userParking: types.NewUserParking) => {
    dispatch(updateUsersParkingList([...usersParkingList, userParking]))
    const updatedFloors = updateSpotAvailability(
      userParking,
      PARKING_STATUS.OCCUPIED
    )
    dispatch(updateFloorParkingSpaces(updatedFloors))
  }
  const exitUserParking = (data: types.ParkingSpot) => {
    const updatedFloors = updateSpotAvailability(
      {
        status: PARKING_STATUS.AVAILABLE,
        spotId: data.id,
        type: data.type
      },
      PARKING_STATUS.AVAILABLE
    )
    dispatch(updateFloorParkingSpaces(updatedFloors))
  }
  const updateSpotType = (
    spotId: string,
    type: PARKING_SPOT | undefined,
    floorId: string
  ) => {
    const updatedFloors = modifyParkingSpot(spotId, type, floorId)
    dispatch(updateFloorParkingSpaces(updatedFloors))
  }
  return (
    <ParkingSpot
      addUserParking={addUserParking}
      exitUserParking={exitUserParking}
      updateSpotType={updateSpotType}
      data={data}
      floorId={floorId}
    ></ParkingSpot>
  )
}

export default ParkingSpotController
