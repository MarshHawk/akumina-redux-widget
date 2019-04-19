//import React from 'react'
import * as React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { Column } from '../models/board';
import styled from '@emotion/styled'
import '@atlaskit/css-reset';
import { ColumnContainer } from '../containers/columnContainer';

//#001f3f Navy
//#7FDBFF Aqua
//#85144b Maroon
//SILVER #DDDDDD
//GRAY #AAAAAA
//BLACK #111111
//Purple #B10DC9
const BoardStyle = styled.div`
border: 2px solid #AAAAAA;
background-color: #DDDDDD;
border-radius: 8%;
`

const BoardTitle = styled.h1`
text-align: center;
color:#001f3f!important;
`

interface BoardProps {
  columns: Column[],
  storyDropped: (result: DropResult, columns: Column[]) => void;
}

const Board: React.SFC<BoardProps> = ({ columns, storyDropped }) => (
  <DragDropContext onDragEnd={(result) => storyDropped(result, columns)}>
  <BoardStyle><BoardTitle>Kanban POC</BoardTitle>{columns.map((c, i) => <ColumnContainer key={c.id} column={c} />)}</BoardStyle>
  </DragDropContext>
)

export default Board