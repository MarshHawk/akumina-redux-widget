//import React from 'react'
import * as React from 'react';
import { Column } from '../models/board';

interface BoardProps {
  columns: Column[]
}

const Board: React.SFC<BoardProps> = ({ columns }) => (
  <div>{columns.map((c, i) => <span>{c.title}</span>)}</div>
)

export default Board