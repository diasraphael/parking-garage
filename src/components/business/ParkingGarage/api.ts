import axios from 'axios'
import { GarageTemplate } from '../../../model/serviceData'

export const getTemplate = async (): Promise<GarageTemplate | undefined> => {
  try {
    const { data } = await axios.get('./mocks/garageTemplate.json')
    return data
  } catch (error: unknown) {
    if (error instanceof Error)
      throw new Error(
        `Parking Garage Template fetch failed, please try again late: ${error.message}`
      )
  }
  return undefined
}
