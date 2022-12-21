import React from 'react'
import { H1 } from '@dnb/eufemia'

const Home = () => {
  return (
    <div className="relative">
      <div className="">
        <H1 className="my-12"> Welcome to the parking garage !</H1>
        <p className="text-xl my-8">
          The parking garage have multiple floors where customers can park their
          cars.
        </p>
        <p className="text-xl my-8">
          you can book a parking based on the required parking spot. Here we
          have different parking spots available, we have compact, large,
          motorcycle, handicapped parking spots.
        </p>
        <p className="text-xl my-8">
          Each parking floor have a display board showing any free parking spot
          for each spot type.
        </p>
        <p className="text-xl my-8">
          we can display availability by floor and for the whole parking lot
        </p>
        <p className="text-xl my-8"> we can Add / Modify parking spot</p>
        <p className="text-xl my-8">
          we display the status of the available spot types for each floor
        </p>
        <p className="text-xl my-8">
          we can enter and exit in one of the spot types by entering the details
        </p>
      </div>
    </div>
  )
}

export default Home
