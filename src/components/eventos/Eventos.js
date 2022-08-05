import styled from 'styled-components'
import { device } from '../../utils'

const Eventos = (props) => {
  return (
    <Container>
      <Wrapper>
        <Info>
          <Date>{props.date}</Date>
          <Evento>
            <p>{props.name}</p>
            <p>{props.location}</p>
          </Evento>
        </Info>
        <Button>DISPONIBLE</Button>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 0.5px solid white;
`

const Date = styled.div`
  flex: 1;
`
const Evento = styled.div`
  flex: 1;
  p {
    margin: 0;
  }
`
const Info = styled.div`
  display: flex;
  width: 100%;
  @media ${device.tablet} {
    width: 60%;
  }
`
const Button = styled.button`
  background-color: #80ac9a;
  color: white;
  border: none;
  font-weight: bold;
  &:hover {
    color: black;
    background-color: white;
  }
`

export default Eventos
