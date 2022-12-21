import React from 'react'
import { Dropdown, InfoCard } from '@dnb/eufemia'
import * as types from '../../../model/serviceData'
import './ParkingGarage.css'
import AvailableFloors from './AvailableFloors'
import {
  DisplayParkingSpacesByOptions,
  DISPLAY_AVAILABLE_SPACES
} from './types'
import ParkingFloorController from '../ParkingFloor/ParkingFloorController'

interface ParkingGarageProps {
  template: types.ParkingGarage | undefined
  selectedFloor: string
  getSelectedFloor: (value: string) => void
  displayParkingSpacesBySelection: string | undefined
  displayParkingSpacesByOptions: DisplayParkingSpacesByOptions[]
  getDisplayParkingSpacesBySelection: (value: string) => void
}

function ParkingGarage(props: ParkingGarageProps) {
  const {
    template,
    selectedFloor,
    getSelectedFloor,
    displayParkingSpacesBySelection,
    displayParkingSpacesByOptions,
    getDisplayParkingSpacesBySelection
  } = props
  const getSelectedParkingFloor = (value: string | undefined) =>
    template?.parkingFloors?.find(
      (floor: types.ParkingFloor) => floor.id === value
    )

  const displayByFloor = () => (
    <>
      <AvailableFloors
        parkingFloors={template?.parkingFloors}
        selectedFloor={selectedFloor}
        getSelectedFloor={getSelectedFloor}
      />
      <ParkingFloorController data={getSelectedParkingFloor(selectedFloor)} />
    </>
  )
  const displayByAllFloor = () =>
    template?.parkingFloors?.map((floor: types.ParkingFloor) => (
      <ParkingFloorController key={floor.id} data={floor} />
    ))

  return (
    <div>
      <div className="mt-8 mb-12 text-xl">
        <InfoCard
          text={template?.parkingsAvailable}
          className="text-xl"
          title="Available spaces in parking garage"
        />
      </div>
      <Dropdown
        className=" mx-4 mb-8"
        data={displayParkingSpacesByOptions}
        label="Display Parking Spaces by:"
        value={displayParkingSpacesBySelection}
        title="Please select a value"
        on_change={({ data: selectedDataItem }) => {
          getDisplayParkingSpacesBySelection(selectedDataItem.selected_key)
        }}
      />
      <>
        {displayParkingSpacesBySelection === DISPLAY_AVAILABLE_SPACES.BY_FLOOR
          ? displayByFloor()
          : displayByAllFloor()}
      </>
    </div>
  )
}

export default ParkingGarage
