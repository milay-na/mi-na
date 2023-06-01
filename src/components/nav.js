import React , { useCallback, useState}from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { mediaMinMax, BREAKPOINT_XS, BREAKPOINT_SM, BREAKPOINT_LG, StyledLogo} from '../utils/style';


const StyledContainer = styled.div`
${mediaMinMax({
  min: BREAKPOINT_SM,
  max: BREAKPOINT_LG - 1,
  style: `
  padding-top: 30px;
  `
})
}
position:sticky;
top: 0;
${mediaMinMax({
    min: BREAKPOINT_XS,
    max: BREAKPOINT_SM - 1,
    style: `
    margin-top: 30px;
   position: fixed;
   background-color:white;
   width: 100%;
   bottom: 0;
    `
  })
  }
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
  ${mediaMinMax({
    min: BREAKPOINT_XS,
    max: BREAKPOINT_SM - 1,
    style: `
    display:flex;
    flex-direction: column;
    align-items:center;
    float:left;
    background_color: white;
    z-index: 100;
    `
  })
  }
  ${mediaMinMax({
    min: BREAKPOINT_SM,
    max: BREAKPOINT_LG - 1,
    style: `
    margin: 12px;
    `
  })
  }
`

const StyledSubNav = styled.div`
${mediaMinMax({
    min: BREAKPOINT_SM,
    max: BREAKPOINT_LG - 1,
    style: `
    margin-left: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
    `
  })
  }
`
const StyledLogoSM = styled(StyledLogo)`
${mediaMinMax({
    min: BREAKPOINT_XS,
    max: BREAKPOINT_SM - 1,
    style: `
  display: none;
    `
  })
  }
`
const StyledLined = styled.hr`
border: 1px solid black;
color: black;
width: 15%;
${mediaMinMax({
  min: BREAKPOINT_SM,
  max: BREAKPOINT_LG - 1,
  style: `
display: none;
  `
})
}
`

const StyledSubListItem = styled(StyledListItem)`
margin: 0 0 10px 0;
`


const Nav = ({className, menuOpen, toggleMenu}) => {
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

  const outOnClick = () =>  {
    outClick();
    toggleMenu();
  }


  console.log('menuOpen', menuOpen)
    return (
     <>
            <StyledContainer className={className} > 
            <StyledLogoSM> Mi & Na</StyledLogoSM>
                <StyledListItem  onClick={homeClick} >Home</StyledListItem>
                {showSubMenu && <StyledLined></StyledLined>}
                <StyledListItem  onClick={toggleSubMenu}>Photography</StyledListItem>
                
               {showSubMenu &&  <StyledSubNav>
                    <StyledSubListItem onClick={outOnClick} >Out</StyledSubListItem>
                    {/* <StyledListItem  onClick={outClick} >Out</StyledListItem> */}
                    <StyledSubListItem onClick={nightLifeClick} >Night life</StyledSubListItem>
                    <StyledSubListItem onClick={sevenClick} >Le Sept</StyledSubListItem>
                    <StyledSubListItem onClick={neitherClick} > neither here nor there</StyledSubListItem>
                    <StyledSubListItem  onClick={springClick} > Spring</StyledSubListItem>
                </StyledSubNav>}
                {showSubMenu && <StyledLined></StyledLined>}
                <StyledListItem onClick={aboutClick}>About</StyledListItem>
                <StyledListItem onClick={contactClick}>Contact</StyledListItem>
            </StyledContainer>
        </>
    )
  }
  
  export default Nav