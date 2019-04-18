//import React from 'react'
import * as React from 'react';
import { Column } from '../models/board';
import styled from '@emotion/styled'
import { UserStory } from '../models/blocks';
import StoryCard from './storyCard';

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
`

const ColumnTitle = styled.h2`
padding: 8px;
color: #DDDDDD
text-transform: uppercase;
`

const CardsContainer = styled.div`
padding: 8px;
border: 1px #111111;
`
interface ColumnProps {
  columnTitle: string,
  columnStories: UserStory[]
}

const ColumnComponent: React.SFC<ColumnProps> = ({ columnTitle, columnStories }) => (
    <ColumnDiv
    ><ColumnTitle>{columnTitle}</ColumnTitle>
    <CardsContainer>{columnStories.map(s => <StoryCard key={s.id} story={s} />)}</CardsContainer>
    </ColumnDiv>
)

export default ColumnComponent