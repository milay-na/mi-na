import React from 'react'
import styled from 'styled-components'



const StyledSerieContainer = styled.div`
display: flex;
flex-direction: column;
grid-column-start: 2;
grid-column-end: span 3;
// flex-wrap: wrap;
align-items: center;
/* background-position: cover; */
/* &:last-child {align-self: flex-start;} */
// width: 100%;
// align-content: space-around;
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