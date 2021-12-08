import React from 'react'
import { MenuIntro, MenuItems } from '../../../../data/Home'
import {
  ButtonLink,
  Container,
  MenuGrid,
} from '../../../../GlobalStyles/GlobalStyles'
import MenuItem from '../../../Templates/MenuItem'
import TextDivider from '../../../Templates/TextDivider'
import TextRow from '../../../Templates/TextRow'
import {
  ButtonWrapper,
  MenuContainer,
  MenuItemContainer,
  MenuTopic,
} from './HomeMenu.Styles'

export default function HomeMenu() {
  return (
    <Container>
      <MenuContainer>
        <TextDivider title={MenuIntro.subtitle} />
        <TextRow title={MenuIntro.title} text={MenuIntro.details} />
        <MenuTopic>{MenuIntro.topic}</MenuTopic>
        <MenuItemContainer>
          <MenuGrid>
            {MenuItems.map((item, index) => (
              //individual menu meal or card
              <MenuItem key={index} {...item} />
            ))}
          </MenuGrid>
          <ButtonWrapper>
            <ButtonLink href={MenuIntro.ButtonLink}>
              {MenuIntro.buttonText} &rarr;
            </ButtonLink>
          </ButtonWrapper>
        </MenuItemContainer>
      </MenuContainer>
    </Container>
  )
}
