import { configureStore } from '@reduxjs/toolkit'
import { type Person } from '../models'
import peopleSlice from './states/people'
import favoritesSlice from './states/favorites'

export interface AppStore {
  people: Person[]
  favorites: Person[]
}

export const store = configureStore<AppStore>({
  reducer: {
    people: peopleSlice,
    favorites: favoritesSlice
  }
})
