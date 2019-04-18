import { Store, createStore, combineReducers } from 'redux'
import { UserStory } from './stateTypes'
import { userStoryReducer } from '../reducers/userStoryReducer'

export interface KanbanState {
    userStories: UserStory[];
  }

export function initStore(
    initialState: KanbanState
  ): Store<KanbanState> {
    
    const combinedReducer = () => combineReducers({
    userStories: userStoryReducer
  })

    const store = createStore(
        combinedReducer(),
        initialState
      )

    return store
  }