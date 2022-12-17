import React from "react";

interface ParkingGarageProps {
  parkingFloorsCount: number;
}

const ParkingGarage = (props: ParkingGarageProps) => {
  const { parkingFloorsCount } = props;
  return (
    <div>
      <h1>Parking Garage</h1>
      <p>No of parking floors available: {parkingFloorsCount}</p>
    </div>
  );
};

export default ParkingGarage;
