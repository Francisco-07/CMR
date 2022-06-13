import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { device } from '../utils'

// iconos
import { SiYoutube } from 'react-icons/si'
import { BsSpotify } from 'react-icons/bs'

// ;<Img src={props.img} />

const Temas = (props) => {
  const [ref, inView] = useInView({ triggerOnce: true })
  return (
    <Container ref={ref} inView={inView} id='musica'>
      <Wrapper>
        <InfoContainer>
          <Info>
            <h2>{props.title}</h2>
            <p>{props.author}</p>
          </Info>
          <Icons>
            <BsSpotify />
            <SiYoutube />
          </Icons>
        </InfoContainer>
        <ImgContainer>
          <Img src={props.img} />
        </ImgContainer>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 0.5px solid white;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transform: ${({ inView }) =>
    inView ? 'translate(0px, 0px);' : 'translate(0px, 80px);'};
  transition: all 1.2s;
  @media ${device.tablet} {
    height: 170px;
  }
`

const Wrapper = styled.div`
  display: flex;
  width: 90%;
`
const ImgContainer = styled.div`
  display: none;
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin-left: 2rem;
  }
`
const Img = styled.img`
  height: 80%;
  width: 320px;
  object-fit: cover;
`
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media ${device.tablet} {
    width: 60%;
  }
`
const Info = styled.div``
const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  svg {
    font-size: 2rem;
  }
`

export default Temas
