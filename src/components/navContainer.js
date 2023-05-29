import React , { useState}from 'react'
import styled from 'styled-components'
import { mediaMinMax, BREAKPOINT_XS, BREAKPOINT_SM, BREAKPOINT_LG, StyledLogo } from '../utils/style';
import Nav from './nav';

const StyledNavXS = styled(Nav)`
${mediaMinMax({
  min: BREAKPOINT_SM,
  max: BREAKPOINT_LG - 1,
  style: `
  display:none;
  `
})
}
background-color:grey;
`

const StyledNavSM = styled(Nav)`

${mediaMinMax({
  min: BREAKPOINT_XS,
  max: BREAKPOINT_SM - 1,
  style: `
  display: none;
  `
})
}
background-color: blue;

`


const StyledNavContainer = styled.div`
grid-column: 1;
 width: 100%;
 margin-right: 10px;
`

const StyledNavHeader = styled.p`
display: flex;
`
const StyledMenu = styled.p`
${mediaMinMax({
    min: BREAKPOINT_SM,
    max: BREAKPOINT_LG - 1,
    style: `
    display: none;
    `
  })
  }
  `


const NavContainer = () => {


  const [showMenu, setshowMenu] = useState(false);
  const toggleMenu = () => setshowMenu(!showMenu);

  
    return (
     <>
     <StyledNavContainer>
     <StyledNavHeader>
                    <StyledLogo> Mi & Na</StyledLogo>
                    <StyledMenu onClick={toggleMenu}> Menu </StyledMenu>
                </StyledNavHeader>
      <StyledNavSM></StyledNavSM>
      {showMenu &&  <StyledNavXS></StyledNavXS>}
        


        </StyledNavContainer>
        </>
    )
  }
  
  export default NavContainer