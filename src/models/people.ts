export interface Person {
  id: number
  name: string
  category: string
  'category-image': string
  company: string
  'company-image': string
  levelOfHappiness: number
}

export enum LOCAL_STORAGE_KEYS {
  PEOPLE = 'people',
  FAVORITES = 'favorites'
}
