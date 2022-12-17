import React from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
  url: string;
  label: string;
}

const NavItem = (props: NavItemProps) => {
  const { url, label } = props;
  return (
    <div className="">
      <Link to={url}>{label}</Link>
    </div>
  );
};

export default NavItem;
