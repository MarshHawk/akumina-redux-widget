import { IKanbanState } from "../store";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import ColumnComponent from "../components/columnComponent";
import { IColumn } from "../models/board";

interface IColumnOwnProps {
  column: IColumn
}

const mapStateToProps = (state: IKanbanState, props: IColumnOwnProps) => {
  return ({
    column: props.column,
    columnStories: props.column.blockIds.map(i => state.userStories.filter((e) => e.id === i)[0])
  });
};

export const ColumnContainer = connect(
  mapStateToProps,
  null
)(ColumnComponent);