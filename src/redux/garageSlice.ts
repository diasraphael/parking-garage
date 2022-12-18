import { createSlice } from '@reduxjs/toolkit'
import { GarageTemplate } from '../model/serviceData'

export type InitialState = {
  garageTemplate: GarageTemplate | undefined
  selectedParkingFloorId: string | undefined
  displayParkingSpacesBySelection: string | undefined
}
const initialState: InitialState = {
  garageTemplate: undefined,
  selectedParkingFloorId: undefined,
  displayParkingSpacesBySelection: undefined
}

export const garageSlice = createSlice({
  name: 'parking garage',
  initialState,
  reducers: {
    // add your non-async reducers here
    setGarageTemplate: (state, action) => {
      state.garageTemplate = action.payload
    },
    getSelectedParkingFloorId: (state, action) => {
      state.selectedParkingFloorId = action.payload
    },
    setDisplayParkingSpacesBySelection: (state, action) => {
      state.displayParkingSpacesBySelection = action.payload
    }
  },
  extraReducers: {
    // add your async reducers here
  }
})

// Action creators
export const {
  setGarageTemplate,
  getSelectedParkingFloorId,
  setDisplayParkingSpacesBySelection
} = garageSlice.actions

export default garageSlice.reducer
