//import React from 'react'
import * as React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from '@emotion/styled'
import { UserStory } from '../models/blocks';
import StoryCard from './storyCard';
import { Column } from '../models/board';

//#001f3f Navy
//#7FDBFF Aqua
//#85144b Maroon
//SILVER #DDDDDD
//GRAY #AAAAAA
//BLACK #111111
//Purple #B10DC9
const ColumnDiv = styled.div`
margin: 8px;
border: 1px #111111;
border-radius: 8%;
`

const ColumnTitle = styled.h2`
padding: 8px;
color: #85144b
text-transform: uppercase;
`

const CardsContainer = styled.div`
padding: 8px;
border: 1px #111111;
`
interface ColumnProps {
  column: Column,
  columnStories: UserStory[]
}

const ColumnComponent: React.SFC<ColumnProps> = ({ column, columnStories }) => (
    <ColumnDiv>
    <ColumnTitle>{column.title}</ColumnTitle>
    <Droppable droppableId={''+column.id}>
    {provided => (
    <CardsContainer ref={provided.innerRef} {...provided.droppableProps}>
    {columnStories.map((s, i) => <StoryCard key={s.id} story={s} index={i} />)}
    {provided.placeholder}
    </CardsContainer>
    )}
    </Droppable>
    </ColumnDiv>
)

export default ColumnComponent