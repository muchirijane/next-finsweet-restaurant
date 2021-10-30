import styled from 'styled-components'
import { device } from '../../GlobalStyles/GlobalStyles'
export const HeaderContainer = styled.header`
  height: 8rem;
  padding: 2rem 1rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 2000;

  @media ${device.laptop} {
    padding: 2rem 0;
  }
`

export const NavbarContainer = styled.div`
  max-width: 128rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export const Navbar = styled.nav`
  @media ${device.laptop} {
    transition: all 0.2s ease-in-out;
    position: absolute;

    top: ${({ isOpen }) => (isOpen ? '80px' : '-1000%')};
    height: calc(60vh - 80px);
    z-index: -100;
    background-color: var(--medium-black);
    width: 100vw;
    padding: 2rem 3rem;

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.21);
  }
  ul {
    display: flex;

    @media ${device.laptop} {
      flex-direction: column;
    }
  }
`

export const NavLink = styled.li`
  list-style: none;
  &:not(:last-child) {
    margin-right: 2rem;
  }
  @media ${device.laptop} {
    margin-right: 0;

    padding: 2rem 0;
  }
`
export const HrefLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: var(--color-white);

  &:hover {
    color: var(--color-orange);
  }
`
export const MenuIcon = styled.div`
  display: none;

  @media ${device.laptop} {
    display: block;
  }
`

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: inherit;

  @media ${device.laptop} {
    position: absolute;
    z-index: 1000;
    justify-content: space-between;
    width: 100%;
    padding: 0 2rem;
    background-color: var(--color-black);
    svg {
      font-size: 4rem;
      color: var(--color-white);
    }
  }
`
