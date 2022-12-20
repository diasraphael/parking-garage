import { createSlice } from '@reduxjs/toolkit'
import { GarageTemplate, UsersParkingList } from '../model/serviceData'

export type InitialState = {
  garageTemplate: GarageTemplate | undefined
  selectedParkingFloorId: string
  displayParkingSpacesBySelection: string | undefined
  usersParkingList: UsersParkingList[] | []
}
const initialState: InitialState = {
  garageTemplate: undefined,
  selectedParkingFloorId: '',
  displayParkingSpacesBySelection: undefined,
  usersParkingList: []
}

export const garageSlice = createSlice({
  name: 'parking garage',
  initialState,
  reducers: {
    // add your non-async reducers here
    setGarageTemplate: (state: InitialState, action: { payload: any }) => {
      state.garageTemplate = action.payload
    },
    getSelectedParkingFloorId: (state, action) => {
      state.selectedParkingFloorId = action.payload
    },
    setDisplayParkingSpacesBySelection: (state, action) => {
      state.displayParkingSpacesBySelection = action.payload
    },
    updateUsersParkingList: (state, action) => {
      state.usersParkingList = action.payload
    },
    updateFloorParkingSpaces: (state, action) => {
      state.garageTemplate!.parkingGarage!.parkingFloors = action.payload
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
  setDisplayParkingSpacesBySelection,
  updateUsersParkingList,
  updateFloorParkingSpaces
} = garageSlice.actions

export default garageSlice.reducer
