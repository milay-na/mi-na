import React from 'react'
import styled from 'styled-components'



const StyledSerieContainer = styled.div`
display: flex;
flex-direction: column;
grid-column-start: 2;
grid-column-end: span 3;
align-items: center;
`


const StyledImageContainer = styled.div`
 ${({ backgroundimage /*, position */}) => `
  background-image: url('${backgroundimage}');
  background-size: contain;
  margin: 2px;
  width: 90%;
  height: auto;
`}

`
const StyledImage = styled.img`
  width: 100%;
  
`


const Serie = ({...serie}) => {



  return (
    <StyledSerieContainer>
  {serie.images.map((element, index) => {
    return (
      
        <StyledImageContainer
        // backgroundimage={element}
        key={index}>
          <StyledImage src={element} alt="m" key={index}></StyledImage>
          </StyledImageContainer>
    )
  })}
  </StyledSerieContainer>
    )
  
}
  
  export default Serie