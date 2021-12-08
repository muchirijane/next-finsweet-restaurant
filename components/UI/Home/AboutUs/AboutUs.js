import Image from 'next/image'

import TextDivider from '../../../Templates/TextDivider'
import {
  ButtonLink,
  Container,
  GridContainer,
} from '../../../../GlobalStyles/GlobalStyles'
import {
  AboutButtonWrapper,
  AboutContainer,
  AboutDetailsGrid,
  AboutDetailsTitle,
  AboutDetailsWrapper,
  AboutWrapper,
  GridItem1,
  GridItem2,
  ImgWrapper,
} from './About.Styles'
import { AboutIntro, AboutDetails, AboutImages } from '../../../../data/Home'

export default function AboutUs() {
  return (
    <AboutContainer>
      <Container>
        <AboutWrapper>
          <TextDivider title={AboutIntro.subtitle} />
          <GridContainer>
            <GridItem1>
              <h2>{AboutIntro.title}</h2>
              <p>{AboutIntro.details}</p>
              <AboutDetailsGrid>
                {AboutDetails.map((item, index) => (
                  <AboutDetailsWrapper key={index}>
                    <AboutDetailsTitle>
                      <Image
                        src={item.icon}
                        alt="featured icon"
                        width={13}
                        height={32}
                      />
                      <h3>{item.title}</h3>
                    </AboutDetailsTitle>
                    <h4>{item.subtitle}</h4>
                    <p>{item.text}</p>
                  </AboutDetailsWrapper>
                ))}
              </AboutDetailsGrid>
              <AboutButtonWrapper>
                <ButtonLink href="/about-us">Read More &rarr;</ButtonLink>
              </AboutButtonWrapper>
            </GridItem1>
            <GridItem2>
              {AboutImages.map((item, index) => (
                <ImgWrapper key={index}>
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={200}
                    height={400}

                  />
                </ImgWrapper>
              ))}
            </GridItem2>
          </GridContainer>
        </AboutWrapper>
      </Container>
    </AboutContainer>
  )
}
