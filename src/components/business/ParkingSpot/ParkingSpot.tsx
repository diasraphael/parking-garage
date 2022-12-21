import React, { useState } from 'react'
import * as types from '../../../model/serviceData'
import { Button, DatePicker, Dropdown, Icon, Input } from '@dnb/eufemia'
import { thumbs_down as occupied } from '@dnb/eufemia/icons'
import { thumbs_up as available } from '@dnb/eufemia/icons'
import { PARKING_SPOT, PARKING_STATUS } from '../ParkingGarage/types'
import Field from '../ParkingFloor/Field'
import './ParkingSpot.css'
import { v1 } from 'uuid'
import ModalPopup from './ModalPopup'
import { options } from './types'

interface ParkingSpotProps {
  data: types.ParkingSpot
  floorId: string
  addUserParking: (userParking: types.NewUserParking) => void
  exitUserParking: (data: types.ParkingSpot) => void
  updateSpotType: (
    spotId: string,
    type: PARKING_SPOT | undefined,
    floorId: string
  ) => void
}

const ParkingSpot = (props: ParkingSpotProps) => {
  const { data, addUserParking, exitUserParking, updateSpotType, floorId } =
    props
  const [submitted, setSubmitted] = useState(false)
  const [, setValid] = useState(false)
  const initialUserParking = {
    parkingId: '',
    username: '',
    email: '',
    mobile: '',
    date: '',
    hours: undefined,
    floorId: '',
    spotId: '',
    type: undefined,
    status: undefined
  }
  const [userParking, setUserParking] =
    useState<types.NewUserParking>(initialUserParking)
  const [spotType, setSpotType] = useState<PARKING_SPOT>()

  const handleChange = (event: any) => {
    setUserParking({ ...userParking, [event.target.name]: event.target.value })
  }
  const handleDateChange = (date: string) => {
    setUserParking({ ...userParking, date: date })
  }
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(false)
  const handleEnterParking = () => setOpen(true)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const checkInputFields =
    userParking.username &&
    userParking.email &&
    userParking.mobile &&
    userParking.hours &&
    userParking.date
  const handleSubmit = () => {
    setSubmitted(true)
    if (checkInputFields) {
      setValid(true)
      addUserParking({
        ...userParking,
        spotId: data.id,
        type: data.type,
        status: PARKING_STATUS.OCCUPIED,
        parkingId: v1(),
        floorId
      })
      setSubmitted(false)
      setUserParking(initialUserParking)
    }
  }
  const handleModifySubmit = () => {
    updateSpotType(data.id, spotType, floorId)
    handleClose()
  }

  return (
    <div
      className={`min-h-[315px] card p-[10] m-[10px] w-full md:w-[30%] ${
        data.status === PARKING_STATUS.AVAILABLE
          ? 'bg-[#F4FBF9]'
          : 'bg-[#FDEEEE]'
      }`}
    >
      <div>{data.id}</div>
      <Field label="Id:" value={data.id}></Field>
      <Field label="Type:" value={data.type}></Field>
      <Field label="Status:" value={data.status}></Field>
      <div className="flex items-center justify-between flex-col">
        <div className="my-4">
          {data.status === PARKING_STATUS.AVAILABLE ? (
            <Icon icon={available} size="large" aria-hidden color="#007B5E" />
          ) : (
            <Icon icon={occupied} size="large" aria-hidden color="red" />
          )}
        </div>
        <div>
          {data.status === PARKING_STATUS.AVAILABLE ? (
            <>
              <div className="grid">
                <Button variant="secondary" onClick={handleEnterParking}>
                  Enter Parking
                </Button>
                <ModalPopup
                  handleClose={handleOpen}
                  handleSubmit={handleSubmit}
                  show={open}
                  text="Enter parking"
                >
                  <form>
                    <Input
                      label="Username:"
                      name="username"
                      placeholder="Enter a username"
                      value={userParking.username}
                      onChange={handleChange}
                    />
                    {submitted && !userParking.username && (
                      <span className="text-[#dc2a2a]">
                        Please enter a username
                      </span>
                    )}
                    <Input
                      label="Mobile number:"
                      name="mobile"
                      placeholder="Enter a mobile number"
                      type="tel"
                      value={userParking.mobile}
                      onChange={handleChange}
                    />
                    {submitted && !userParking.mobile && (
                      <span className="text-[#dc2a2a]">
                        Please enter a mobile number
                      </span>
                    )}
                    <Input
                      label="Email:"
                      name="email"
                      type="email"
                      placeholder="Enter a email"
                      value={userParking.email}
                      onChange={handleChange}
                    />
                    {submitted && !userParking.email && (
                      <span className="text-[#dc2a2a]">
                        Please enter a email
                      </span>
                    )}
                    <DatePicker
                      label="DatePicker:"
                      date={userParking.date}
                      show_input={true}
                      on_change={({ date }) => {
                        handleDateChange(date)
                      }}
                    />
                    {submitted && !userParking.date && (
                      <span className="text-[#dc2a2a]">
                        Please enter a date
                      </span>
                    )}
                    <Input
                      label="hours of parking:"
                      name="hours"
                      placeholder="Enter the parking hours"
                      value={userParking.hours}
                      onChange={handleChange}
                    />
                    {submitted && !userParking.hours && (
                      <span className=" text-[#dc2a2a]">
                        Please enter the parking hours
                      </span>
                    )}
                  </form>
                </ModalPopup>
                <div className="my-2">
                  <Button variant="secondary" onClick={handleShow}>
                    Modify Parking
                  </Button>
                  <ModalPopup
                    handleSubmit={handleModifySubmit}
                    handleClose={handleClose}
                    show={show}
                    text="Modify Parking"
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
              </div>
            </>
          ) : (
            <Button
              text="Exit Parking"
              className="my-2"
              on_click={() => {
                exitUserParking(data)
              }}
              variant="secondary"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ParkingSpot
