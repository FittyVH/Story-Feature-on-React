import React from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StoryPreview = ({image, isOpen, onClose}) => {
  if(!isOpen) return null

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <StoryContainer>
        <Header>
          <ProgressBarContainer>
            <ProgressBar />
          </ProgressBarContainer>
          <CloseButton onClick={onClose}>x</CloseButton>
        </Header>
        <StoryImage src={image} alt="Story" />
      </StoryContainer>
    </Overlay>,
    document.getElementById("portal")
  )
}

export default StoryPreview

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const StoryContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 450px;
  height: 90vh;
  background-color: #000;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center; 

  @media (max-width: 480px) {
    height: 100vh;
    max-width: none;
    border-radius: 0;
  }
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px;
  z-index: 10;
  background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 100%);
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 2px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;       
  right: 15px;     
  background: none;
  border: none;
  color: #ffffff;
  font-size: 28px; 
  line-height: 1;
  cursor: pointer;
  opacity: 0.85;
  z-index: 20;     

  &:hover {
    opacity: 1;
  }
`;

const StoryImage = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: contain;
`;