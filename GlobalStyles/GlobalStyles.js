import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
*,
*::before, 
*::after{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
html {
    box-sizing: border-box;
    font-size: 62.5%;
    
}

:root{
  --dark-black: '#19161B';
  --color-white: '#fff';
  --color-grey: '#B8B8B8';
  --color-orange: '#FFB577';
  --light-blue: '#C4E4EA';
  --color-blue: 'rgba(0, 0, 0, 0.16)';

}

body{
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: 1.3;
  font-weight: 400;
  background-color: var(--dark-black);
  color: var(--color-grey);

}

h1,h2{
  color: var(--color-white);
}

h1,h2,h3,h4,h5,h6{
  font-family: 'Playfair Display', serif;
}
`;