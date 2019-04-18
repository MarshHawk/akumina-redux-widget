//import React from 'react'
import * as React from 'react';
import styled from '@emotion/styled'
import { Draggable } from 'react-beautiful-dnd'
import { UserStory } from '../models/blocks';

//#001f3f Navy
//#7FDBFF Aqua
//#85144b Maroon
//SILVER #DDDDDD
//GRAY #AAAAAA
//BLACK #111111
//Purple #B10DC9
const StoryDiv = styled.div`
margin-bottom: 8px;
border: 12px solid #001f3f;
background-color: #7FDBFF;
border-radius: 8%;
padding: 8px;
`

const StoryTitle = styled.h3`
color: #001f3f;
`

const StoryOwner = styled.h4`
color: #001f3f;
`

const StoryPoints = styled.span`
color: #001f3f;
border: 1px #85144b;
`

interface StoryCardProps {
  story: UserStory,
  index: number
}

const StoryCard: React.SFC<StoryCardProps> = ({ story, index }) => (
    <Draggable draggableId={story.id+''} index={index}>
    {(provided) => (
        <StoryDiv ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}><StoryTitle>{story.subject}</StoryTitle>
    <StoryOwner>{story.owner}</StoryOwner>
    <StoryPoints> {story.points}</StoryPoints>
    </StoryDiv>
    )}
    </Draggable>
)

export default StoryCard