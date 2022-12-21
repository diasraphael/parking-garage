import { Button, Dropdown } from '@dnb/eufemia'
import React, { useState } from 'react'
import { PARKING_SPOT } from '../ParkingGarage/types'
import ModalPopup from '../ParkingSpot/ModalPopup'
import { options } from '../ParkingSpot/types'

interface AddParkingSpotProps {
  addParkingSpot: (value: PARKING_SPOT | undefined) => void
}

const AddParkingSpot = (props: AddParkingSpotProps) => {
  const { addParkingSpot } = props
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [spotType, setSpotType] = useState<PARKING_SPOT>()
  const handleSubmit = () => {
    addParkingSpot(spotType)
    handleClose()
  }
  return (
    <div className="flex justify-end">
      <Button variant="secondary" className="my-2" onClick={handleShow}>
        Add parking spot
      </Button>
      <ModalPopup
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        show={show}
        text="Add Parking Spot"
      >
        <Dropdown
          label="Type:"
          icon_position="right"
          label_direction="vertical"
          data={options}
          value={spotType}
          skip_portal={true}
          on_change={({ data: selectedDataItem }) => {
            setSpotType(selectedDataItem.selected_key)
          }}
        />
      </ModalPopup>
    </div>
  )
}

export default AddParkingSpot
