import { Reducer } from 'redux'
import { IUserStory } from '../models/blocks'

export const userStoryReducer: Reducer<IUserStory[]> = (state = [], action) => {
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