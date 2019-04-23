import { Reducer } from 'redux'
import * as MicrosoftGraph from "@microsoft/microsoft-graph-types"

export const userSuggestsReducer: Reducer<MicrosoftGraph.User[]> = (state = [], action) => {
  switch (action.type) {
    case "TODO": {
      return state
    }
    default: {
      return state
    }
  }
}