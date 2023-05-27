import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import _ from 'lodash/fp'

const StyledContainer = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  width: 90%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  position: absolute;
  top: -10%;
  ${({ backgroundimage, position }) => `
  background-image: url('${backgroundimage}');
  left: ${position};
`}
`

const StyledCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(143, 180, 255, 0.7);
`

const StyledIcon = styled.div`
  background-color: rgba(255, 168, 0, 1);
  font-size: 30px;
  line-height: 60px;
  color: white;
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;


  cursor: pointer;
  border-radius: 50%;
  transition: transform 200ms ease 0s, height 200ms ease 0s, width 200ms ease 0s,
    margin 200ms ease 0s, border-radius 200ms ease 0s;
  &:hover {
    transform: scale(1.2);
  }
`
const StyledSliderContainer = styled.div`
  display: flex;
  transition: transform 800ms ease 0s;
  align-self: flex-start;
  width: 100%;
  position: relative;
`
const ToolSlider = (serie) => {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)

  useEffect(() => {
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
    const delay = 3000
    if (index < serie.length - 1) {
      timeoutRef.current = setTimeout(() => setIndex(prevIndex => prevIndex + 1), delay)
    }
    return () => {
      if (index < serie.length - 1) {
        resetTimeout()
      }
    }
  }, [index, serie.length])

  return (
    <>
      <StyledSliderContainer style={{ transform: `translate3d(${-index * 110}%, 0, 0)` }}>
        {serie.images.map((element, index) => {
          return (
            <StyledContainer
              backgroundimage={element.background}
              position={element.position}
              key={index}>
              <StyledCircle>
                <StyledIcon>
                  <img src={element}  alt={element} />
                </StyledIcon>
              </StyledCircle>
            </StyledContainer>
          )
        })}
      </StyledSliderContainer>
    </>
  )
}

export default ToolSlider

