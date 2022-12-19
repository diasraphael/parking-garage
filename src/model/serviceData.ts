import {
  PARKING_SPOT,
  PARKING_STATUS
} from '../components/business/ParkingGarage/types'

export type GarageTemplate = {
  parkingGarage: ParkingGarage
}
export type ParkingGarage = {
  parkingsAvailable: string
  parkingFloors: ParkingFloor[]
}
export type ParkingFloor = {
  id: string
  name: string
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
