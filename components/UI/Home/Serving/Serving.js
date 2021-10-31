import Image from 'next/image'
import { ServingIntro, ServingDetails } from '../../../../data/Home'
import { Container } from '../../../../GlobalStyles/GlobalStyles'
import TextDivider from '../../../Templates/TextDivider'
import TextRow from '../../../Templates/TextRow'
import {
  GridContainer,
  IconWrapper,
  ServingGridContainer,
  ServingGridItem,
  ServingWrapper,
} from './Serving.Styles'

export default function Serving() {
  return (
    <Container>
      <ServingWrapper>
        <TextDivider title={ServingIntro.subtitle} />
        <TextRow title={ServingIntro.title} text={ServingIntro.details} />
        <ServingGridContainer>
          {ServingDetails.map((serving, index) => (
            <ServingGridItem key={index}>
              <IconWrapper>
                <Image
                  src={serving.icon}
                  width={serving.width}
                  height={serving.height}
                  alt={serving.alt}
                />
              </IconWrapper>
              <h3>{serving.title}</h3>
              <p>{serving.text}</p>
            </ServingGridItem>
          ))}
        </ServingGridContainer>
      </ServingWrapper>
    </Container>
  )
}
