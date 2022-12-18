import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  getSelectedParkingFloorId,
  setDisplayParkingSpacesBySelection,
  setGarageTemplate
} from '../../../redux/garageSlice'
import { useDispatch } from '../../../redux/hooks'
import { RootState } from '../../../redux/store'
import { getTemplate } from './api'
import ParkingGarage from './ParkingGarage'
import { GarageTemplate } from '../../../model/serviceData'
import { DISPLAY_AVAILABLE_SPACES } from './types'

const ParkingGarageController = () => {
  const dispatch = useDispatch()
  const template = useSelector(
    (state: RootState) => state.parkings.garageTemplate
  )
  const selectedParkingFloorId = useSelector(
    (state: RootState) => state.parkings.selectedParkingFloorId
  )
  const displayParkingSpacesBySelection = useSelector(
    (state: RootState) => state.parkings.displayParkingSpacesBySelection
  )
  const displayParkingSpacesByOptions = [
    {
      selected_key: DISPLAY_AVAILABLE_SPACES.BY_FLOOR,
      selected_value: 'Availability in the floor',
      content: 'Availability in the floor'
    },
    {
      selected_key: DISPLAY_AVAILABLE_SPACES.BY_ALL_FLOOR,
      selected_value: 'Availability in all floors',
      content: 'Availability in all floors'
    }
  ]
  const getSelectedFloor = (value: string) => {
    dispatch(getSelectedParkingFloorId(value))
  }
  const getDisplayParkingSpacesBySelection = (value: string) => {
    dispatch(setDisplayParkingSpacesBySelection(value))
  }
  useEffect(() => {
    async function getGarageTemplate() {
      const garageTemplate: GarageTemplate | undefined = await getTemplate()
      dispatch(setGarageTemplate(garageTemplate))
      dispatch(
        getSelectedParkingFloorId(
          garageTemplate?.parkingGarage.parkingFloors[0].id
        )
      )
      dispatch(
        setDisplayParkingSpacesBySelection(DISPLAY_AVAILABLE_SPACES.BY_FLOOR)
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
      selectedFloor={selectedParkingFloorId}
      getSelectedFloor={getSelectedFloor}
      displayParkingSpacesBySelection={displayParkingSpacesBySelection}
      displayParkingSpacesByOptions={displayParkingSpacesByOptions}
      getDisplayParkingSpacesBySelection={getDisplayParkingSpacesBySelection}
    />
  )
}

export default ParkingGarageController
