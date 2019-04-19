import { action } from 'typesafe-actions'
import constants from '../constants/actionTypes'
import { DropResult } from 'react-beautiful-dnd';
import { Column } from '../models/board';

export const storyDropped = (result: DropResult, column: Column) => action(constants.STORY_DROPPED, {result, column})
//export const selectTeam = (result: DropResult) => action(TeamsActionTypes.SELECT_TEAM, team_id)