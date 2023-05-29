

import styled from 'styled-components'

//RESPONSIVE

export const mediaMax = ({ max, style }) => `
  @media handheld, only screen and (max-width: ${max}px), only screen and (max-device-width: ${max}px) {
    ${style}
  }
`

export const mediaMin = ({ min, style }) => `
  @media only screen and (min-width: ${min}px) {
    ${style}
  }
`

export const mediaMinMax = ({ min, max, style }) => `
  @media only screen and (min-width: ${min}px) and (max-width: ${max}px) {
    ${style}
  }
`

export const BREAKPOINT_XS = 320
export const BREAKPOINT_SM = 840
export const BREAKPOINT_LG = 1920

export const mediaXXS = style => mediaMax({ max: BREAKPOINT_XS - 1, style })
export const mediaXS = style => mediaMinMax({ min: BREAKPOINT_XS, max: BREAKPOINT_SM - 1, style })
export const mediaSM = style => mediaMinMax({ min: BREAKPOINT_SM, max: BREAKPOINT_LG - 1, style })
export const mediaLG = style => mediaMin({ min: BREAKPOINT_LG, style })

// Container
export const StyledMargin = styled.div`
    ${mediaMinMax({
    min: BREAKPOINT_SM,
    max: BREAKPOINT_LG - 1,
    style: `
    display: grid; 
    margin: 50px 50px 50px 50px;
    grid-template-columns: repeat(4, 1fr)
    `
  })
}
${mediaMinMax({
    min: BREAKPOINT_XS,
    max: BREAKPOINT_SM - 1,
    style: `
    display: flex; 
    flex-direction: column;
    margin: 10px 10px 10px 10px;
    `
  })
}
`

//LOGO
export const StyledLogo = styled.div`
${mediaMinMax({
    min: BREAKPOINT_XS,
    max: BREAKPOINT_SM - 1,
    style: `
    width: 100%;
    font-family: "Montserrat";
    font-size: 18px;
    line-height: 42px;
    `
  })
}
${mediaMinMax({
    min: BREAKPOINT_SM,
    max: BREAKPOINT_LG - 1,
    style: `
    width: 100%;
    font-family: "Montserrat";
    font-size: 44px;
    line-height: 42px;
    `
  })
}
` 