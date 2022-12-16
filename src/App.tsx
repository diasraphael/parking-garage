import React from "react";
import { useSelector, useDispatch } from "./redux/hooks";
import "./App.css";
import { updateDisplayBoard } from "./redux/parkingSlice";

function App() {
  const message = useSelector((state) => state.parkings.displayBoard);
  console.log(message);
  const dispatch = useDispatch();
  const displayBoard = () => {
    dispatch(updateDisplayBoard());
  };
  return (
    <div className="App">
      <h1 className="text-center font-bold text-3xl">Parking Garage</h1>
      <p className="text-center font-medium text-xl">status: {message}</p>
      <p className="text-center">
        <input
          type="submit"
          value="Submit"
          className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={displayBoard}
        ></input>
      </p>
    </div>
  );
}

export default App;
