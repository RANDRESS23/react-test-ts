import { createSlice } from '@reduxjs/toolkit'
import { type Person } from '../../models'
import { LOCAL_STORAGE_KEYS } from '../../models'

const favoritesStorage = localStorage.getItem(LOCAL_STORAGE_KEYS.FAVORITES)
const initialState: Person[] = favoritesStorage !== null
  ? JSON.parse(favoritesStorage)
  : []

export const favoritesSlice = createSlice({
  name: LOCAL_STORAGE_KEYS.FAVORITES,
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const { favoritePerson } = action.payload
      const newFavorites = [...state, favoritePerson]

      localStorage.setItem(LOCAL_STORAGE_KEYS.FAVORITES, JSON.stringify(newFavorites))
      return newFavorites
    },
    removeFavorite: (state, action) => {
      const { favoritePersonId } = action.payload
      const newFavorites = state.filter(person => person.id !== favoritePersonId)

      localStorage.setItem(LOCAL_STORAGE_KEYS.FAVORITES, JSON.stringify(newFavorites))
      return newFavorites
    }
  }
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
