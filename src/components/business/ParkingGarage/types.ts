export enum PARKING_SPOT {
  COMPACT = 'COMPACT',
  LARGE = 'LARGE',
  HANDICAPPED = 'HANDICAPPED',
  MOTORCYCLE = 'MOTORCYCLE'
}

export enum PARKING_STATUS {
  AVAILABLE = 'AVAILABLE',
  OCCUPIED = 'OCCUPIED'
}

export type DisplayParkingSpacesByOptions = {
  selected_key: DISPLAY_AVAILABLE_SPACES
  selected_value: string
  content: string
}
export enum DISPLAY_AVAILABLE_SPACES {
  BY_FLOOR = 'BY_FLOOR',
  BY_ALL_FLOOR = 'BY_ALL_FLOOR'
}
