import React from 'react'
import styled from 'styled-components'

const Story = ({coverImage}) => {
  return (
    <StoryButton>
        <img src={coverImage || "/Icons/ghost-svgrepo-com.svg"} alt="" />
    </StoryButton>
  )
}

export default Story

const StoryButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.1s ease-in-out;

  &:active {
    transform: scale(0.95);
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid #ff0000;
    padding: 2px;
  }
`