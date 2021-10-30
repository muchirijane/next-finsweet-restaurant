import styled from 'styled-components'
import { device } from '../../../GlobalStyles/GlobalStyles'

export const HeroGrid = styled.div`
  display: grid;
  padding: 0 2rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 4rem;
  grid-row-gap: 3rem;
  margin-top: 4rem;
`
export const HeroGridItem1 = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    margin-bottom: 1rem;
  }
`
export const HeroGridItem2 = styled.div`
  height: 100%;

  @media ${device.tablet} {
    img {
      height: 400px;
    }
  }
`
export const HeroButtonWrapper = styled.div`
  width: 17rem;
  margin-top: 3rem;
`
export const HeroContent = styled.div``

export const HeroOpeningDetails = styled.div`
  margin-top: 3rem;
`
export const HeroOpeningText = styled.div`
  margin-bottom: 1.2rem;
  p {
    width: 90%;
  }
`
