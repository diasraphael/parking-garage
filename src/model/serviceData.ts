import {
  PARKING_SPOT,
  PARKING_STATUS
} from '../components/business/ParkingGarage/types'

export type GarageTemplate = {
  parkingGarage: ParkingGarage | undefined
}
export type ParkingGarage = {
  parkingsAvailable: string | undefined
  parkingFloors: ParkingFloor[] | []
}
export type ParkingFloor = {
  id: string
  name: string
  totalParkingSpaces: number
  availableParkingSpaces: number
  availableCompactSpaces: number
  availableLargeSpaces: number
  availableHandicappedSpaces: number
  availableMotorcycle: number
  parkingSpots: ParkingSpot[]
}
export type ParkingSpot = {
  id: string
  name: string
  type: PARKING_SPOT | undefined
  status: PARKING_STATUS | undefined
}
export type NewUserParking = {
  parkingId: string
  username: string
  email: string
  mobile: string
  date: string
  hours: number | undefined
  spotId: string
  floorId: string
  type: PARKING_SPOT | undefined
  status: PARKING_STATUS | undefined
}
export type UsersParkingList = NewUserParking[]
