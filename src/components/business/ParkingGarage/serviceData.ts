import { PARKING_SPOT, PARKING_STATUS } from './types'

export type GarageTemplate = {
  parkingGarage: ParkingGarage
}
export type ParkingGarage = {
  parkingsAvailableMessage: string
  parkingFloors: ParkingFloor[]
}
export type ParkingFloor = {
  id: string
  name: string
  parkingPanelMessage: string
  totalParkingSpaces: number
  availableParkingSpaces: number
  parkingSpots: ParkingSpot[]
}
export type ParkingSpot = {
  id: string
  name: string
  type: PARKING_SPOT
  status: PARKING_STATUS
}
