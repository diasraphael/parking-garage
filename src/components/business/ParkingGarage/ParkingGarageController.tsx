import React, { useEffect, useState } from 'react'
import { getTemplate } from './api'
import { GarageTemplate } from './serviceData'

const ParkingGarageController = () => {
  const [template, setTemplate] = useState<GarageTemplate | undefined>()

  useEffect(() => {
    async function getGarageTemplate() {
      const garageTemplate: GarageTemplate | undefined = await getTemplate()
      console.log(garageTemplate)
      setTemplate(garageTemplate)
    }
    getGarageTemplate()
  }, [])

  if (!template) {
    return <></>
  }

  return <div>ParkingGarageController</div>
}

export default ParkingGarageController
