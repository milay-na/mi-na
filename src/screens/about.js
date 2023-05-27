import React from 'react';
import styled from 'styled-components'

const StyledAboutContainer =styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;`

const StyledImage = styled.img`
width: 30%; 
height: auto;
`

const StyledTitle = styled.h1`
text-align:center;`

const StyledText = styled.p`
text-align:center;`


const About = () => {
   
    return (
      <> 
      <StyledAboutContainer>
      <StyledImage src="img/mi.jpg" alt="presentation-image"></StyledImage>
      <StyledTitle className="logo-font">Mi</StyledTitle>
      <StyledText className="regular">lorem ipsum dolor sit amet, consectetur adipiscing</StyledText>
      </StyledAboutContainer>
      </>
    )
  }
  
  export default About
  