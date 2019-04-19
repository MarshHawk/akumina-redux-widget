//import React from 'react'
import * as React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "@emotion/styled";
import { UserStory } from "../models/blocks";
import StoryCard from "./storyCard";
import { Column } from "../models/board";

const ColumnDiv = styled.div`
margin: 8px;
border: 1px #111111;
width 220px;

display: flex;
flex-direction: column;
`;

const ColumnTitle = styled.h2`
padding: 8px;
color: #85144b
text-transform: uppercase;
`;

const CardsContainer = styled.div`
  padding: 8px;
  border: 1px #111111;
  flex-grow: 1;
  min-height: 100px;
`;
interface ColumnProps {
  column: Column;
  columnStories: UserStory[];
}

const ColumnComponent: React.SFC<ColumnProps> = (
  { column, columnStories },
  { storyDropped }
) => (
  <ColumnDiv>
    <ColumnTitle>{column.title}</ColumnTitle>
    <Droppable droppableId={"" + column.id}>
      {provided => (
        <CardsContainer ref={provided.innerRef} {...provided.droppableProps}>
          {columnStories.map((s, i) => (
            <StoryCard key={s.id} story={s} index={i} />
          ))}
          {provided.placeholder}
        </CardsContainer>
      )}
    </Droppable>
  </ColumnDiv>
);

export default ColumnComponent;
