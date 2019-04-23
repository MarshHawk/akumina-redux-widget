//import React from 'react'
import * as React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { IColumn } from "../models/board";
import styled from "@emotion/styled";
import "@atlaskit/css-reset";

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

interface ManagerProps {
  handleClick: () => void
  //storyDropped: (result: DropResult, columns: IColumn[]) => void;
}

const Manager: React.SFC<ManagerProps> = ({ handleClick }) => (
      <form>
        <div>
        <div className="header">Management client</div>
        <div className="container-fluid modal-body">
        <div className="col-sm-6 spbefore">
          <label className="text-color-active-1">Graph actions</label>
          <button className="float-right" onClick={event => handleClick()} type="button" name="userStoryInput" id="someButton">Click Me</button>
        </div>
        </div>
        </div>
    </form>
);

export default Manager;
