import React from 'react'
import NavItem from './NavItem'

const Nav = () => {
  return (
    <>
      <NavItem url="/parkings" label="Parkings" />
      <NavItem url="/history" label="History" />
    </>
  )
}

export default Nav
