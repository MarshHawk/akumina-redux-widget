import { KanbanState } from "../store";
import { connect } from 'react-redux';
import Board from "../components/board";
import { storyDropped } from "../actions";
import { bindActionCreators, Dispatch } from "redux";
import { DropResult } from "react-beautiful-dnd";
import { Column } from "../models/board";

const mapStateToProps = (state: KanbanState) => ({
    columns: state.columns
  });

//const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
//  storyDropped: storyDropped,
//  }, dispatch);

  const mapDispatchToProps = (dispatch: Dispatch) => ({
    storyDropped: (result: DropResult, columns: Column[]) => {
      return dispatch(storyDropped(result,columns));
    }
  })

export const BoardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Board);