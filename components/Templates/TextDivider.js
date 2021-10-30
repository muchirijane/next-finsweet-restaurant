import styled from 'styled-components'

const TextContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;
  h3 {
    color: var(--color-orange);
    text-transform: uppercase;
    font-size: 1.6rem;
  }
`

const Divider = styled.div`
  width: 3rem;
  height: 1px;
  background-color: var(--color-white);
  margin-left: 1rem;
`

export default function TextDivider({ title }) {
  return (
    <TextContainer>
      <h3>{title}</h3>
      <Divider />
    </TextContainer>
  )
}
