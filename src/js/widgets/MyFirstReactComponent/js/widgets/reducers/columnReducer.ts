import { Reducer } from 'redux'
import { Column } from '../models/board'

export const columnReducer: Reducer<Column[]> = (state = [], action) => {
    switch (action.type) {
      case "TODO": {
        return state
      }
      case "ANOTHER_ACTION_TODO": {
        return state
      }
      default: {
        return state
      }
    }
  }