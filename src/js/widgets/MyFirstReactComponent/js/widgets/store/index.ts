import { Store, createStore, combineReducers } from 'redux'
import * as MicrosoftGraph from "@microsoft/microsoft-graph-types"
import * as Akumina from "akumina-core";
import { IUserStory } from '../models/blocks'
import { IColumn } from '../models/board'
import { userStoryReducer } from '../reducers/userStoryReducer'
import { columnsReducer } from '../reducers/columnsReducer'
import { userSuggestsReducer } from '../reducers/userSuggestsReducer'

export interface IKanbanState {
  userStories: IUserStory[];
  columns: IColumn[];
  userSuggests: MicrosoftGraph.User[];
  //TODO: Graph API in context graphApi: AkMsGraphApi
}

export function initStore(
  initialState: IKanbanState
): Store<IKanbanState> {

  const combinedReducer = () => combineReducers({
    userStories: userStoryReducer,
    columns: columnsReducer,
    userSuggests: userSuggestsReducer,
    //graphApi: new AkMsGraphApi(Akumina.Digispace.ConfigurationContext.InterchangeURL, Akumina.Digispace.ConfigurationContext.InterchangeQueryKey)
  })

  const store = createStore(
    combinedReducer(),
    initialState
  )

  return store
}

//TODO: Clean up suggests

/* function userSuggestsReducer(state = initial.search, action) {
  const handler = handlers.search[action.type];
  if (!handler) { return state; }
  return handler(state, action);
}
 */

