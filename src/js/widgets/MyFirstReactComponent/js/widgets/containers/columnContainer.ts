import { KanbanState } from "../store";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import ColumnComponent from "../components/columnComponent";
import { Column } from "../models/board";
import { storyDropped } from '../actions'

interface IColumnOwnProps {
  column: Column
}

const mapStateToProps = (state: KanbanState, props: IColumnOwnProps) => {
  return ({
    column: props.column,
    columnStories: props.column.blockIds.map(i => state.userStories.filter((e) => e.id === i)[0])
  });
};

export const ColumnContainer = connect(
  mapStateToProps,
  null
)(ColumnComponent);