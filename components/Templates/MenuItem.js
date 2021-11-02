import Image from 'next/image'
import styled from 'styled-components'

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40.5rem;
`

const ImgContainer = styled.div`
  img {
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
  }
`
const ItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #1f1d21;
  padding: 2rem 3rem;
  margin-top: -1rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  p {
    color: var(--color-white);
  }
`

export default function MenuItem({ img, alt, title, price }) {
  return (
    <ItemContainer>
      <ImgContainer>
        <Image src={img} alt={alt} width={405} height={250} />
      </ImgContainer>
      <ItemDetails>
        <h3>{title}</h3>

        <p>{price}</p>
      </ItemDetails>
    </ItemContainer>
  )
}
