import { createSlice } from '@reduxjs/toolkit'
import { GarageTemplate } from '../components/business/ParkingGarage/serviceData'

export type InitialState = {
  garageTemplate: GarageTemplate | undefined
}
const initialState: InitialState = { garageTemplate: undefined }

export const garageSlice = createSlice({
  name: 'parking garage',
  initialState,
  reducers: {
    // add your non-async reducers here
    setGarageTemplate: (state, action) => {
      state.garageTemplate = action.payload
    }
  },
  extraReducers: {
    // add your async reducers here
  }
})

// Action creators
export const { setGarageTemplate } = garageSlice.actions

export default garageSlice.reducer
