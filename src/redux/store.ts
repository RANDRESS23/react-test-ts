import { configureStore } from '@reduxjs/toolkit'
import { type Person } from '../models'

export interface AppStore {
  people: Person[]
}

export default configureStore<AppStore>({

})
