import styled from 'styled-components'
import { device } from '../../GlobalStyles/GlobalStyles'

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  h2 {
    width: 70%;
    margin-right: 3rem;

    @media ${device.tablet} {
      margin-right: 0;
    }
  }

  p {
    width: 60%;
  }

  @media ${device.tablet} {
    flex-direction: column;
    h2 {
      width: 100%;
      margin-bottom: 2rem;
    }
    p {
      width: 100%;
    }
  }
`

export default function TextRow({ title, text }) {
  return (
    <TextWrapper>
      <h2>{title}</h2>
      <p>{text}</p>
    </TextWrapper>
  )
}
