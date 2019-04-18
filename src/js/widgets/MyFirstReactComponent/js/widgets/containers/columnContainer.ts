import { KanbanState } from "../store";
import { connect } from 'react-redux';
import Board from "../components/board";

const mapStateToProps = (state: KanbanState) => ({
    columns: state.columns
  });
  
  
export const BoardContainer = connect(
    mapStateToProps,
    null
  )(Board);