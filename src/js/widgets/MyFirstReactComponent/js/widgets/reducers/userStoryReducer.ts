import { Reducer } from 'redux'
import { UserStory } from '../models/blocks'

export const userStoryReducer: Reducer<UserStory[]> = (state = [], action) => {
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