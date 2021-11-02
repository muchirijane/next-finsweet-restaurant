import styled from 'styled-components'
import { device } from '../../../../GlobalStyles/GlobalStyles'

export const GridItem1 = styled.div`
  h2 {
    margin-bottom: 3rem;
    line-height: 1.3;
  }
`
export const GridItem2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const ImgWrapper = styled.div`
  &:not(:last-child) {
    margin-right: 2.5rem;
  }
`

export const AboutContainer = styled.div`
  margin-top: 7rem;
  background-color: var(--dark-blue);
  padding-bottom: 4rem;
`
export const AboutWrapper = styled.div`
  padding: 6rem 2rem;
`
export const AboutDetailsWrapper = styled.div`
  h4 {
    margin-bottom: 1rem;
  }
`
export const AboutDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 3rem;
  grid-row-gap: 2rem;
  margin-top: 4rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`

export const AboutDetailsTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  h3 {
    font-size: 2.5rem;
    color: var(--light-blue);
    margin-left: 2rem;
  }
  svg {
    font-size: 3rem;

    color: var(--light-blue);
  }
`

export const AboutButtonWrapper = styled.div`
  width: 17rem;
  margin-top: 3rem;
`
