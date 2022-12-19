import React from 'react'
import { H1 } from '@dnb/eufemia'

const Home = () => {
  return (
    <div className="relative">
      <div className="">
        <H1 className="my-12"> Welcome to the parking garage !!!</H1>
        <p>
          The parking garage should have multiple floors where customers can park
          their cars.
        </p>
        <p className="text-xl my-12">
          you can book a parking based on the required parking spot. Here we
          have different parking spots available, we have compact, large,
          motorcycle, handicapped parking spots.
        </p>
      </div>
    </div>
  )
}

export default Home
