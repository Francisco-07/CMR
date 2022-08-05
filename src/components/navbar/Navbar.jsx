import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { device, colors } from '../../utils'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'
import { IconContext } from 'react-icons'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground)
  })

  return (
    <>
      <Container navbar={navbar}>
        <Logo>
          <h1> </h1>
        </Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <IconContext.Provider value={{ size: '25px' }}>
              <ImCross />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider value={{ size: '35px' }}>
              <GiHamburgerMenu />
            </IconContext.Provider>
          )}
        </Hamburger>
        <Menu isOpen={isOpen}>
          <a href='#eventos' onClick={() => setIsOpen(false)}>
            EVENTOS
          </a>
          <a href='#musica' onClick={() => setIsOpen(false)}>
            MUSICA
          </a>
          <a href='#contacto' onClick={() => setIsOpen(false)}>
            CONTACTO
          </a>
        </Menu>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: 70px;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  transition: all 0.5s;
  background: ${({ navbar }) => (navbar ? 'black' : 'transparent')};
  border-bottom: ${({ navbar }) =>
    navbar ? '1px solid white' : '1px solid transparent'};
`

const Logo = styled.div`
  z-index: 1999;
  padding-left: 1rem;
  & h1 {
    padding: 0 0.7rem;
    cursor: pointer;
  }
`

const Menu = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.3rem 0;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: ${({ isOpen }) => (isOpen ? 'black' : 'transparent')};
  left: ${({ isOpen }) => (isOpen ? '50%' : '-100%')};
  transition: 0.3s ease-in-out;

  & a {
    text-decoration: none;
    color: ${({ isOpen }) => (isOpen ? 'white' : 'transparent')};
    border-bottom: 1px solid transparent;
    padding-bottom: 0.3rem;
    &:hover {
      border-bottom: 1px solid white;
    }
  }
  @media ${device.laptop} {
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    gap: 0 2.3rem;
    position: relative;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: translate(0%, 0%);
    background-color: transparent;
    padding-right: 1rem;
    & a {
      text-decoration: none;
      color: ${colors.white};
    }
  }
`

const Hamburger = styled.div`
  z-index: 1000;
  padding-right: 1rem;
  @media ${device.laptop} {
    display: none;
  }
`
export default Navbar
