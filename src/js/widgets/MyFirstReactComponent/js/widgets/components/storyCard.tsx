//import React from 'react'
import * as React from 'react';
import styled from '@emotion/styled'
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
border: 4px #B10DC9;
background-color: #7FDBFF;
border-radius: 16%;
padding: 8px;
`

const StoryTitle = styled.h3`
padding: 8px;
color: #001f3f;
`

const StoryOwner = styled.h4`
padding: 8px;
color: #001f3f;
`

const StoryPoints = styled.span`
padding: 4px;
color: #001f3f;
border: 1px #DDDDDD;
`

interface StoryCardProps {
  story: UserStory,
}

const StoryCard: React.SFC<StoryCardProps> = ({ story }) => (
    <StoryDiv><StoryTitle>{story.subject}</StoryTitle>
    <StoryOwner>{story.owner}</StoryOwner>
    <StoryPoints> {story.points}</StoryPoints>
    </StoryDiv>
)

export default StoryCard