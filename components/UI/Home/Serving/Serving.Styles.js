import styled from 'styled-components'
import {device} from '../../../../GlobalStyles/GlobalStyles'
export const ServingWrapper = styled.div`
  padding: 0 2rem;
  margin-top: 6rem;
  margin-bottom: 5rem;
`
export const ServingGridContainer = styled.div`
  background-color: var(--dark-blue);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  margin-top: 4rem;
  
  @media ${device.tabletS}{
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`
export const ServingGridItem = styled.div`
  padding: 4rem;
  h3 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`
export const IconWrapper = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: var(--light-orange);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`
