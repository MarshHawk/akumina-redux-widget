import { Reducer } from 'redux'
import { Column } from '../models/board'
import constants from '../constants/actionTypes'

export const columnsReducer: Reducer<Column[]> = (state = [], action) => {
    switch (action.type) {
      case constants.STORY_DROPPED: {
        const {destination, source, draggableId} = action.payload.result;
        console.log(JSON.stringify(action.payload));
        return [...state.map(c => c.id === source.droppableId ? {...c, blockIds: c.blockIds} : c)]
      }
      default: {
        return state
      }
    }
  }