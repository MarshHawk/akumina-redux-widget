import { Store, createStore, combineReducers } from 'redux'
import { IUserStory } from '../models/blocks'
import { IColumn } from '../models/board'
import { userStoryReducer } from '../reducers/userStoryReducer'
import { columnsReducer } from '../reducers/columnsReducer'

export interface IKanbanState {
  userStories: IUserStory[];
  columns: IColumn[];
}

export function initStore(
  initialState: IKanbanState
): Store<IKanbanState> {

  const combinedReducer = () => combineReducers({
    userStories: userStoryReducer,
    columns: columnsReducer
  })

  const store = createStore(
    combinedReducer(),
    initialState
  )

  return store
}