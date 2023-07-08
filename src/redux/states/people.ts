import { createSlice } from '@reduxjs/toolkit/dist/createSlice'
import { type Person } from '../../models'

const initialState = localStorage.getItem('people')
  ? JSON.parse(localStorage.getItem('people')) as string
  : []

// FIXING THIS FILE

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    addPerson: (state, action) => {

    }
  }
})
