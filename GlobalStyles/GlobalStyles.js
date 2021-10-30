import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*,
*::before, 
*::after{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
:root{
  --color-black: #19161B;
  --medium-black: #161616;
  --color-white: #fff;
  --color-grey: #B8B8B8;
  --color-orange: #FFB577;
  --light-blue: #C4E4EA;
  --color-blue: rgba(0, 0, 0, 0.16);

}
html {
    box-sizing: border-box;
    font-size: 62.5%;
    
}



body{
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: 1.3;
  font-weight: 400;
 background-color: var(--color-black);
  color: var(--color-grey);

}

h1,h2{
  color: var(--color-white);
  font-size: 5rem;
  font-weight: 700;
}

h1,h2,h3,h4,h5,h6{
  font-family: 'Playfair Display', serif;
  color: var(--color-white);
}
`

export default GlobalStyle

export const Container = styled.section`
  max-width: 128rem;
  margin: 0 auto;
`
export const device = {
  mobileS: `only screen and (max-width: 20em)`, //320px
  mobileM: `only screen and (max-width: 23.44em)`, //375px
  mobileL: `only screen and (max-width: 28em)`, //450px
  tabletS: `only screen and (max-width: 37em)`, //600px
  tablet: `only screen and (max-width: 48em)`, //768px
  laptop: `only screen and (max-width: 62em)`, //1000px
  laptopS: `only screen and (max-width: 64em)`, //1024px
  laptopM: `only screen and (max-width: 75em)`, //1200px
  laptopL: `only screen and (max-width: 90em)`, //1400px
  Mlaptop: `only screen and (min-width: 90em)`, //1400px
  desktop: `only screen and (min-width: 112.5em)`, //1800px
}
