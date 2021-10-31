import styled from 'styled-components'

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
`
export const ServingGridItem = styled.div`
  padding: 4rem;
`
export const IconWrapper = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: var(--light-orange);
  display: flex;
  justify-content: center;
  align-items: center;
`
