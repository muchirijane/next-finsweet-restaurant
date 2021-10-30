import React from 'react'
import { ButtonLink, Container } from '../../../../GlobalStyles/GlobalStyles'
import Image from 'next/image'
import { HeroIntro, HeroContactDetails } from '../../../../data/Home'
import headerImage from '../../../../public/home/header-image.png'
import {
  HeroGrid,
  HeroGridItem1,
  HeroGridItem2,
  HeroOpeningDetails,
  HeroOpeningText,
  HeroButtonWrapper,
} from './Hero.styles'
export default function Hero() {
  return (
    <>
      <Container>
        <HeroGrid>
          <HeroGridItem1>
            <h1>{HeroIntro.title}</h1>
            <p>{HeroIntro.subtitle}</p>
            <HeroButtonWrapper>
              <ButtonLink href="/menu">
                {HeroIntro.buttonText} &rarr;
              </ButtonLink>
            </HeroButtonWrapper>
            <HeroOpeningDetails>
              {HeroContactDetails.map((item, index) => (
                <HeroOpeningText key={index}>
                  <h3>{item.title}</h3>
                  <p>{item.details}</p>
                </HeroOpeningText>
              ))}
            </HeroOpeningDetails>
          </HeroGridItem1>
          <HeroGridItem2>
            <Image
              src={headerImage}
              width={608}
              height={512}
              layout="responsive"
              alt="a cup of hot coffee"
            />
          </HeroGridItem2>
        </HeroGrid>
      </Container>
    </>
  )
}
