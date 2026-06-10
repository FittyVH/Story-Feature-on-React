import React, { useState, useRef } from "react";
import styled from "styled-components";
import Story from "./Story";

const StoryBar = () => {
  const [stories, setStories] = useState([]);

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file); // Convert local file to Base64 data string

      reader.onloadend = () => {
        const base64Image = reader.result;

        // Add a brand new story object into our array with its unique data
        setStories((prevStories) => [
          ...prevStories,
          { id: Date.now(), image: base64Image },
        ]);
      };
    }

    // Clear value so the user can upload the exact same image twice in a row if they want
    e.target.value = "";
  };

  const addStories = () => setNoOfStories((prev) => prev + 1);

  return (
    <StoryBarContainer>
      <AddStoryButton onClick={handleButtonClick}>
        <img src="/Icons/story-svgrepo-com.svg" alt="add story" />
      </AddStoryButton>
      <input type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{display: "none"}} 
      />
      
      {stories.map((story) => (
        <Story key={story.id} coverImage={story.image} />
      ))}
    </StoryBarContainer>
  );
};

export default StoryBar;

const StoryBarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 110px;
  padding: 0 1rem;
  gap: 1rem;
  background-color: #ffffff;
  border-bottom: 1px solid #efefef;
  overflow-x: auto;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const AddStoryButton = styled.button`
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
    border: 2px solid #dbdbdb;
    padding: 2px;
  }
`;
