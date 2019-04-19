import { action } from 'typesafe-actions'
import constants from '../constants/actionTypes'
import { DropResult } from 'react-beautiful-dnd';
import { IColumn } from '../models/board';

export const storyDropped = (result: DropResult, columns: IColumn[]) => action(constants.STORY_DROPPED, { result, columns })