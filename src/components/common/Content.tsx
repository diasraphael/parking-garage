import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

const Content = () => {
  return (
    <>
      <div className="nav w-1/4">
        <Nav />
      </div>
      <div className="main w-3/4">
        <Outlet />
      </div>
    </>
  )
}

export default Content
