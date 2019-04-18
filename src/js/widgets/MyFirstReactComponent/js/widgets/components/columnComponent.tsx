//import React from 'react'
import * as React from 'react';
import { Column } from '../models/board';
import styled from '@emotion/styled'
import { UserStory } from '../models/blocks';

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

const ColumnTitle = styled.h3`
padding: 8px;
color: #DDDDDD
text-transform: uppercase;
`

const CardsContainer = styled.div`
padding: 8px;
border: 1px #111111;
`

interface ColumnProps {
    column: Column,
    //stories: UserStory[]
  }

const ColumnComponent: React.SFC<ColumnProps> = ({ column }) => (
    <ColumnDiv><ColumnTitle>{column.title}</ColumnTitle><CardsContainer></CardsContainer></ColumnDiv>
)

export default ColumnComponent