import { KanbanState } from "../store";
import { connect } from 'react-redux';
import ColumnComponent from "../components/columnComponent";
import { Column } from "../models/board";

const mapStateToProps = (state: KanbanState, props: Column) => ({
    columnTitle: props.title,
    columnStories: props.blockIds.map(i => state.userStories.filter((e) => e.id === i)[0])
  });
  
  
export const ColumnContainer = connect(
    mapStateToProps,
    null
  )(ColumnComponent);