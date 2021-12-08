import Image from 'next/image'
import styled from 'styled-components'

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  img {
    &:hover {
      transform: scale(1.2);
      transition: transform 0.2s ease-in-out;
    }
  }
`

const ImgContainer = styled.div`
  img {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
`
const ItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #1f1d21;
  padding: 2rem 3rem;
  margin-top: -1rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  h3 {
    font-size: 1.7rem;
  }
  p {
    color: var(--color-white);
  }
`

export default function MenuItem({ img, alt, title, price }) {
  return (
    <ItemContainer>
      <ImgContainer>
        <Image src={img} alt={alt} width={405} height={250} layout='responsive' />
      </ImgContainer>
      <ItemDetails>
        <h3>{title}</h3>

        <p>{price}</p>
      </ItemDetails>
    </ItemContainer>
  )
}
