import styled from 'styled-components'
import { colors } from '../../utils'
import { SiInstagram, SiYoutube } from 'react-icons/si'
import { BsSpotify } from 'react-icons/bs'

function Redes() {
  return (
    <>
      <Container>
        <RedesList>
          <Li col={'#1DB954'}>
            <BsSpotify />
          </Li>
          <Li col={'#E1306C'}>
            <SiInstagram />
          </Li>
          <Li col={'#FF0000'}>
            <SiYoutube />
          </Li>
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
`
const Li = styled.li`
  margin-bottom: 25px;

  svg {
    font-size: 2rem;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.col};
    }
  }
`

export default Redes
