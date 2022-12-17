import React from "react";
import { useSelector, useDispatch } from "./redux/hooks";
import "./App.css";
import { updateDisplayBoard } from "./redux/parkingSlice";
import { Button } from "@dnb/eufemia";
import "@dnb/eufemia/style";

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
        <Button text="Submit" on_click={displayBoard} />
      </p>
    </div>
  );
}

export default App;
