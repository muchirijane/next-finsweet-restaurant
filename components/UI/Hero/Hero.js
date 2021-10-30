import React from 'react'
import { ButtonLink, Container } from '../../../GlobalStyles/GlobalStyles'
import Image from 'next/image'
import headerImage from '../../../public/home/header-image.png'
import {
  HeroGrid,
  HeroGridItem1,
  HeroGridItem2,
  HeroOpeningDetails,
  HeroOpeningText,
  HeroButtonWrapper,
} from './Hero.styles'
export default function Hero() {
  const title = 'We serve high quality foods of all kinds.'
  const subtitle =
    'We are a family-owned business that specializes in fresh, healthy, and delicious food.The food we serve is made with the best farm produce and the best from our farm and locals.'
  const contactDetails = [
    {
      title: 'Opening Times',
      details: 'Sunday to Saturday  l  09:00 AM to 11:00 PM',
    },
    {
      title: 'Location',
      details: '117 E 14th St, New York, NY 10003, United States',
    },
    { title: 'Call Us', details: '+9776462441' },
  ]
  return (
    <>
      <Container>
        <HeroGrid>
          <HeroGridItem1>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <HeroButtonWrapper>
              <ButtonLink href="/menu">View Menu &rarr; </ButtonLink>
            </HeroButtonWrapper>
            <HeroOpeningDetails>
              {contactDetails.map((item, index) => (
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
