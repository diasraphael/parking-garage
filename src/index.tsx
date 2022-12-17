import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParkingGarage from "./components/business/ParkingGarage";
import ParkingHistory from "./components/business/ParkingHistory";
import Home from "./components/common/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App></App>}>
            <Route path="" element={<Home></Home>}></Route>
            <Route
              path="parkings"
              element={<ParkingGarage parkingFloorsCount={4}></ParkingGarage>}
            ></Route>
            <Route
              path="/history"
              element={<ParkingHistory></ParkingHistory>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
