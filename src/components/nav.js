import React , { useCallback, useState}from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { mediaMinMax, BREAKPOINT_XS, BREAKPOINT_SM} from '../utils/style';


const StyledContainer = styled.div`
margin-top: 30px;
`

const StyledListItem = styled.p`
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
margin-left: 10px;
`



const Nav = ({className}) => {
    let history = useHistory();

  const homeClick = useCallback(() => history.push("/home"), [history])
  const aboutClick = useCallback(() => history.push("/about"), [history])
  const contactClick = useCallback(() => history.push("/contact"), [history])
  const nightLifeClick = useCallback(() => history.push("/nightlife"), [history])
  const neitherClick = useCallback(() => history.push("/NeitherHereNorThere"), [history])
  const outClick = useCallback(() => history.push("/out"), [history])
  const sevenClick = useCallback(() => history.push("/sept"), [history])
  const springClick = useCallback(() => history.push("/spring"), [history])

  const [showSubMenu, setshowSubMenu] = useState(false);
  const toggleSubMenu = () => setshowSubMenu(!showSubMenu);



  
    return (
     <>
            <StyledContainer className={className} > 
                <StyledListItem  onClick={homeClick} >Home</StyledListItem>
                <StyledListItem  onClick={toggleSubMenu}>Photography</StyledListItem>
                
               {showSubMenu &&  <StyledSubNav>
                    <StyledListItem  onClick={outClick} >Out</StyledListItem>
                    <StyledListItem  onClick={nightLifeClick} >Night life</StyledListItem>
                    <StyledListItem  onClick={sevenClick} >Le Sept</StyledListItem>
                    <StyledListItem  onClick={neitherClick} > neither here nor there</StyledListItem>
                    <StyledListItem  onClick={springClick} > Spring</StyledListItem>
                </StyledSubNav>}

                <StyledListItem onClick={aboutClick}>About</StyledListItem>
                <StyledListItem onClick={contactClick}>Contact</StyledListItem>
            </StyledContainer>
        </>
    )
  }
  
  export default Nav