import { createSlice } from '@reduxjs/toolkit'
import { type Person } from '../../models'
import { LOCAL_STORAGE_KEYS } from '../../models'
import { PEOPLE } from '../../data/people'

const peopleStorage = localStorage.getItem(LOCAL_STORAGE_KEYS.PEOPLE)
const initialState: Person[] = peopleStorage !== null
  ? JSON.parse(peopleStorage)
  : PEOPLE

export const peopleSlice = createSlice({
  name: LOCAL_STORAGE_KEYS.PEOPLE,
  initialState,
  reducers: {
    addPerson: (state, action) => {
      const { newPerson } = action.payload
      const newPeople = [...state, newPerson]

      localStorage.setItem(LOCAL_STORAGE_KEYS.PEOPLE, JSON.stringify(newPeople))
      return newPeople
    },
    removePerson: (state, action) => {
      const { personId } = action.payload
      const newPeople = state.filter(person => person.id !== personId)

      localStorage.setItem(LOCAL_STORAGE_KEYS.PEOPLE, JSON.stringify(newPeople))
      return newPeople
    }
  }
})

export const { addPerson, removePerson } = peopleSlice.actions
export default peopleSlice.reducer
