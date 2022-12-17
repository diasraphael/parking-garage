import React from "react";
import { Anchor } from "@dnb/eufemia";

interface NavItemProps {
  url: string;
  label: string;
}

const NavItem = (props: NavItemProps) => {
  const { url, label } = props;
  return (
    <div>
      <Anchor href={url} className="dnb-anchor--no-underline">
        {label}
      </Anchor>
    </div>
  );
};

export default NavItem;
