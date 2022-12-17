import React from "react";
import { useSelector, useDispatch } from "./redux/hooks";
import "./App.css";
import { updateDisplayBoard } from "./redux/parkingSlice";
import { Button } from "@dnb/eufemia";
import "@dnb/eufemia/style";
import Header from "./components/common/Header";
import Content from "./components/common/Content";

function App() {
  const message = useSelector((state) => state.parkings.displayBoard);
  console.log(message);
  const dispatch = useDispatch();
  const displayBoard = () => {
    dispatch(updateDisplayBoard());
  };
  return (
    <div className="App">
      <div className="flex flex-row flex-wrap w-full">
        <Header></Header>
        <Content></Content>
      </div>

      <p>status: {message}</p>
      <Button text="Submit" on_click={displayBoard} />
    </div>
  );
}

export default App;
