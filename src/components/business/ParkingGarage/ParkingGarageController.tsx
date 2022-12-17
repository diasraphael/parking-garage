import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { setGarageTemplate } from '../../../redux/garageSlice'
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
  useEffect(() => {
    async function getGarageTemplate() {
      const garageTemplate: GarageTemplate | undefined = await getTemplate()
      dispatch(setGarageTemplate(garageTemplate))
    }
    getGarageTemplate()
  }, [dispatch])

  if (!template) {
    return <></>
  }

  return <ParkingGarage template={template.parkingGarage}></ParkingGarage>
}

export default ParkingGarageController
