import { Reducer } from 'redux'
import { Column } from '../models/board'
import constants from '../constants/actionTypes'

export const columnsReducer: Reducer<Column[]> = (state = [], action) => {
    switch (action.type) {
      case constants.STORY_DROPPED: {
        const {destination, source, draggableId} = action.payload.result;
        console.log(draggableId);
        const swap = (blockIds: number[]) => {
          let newIds = [...blockIds.slice(0, source.index), ...blockIds.slice(source.index + 1)]
          newIds.splice(destination.index, 0, parseInt(draggableId));
          return newIds;
        };
        return [...state.map(c => c.id == source.droppableId ? 
          {...c, blockIds: swap(c.blockIds)} : 
          c)]
      }
      default: {
        return state
      }
    }
  }