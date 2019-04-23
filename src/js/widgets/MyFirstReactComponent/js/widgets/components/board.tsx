import * as React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { IColumn } from "../models/board";
import styled from "@emotion/styled";
import "@atlaskit/css-reset";
import { ColumnContainer } from "../containers/columnContainer";
import { ManagerContainer } from "../containers/managerContainer";

//#001f3f Navy
//#7FDBFF Aqua
//#85144b Maroon
//SILVER #DDDDDD
//GRAY #AAAAAA
//BLACK #111111
//Purple #B10DC9
const BoardStyle = styled.div`
  border: 2px solid #aaaaaa;
  background-color: #dddddd;
`;

const BoardTitle = styled.h1`
  text-align: center;
  color: #001f3f !important;
`;

const ManagerBoardContainer = styled.div`

`;

const CardBoardContainer = styled.div`
  display: flex;
`;

interface BoardProps {
  columns: IColumn[];
  storyDropped: (result: DropResult, columns: IColumn[]) => void;
}

const Board: React.SFC<BoardProps> = ({ columns, storyDropped }) => (
  <DragDropContext onDragEnd={result => storyDropped(result, columns)}>
    <BoardStyle>
      <BoardTitle>Kanban POC</BoardTitle>
      <ManagerBoardContainer><ManagerContainer /></ManagerBoardContainer>
      <CardBoardContainer>
        {columns.map((c, i) => (
          <ColumnContainer key={c.id} column={c} />
        ))}
      </CardBoardContainer>
    </BoardStyle>
  </DragDropContext>
);

export default Board;
