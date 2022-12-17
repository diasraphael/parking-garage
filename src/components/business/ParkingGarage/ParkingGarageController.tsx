import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  getSelectedParkingFloor,
  setGarageTemplate
} from '../../../redux/garageSlice'
import { useDispatch } from '../../../redux/hooks'
import { RootState } from '../../../redux/store'
import { getTemplate } from './api'
import ParkingGarage from './ParkingGarage'
import { GarageTemplate } from './serviceData'

const ParkingGarageController = () => {
  const dispatch = useDispatch()
  const template = useSelector(
    (state: RootState) => state.parkings.garageTemplate
  )
  const selectedParkingFloor = useSelector(
    (state: RootState) => state.parkings.selectedParkingFloor
  )
  const [selectedFloor, setSelectedFloor] = useState<string | undefined>('')
  useEffect(() => {
    async function getGarageTemplate() {
      const garageTemplate: GarageTemplate | undefined = await getTemplate()
      dispatch(setGarageTemplate(garageTemplate))
      setSelectedFloor(garageTemplate?.parkingGarage.parkingFloors[0].id)
      dispatch(
        getSelectedParkingFloor(
          garageTemplate?.parkingGarage.parkingFloors[0].id
        )
      )
    }
    getGarageTemplate()
  }, [dispatch])

  if (!template) {
    return <></>
  }

  return (
    <ParkingGarage
      template={template.parkingGarage}
      selectedFloor={selectedFloor}
      setSelectedFloor={setSelectedFloor}
      selectedParkingFloor={selectedParkingFloor}
    ></ParkingGarage>
  )
}

export default ParkingGarageController
