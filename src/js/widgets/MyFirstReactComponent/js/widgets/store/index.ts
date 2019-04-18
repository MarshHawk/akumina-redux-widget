import { Store, createStore, combineReducers } from 'redux'
import { UserStory } from '../models/blocks'
import { Column } from '../models/board'
import { userStoryReducer } from '../reducers/userStoryReducer'
import { columnReducer } from '../reducers/columnReducer'

export interface KanbanState {
    userStories: UserStory[];
    columns: Column[];
  }

export function initStore(
    initialState: KanbanState
  ): Store<KanbanState> {
    
    const combinedReducer = () => combineReducers({
    userStories: userStoryReducer,
    columns: columnReducer
  })

    const store = createStore(
        combinedReducer(),
        initialState
      )

    return store
  }