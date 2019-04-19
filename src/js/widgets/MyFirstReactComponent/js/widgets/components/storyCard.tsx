import * as React from 'react';
import styled from '@emotion/styled'
import { Draggable } from 'react-beautiful-dnd'
import { UserStory } from '../models/blocks';

const StoryDiv = styled.div`
margin-bottom: 8px;
border: 2px solid #001f3f;
background-color: #7FDBFF;
border-radius: 4%;
padding: 16px;
`

const StoryTitle = styled.h3`
color: #001f3f;
text-align: center;
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