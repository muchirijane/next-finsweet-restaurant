import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BiMenuAltRight, BiX } from 'react-icons/bi'
import {
  HeaderContainer,
  NavbarContainer,
  Navbar,
  NavLink,
  HrefLink,
  MenuIcon,
  MenuContainer,
} from './Header.styles'
import { Container } from '../../GlobalStyles/GlobalStyles'
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menuHandler = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Our story', href: '/story' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]
  return (
    <HeaderContainer>
      <Container>
        <NavbarContainer>
          <MenuContainer>
            <Link href="/">
              <a>
                <Image
                  src="/logo.svg"
                  width={96}
                  height={23}
                  alt="finsweet restaurant logo"
                />
              </a>
            </Link>
            <MenuIcon onClick={menuHandler}>
              {isOpen ? <BiX /> : <BiMenuAltRight />}
            </MenuIcon>
          </MenuContainer>
          <Navbar isOpen={isOpen}>
            <ul>
              {navItems.map((item, index) => (
                <NavLink key={index} onClick={menuHandler}>
                  <Link href={item.href}>
                    <HrefLink>{item.name}</HrefLink>
                  </Link>
                </NavLink>
              ))}
            </ul>
          </Navbar>
        </NavbarContainer>
      </Container>
    </HeaderContainer>
  )
}
