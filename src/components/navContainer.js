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

`


const StyledNavContainer = styled.div`
grid-column: 1;
 width: 100%;
 margin-right: 10px;
 position:sticky;
 top: 0;
 background-color:white;
 ${mediaMinMax({
  min: BREAKPOINT_SM,
  max: BREAKPOINT_LG - 1,
  style: `
 
  `
})
}
`

const StyledNavHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 15%;
${mediaMinMax({
  min: BREAKPOINT_SM,
  max: BREAKPOINT_LG - 1,
  style: `
  display:none;
  `
})
}
${mediaMinMax({
  min: BREAKPOINT_XS,
  max: BREAKPOINT_SM - 1,
  style: `
  position:sticky;
  top:0;
  margin-left: 20px;
  margin-right: 20px;
  `
})
}

`
const StyledMenu = styled.div`
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


  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  
    return (
     <>
     <StyledNavContainer>
     <StyledNavHeader>
                    <StyledLogo> Mi & Na</StyledLogo>
                    <StyledMenu onClick={toggleMenu}> Menu </StyledMenu>
                </StyledNavHeader>
      <StyledNavSM></StyledNavSM>
      {menuOpen &&  <StyledNavXS toggleMenu={toggleMenu} menuOpen={menuOpen}></StyledNavXS>}
        


        </StyledNavContainer>
        </>
    )
  }
  
  export default NavContainer