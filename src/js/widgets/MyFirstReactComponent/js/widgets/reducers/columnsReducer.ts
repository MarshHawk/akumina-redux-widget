import { Reducer } from 'redux'
import { Column } from '../models/board'
import constants from '../constants/actionTypes'

export const columnsReducer: Reducer<Column[]> = (state = [], action) => {
  switch (action.type) {
    case constants.STORY_DROPPED: {
      const { destination, source, draggableId } = action.payload.result;
      //Go time
      let daId = parseInt(draggableId);

      const swap = (blockIds: number[]) => {
        let newIds = [...blockIds.slice(0, source.index), ...blockIds.slice(source.index + 1)]
        newIds.splice(destination.index, 0, daId);
        return newIds;
      };

      const swapBetween = (startBlockIds: number[], finishBlockIds: number[]) => {
        let newIds = [...startBlockIds.slice(0, source.index), ...startBlockIds.slice(source.index + 1)]
        finishBlockIds.splice(destination.index, 0, daId);
        return newIds;
      };

      return source.droppableId == destination.droppableId ? [...state.map(c => c.id == source.droppableId ?
        { ...c, blockIds: swap(c.blockIds) } : c)] : [...state.map(c => c.id == source.droppableId ?
          { ...c, blockIds: swapBetween(c.blockIds, state.filter(c => c.id == destination.droppableId)[0].blockIds) } : c)];
    }
    default: {
      return state
    }
  }
}