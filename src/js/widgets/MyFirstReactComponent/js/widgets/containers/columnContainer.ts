import { KanbanState } from "../store";
import { connect } from 'react-redux';
import ColumnComponent from "../components/columnComponent";
import { Column } from "../models/board";

interface ColumnOwnProps {
    column: Column
  }

const mapStateToProps = (state: KanbanState, props: ColumnOwnProps) => {
    return ({
        columnTitle: props.column.title,
        columnStories: props.column.blockIds.map(i => state.userStories.filter((e) => e.id === i)[0])
    });
};
  
  
export const ColumnContainer = connect(
    mapStateToProps,
    null
  )(ColumnComponent);