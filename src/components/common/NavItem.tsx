import React from 'react'
import { NavLink } from 'react-router-dom'

interface NavItemProps {
  url: string
  label: string
}

const NavItem = (props: NavItemProps) => {
  const { url, label } = props
  return (
    <div className="">
      <NavLink
        to={url}
        className="mr-4 text-xl"
        style={({ isActive }) => ({
          color: isActive ? 'active' : ''
        })}
      >
        {label}
      </NavLink>
    </div>
  )
}

export default NavItem
