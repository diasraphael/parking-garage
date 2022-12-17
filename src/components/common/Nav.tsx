import React from "react";
import NavItem from "./NavItem";

const Nav = () => {
  return (
    <>
      <NavItem url="/parkings" label="Parkings"></NavItem>
      <NavItem url="/history" label="History"></NavItem>
    </>
  );
};

export default Nav;
