import styled from 'styled-components'
import { device, colors } from '../../utils'

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
        <Btn>
          <div>
            {props.disponible ? (
              <Button>DISPONIBLE</Button>
            ) : (
              <ButtonDisabled>DISPONIBLE</ButtonDisabled>
            )}
          </div>
        </Btn>
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
  padding: 1.2rem 0;
  border-bottom: 0.5px solid ${colors.white};
  text-transform: uppercase;
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
  flex: 0.65;

  @media ${device.tablet} {
    width: 60%;
  }
  @media ${device.laptop} {
    width: 40%;
  }
`
const Btn = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;
`
const Button = styled.button`
  background-color: ${colors.green};
  color: ${colors.white};
  padding: 14px 14px;
  border: none;
  font-weight: bold;
  &:hover {
    color: ${colors.black};
    background-color: ${colors.white};
  }
`
const ButtonDisabled = styled.button`
  background-color: grey;
  opacity: 0.6;
  color: ${colors.white};
  padding: 14px 14px;
  border: none;
  font-weight: bold;
  cursor: not-allowed;
`

export default Eventos
