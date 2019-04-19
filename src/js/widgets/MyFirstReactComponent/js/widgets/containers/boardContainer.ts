import { IKanbanState } from "../store";
import { connect } from 'react-redux';
import Board from "../components/board";
import { storyDropped } from "../actions";
import { bindActionCreators, Dispatch } from "redux";
import { DropResult } from "react-beautiful-dnd";
import { IColumn } from "../models/board";

const mapStateToProps = (state: IKanbanState) => ({
  columns: state.columns
});

//TODO: try bindActionCreators: 
//const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
//  storyDropped: storyDropped,
//  }, dispatch);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  storyDropped: (result: DropResult, columns: IColumn[]) => {
    return dispatch(storyDropped(result, columns));
  }
})

export const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);