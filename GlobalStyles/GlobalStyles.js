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
  --dark-grey: #27252d;
  --light-grey: #b8b8b8;
  --color-grey: #B8B8B8;
  --color-white: #fff;
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
h1,h2,h3,h4,h5,h6{
  font-family: 'Playfair Display', serif;
  color: var(--color-white);
}

h1,h2{
  color: var(--color-white);
  font-size: 5rem;
  font-weight: 700;
}
h3{
  font-size: 2rem;
}

`

export default GlobalStyle

export const Container = styled.section`
  max-width: 128rem;
  margin: 0 auto;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 4rem;
  grid-row-gap: 3rem;
`

export const ButtonLink = styled.a`
  text-decoration: none;
  background-color: var(--color-orange);
  color: var(--dark-grey);
  padding: 1.2rem 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: var(--dark-grey);
    color: var(--color-white);
    transform: translateY(2px);
  }
  &:active {
    transform: translateY(-2px);
  }
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
