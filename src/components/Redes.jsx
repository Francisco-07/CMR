// librerias
import styled from 'styled-components'
import { colors } from '../utils'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from 'react-icons/fa'

function Redes() {
  return (
    <>
      <Container>
        <RedesList>
          <li>
            <FaFacebookSquare />
          </li>
          <li>
            <FaInstagramSquare />
          </li>
          <li>
            <FaYoutubeSquare />
          </li>
        </RedesList>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2.2rem;
  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${colors.white};
  }
`

const RedesList = styled.ul`
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.7rem;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-bottom: 25px;
  }
  & svg {
    font-size: 2rem;
    &:hover {
      color: blue;
    }
  }
`

export default Redes
