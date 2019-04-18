import { Reducer } from 'redux'
import { UserStory } from '../store/stateTypes'

export const initialStory: UserStory = {
    id: 0,
    is_blocked: false,
    is_closed: false,
    subject: "Create kanban widget",
    owner: "Sean Glover",
    project: 0,
    epic: 0,
    points: 3,
    status: 1
}

export const userStoryReducer: Reducer<UserStory[]> = (state = [initialStory], action) => {
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