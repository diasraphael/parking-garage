import React from "react";
import { H2, Icon } from "@dnb/eufemia";
import { car_1 as car } from "@dnb/eufemia/icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <div className="p-8 h-20 flex flex-row justify-start items-center header w-full">
      <Icon
        icon={car}
        title="Beach"
        size="large"
        aria-hidden="true"
        className="cursor-pointer"
        onClick={goHome}
      />
      <H2 space={0} className="ml-4">
        DNB Parking Garage
      </H2>
    </div>
  );
};

export default Header;
