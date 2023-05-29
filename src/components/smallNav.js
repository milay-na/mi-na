import React , { useCallback, useState}from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { mediaMinMax, BREAKPOINT_XS, BREAKPOINT_SM, StyledLogo } from '../utils/style';


const StyledNavContainer = styled.div`
grid-column: 1;
 width: 100%;
 margin-right: 10px;
`

const StyledNav = styled.div`
margin-top: 30px;
`

const StyledListItem = styled.p`
${mediaMinMax({
  min: BREAKPOINT_XS,
  max: BREAKPOINT_SM - 1,
  style: `
  display: none;
  `
})
}
width: 100%;
font-family: "CrimsonPro";
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 20px;
&:hover {
    color: #AB1879;
    cursor:pointer;
  }
`

const StyledSubNav = styled.p`
margin-left: 10px;`

const SmallNav = () => {
    let history = useHistory();

  const homeClick = useCallback(() => history.push("/home"), [history])
  const aboutClick = useCallback(() => history.push("/about"), [history])
  const contactClick = useCallback(() => history.push("/contact"), [history])
  const nightLifeClick = useCallback(() => history.push("/nightlife"), [history])
  const neitherClick = useCallback(() => history.push("/NeitherHereNorThere"), [history])
  const outClick = useCallback(() => history.push("/out"), [history])
  const sevenClick = useCallback(() => history.push("/sept"), [history])
  const springClick = useCallback(() => history.push("/spring"), [history])
  const [showMenu, setshowMenu] = useState("false");
  const toggle = () => setshowMenu(!showMenu);

  
    return (
     <>
     <StyledNavContainer>
        <StyledLogo>Mi & Na</StyledLogo>
            <StyledNav>
                <StyledListItem className='nav' onClick={homeClick} >Home</StyledListItem>
                <StyledListItem className='nav' onClick={toggle}>Photography</StyledListItem>
                
               {showMenu &&  <StyledSubNav>
                    <StyledListItem className='nav' onClick={outClick} >Out</StyledListItem>
                    <StyledListItem className='nav' onClick={nightLifeClick} >Night life</StyledListItem>
                    <StyledListItem className='nav' onClick={sevenClick} >Le Sept</StyledListItem>
                    <StyledListItem className='nav' onClick={neitherClick} > neither here nor there</StyledListItem>
                    <StyledListItem className='nav' onClick={springClick} > Spring</StyledListItem>
                </StyledSubNav>}
                <StyledListItem className='nav'onClick={aboutClick}>About</StyledListItem>
                <StyledListItem className='nav' onClick={contactClick}>Contact</StyledListItem>
            </StyledNav>
        </StyledNavContainer>
        </>
    )
  }
  
  export default SmallNav