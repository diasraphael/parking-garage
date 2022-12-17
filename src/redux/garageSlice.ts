import { createSlice } from "@reduxjs/toolkit";

export type InitialState = {
  displayBoard: string;
};
const initialState: InitialState = { displayBoard: "You can park here!!!" };

export const garageSlice = createSlice({
  name: "parking garage",
  initialState,
  reducers: {
    // add your non-async reducers here
    updateDisplayBoard: (state) => {
      console.log("abc");
      state.displayBoard =
        "Sorry Parking garage is full, look for other parking garages nearby";
    },
  },
  extraReducers: {
    // add your async reducers here
  },
});

// Action creators
export const { updateDisplayBoard } = garageSlice.actions;

export default garageSlice.reducer;
