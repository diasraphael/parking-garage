import { createSlice } from '@reduxjs/toolkit'
import {
  GarageTemplate,
  ParkingFloor
} from '../components/business/ParkingGarage/serviceData'

export type InitialState = {
  garageTemplate: GarageTemplate | undefined
  selectedParkingFloor: ParkingFloor | undefined
}
const initialState: InitialState = {
  garageTemplate: undefined,
  selectedParkingFloor: undefined
}

export const garageSlice = createSlice({
  name: 'parking garage',
  initialState,
  reducers: {
    // add your non-async reducers here
    setGarageTemplate: (state, action) => {
      state.garageTemplate = action.payload
    },
    getSelectedParkingFloor: (state, action) => {
      state.selectedParkingFloor =
        state.garageTemplate?.parkingGarage.parkingFloors.find(
          (floor: ParkingFloor) => floor.id === action.payload
        )
    }
  },
  extraReducers: {
    // add your async reducers here
  }
})

// Action creators
export const { setGarageTemplate, getSelectedParkingFloor } =
  garageSlice.actions

export default garageSlice.reducer
