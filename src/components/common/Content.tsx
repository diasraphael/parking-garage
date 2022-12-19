import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

const Content = () => {
  return (
    <>
      <div className="main w-full container">
        <div className="flex my-8">
          <Nav></Nav>
        </div>
        <Outlet />
      </div>
    </>
  )
}

export default Content
