import React from 'react'
import { Dropdown, InfoCard } from '@dnb/eufemia'
import * as types from '../../../model/serviceData'
import './ParkingGarage.css'
import AvailableFloors from './AvailableFloors'
import ParkingFloor from '../ParkingFloor/ParkingFloor'
import {
  DisplayParkingSpacesByOptions,
  DISPLAY_AVAILABLE_SPACES
} from './types'

interface ParkingGarageProps {
  template: types.ParkingGarage
  selectedFloor: string | undefined
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
  const { parkingsAvailableMessage, parkingFloors } = template
  const getSelectedParkingFloor = (value: string | undefined) =>
    template?.parkingFloors.find(
      (floor: types.ParkingFloor) => floor.id === value
    )

  const displayByFloor = () => (
    <>
      <div className="ml-8">
        <AvailableFloors
          parkingFloors={parkingFloors}
          selectedFloor={selectedFloor}
          getSelectedFloor={getSelectedFloor}
        />
      </div>
      <ParkingFloor data={getSelectedParkingFloor(selectedFloor)} />
    </>
  )
  const displayByAllFloor = () =>
    template?.parkingFloors.map((floor: types.ParkingFloor) => (
      <ParkingFloor key={floor.id} data={floor} />
    ))

  return (
    <div>
      <div className="mb-12">
        <InfoCard
          text={parkingsAvailableMessage}
          title="Parking garage available spaces:"
        />
      </div>
      <Dropdown
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
