import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { device, colors } from '../../utils'
import { SiYoutube } from 'react-icons/si'
import { BsSpotify } from 'react-icons/bs'

const Temas = (props) => {
  const [ref, inView] = useInView({ triggerOnce: true })
  return (
    <Container ref={ref} inView={inView}>
      <Wrapper>
        <InfoContainer>
          <Info>
            <h2>{props.title}</h2>
            <p>{props.author}</p>
          </Info>
          <Icons>
            <Icon col={'#1DB954'}>
              <a rel='noreferrer' target='_blank' href={props.spotify}>
                <BsSpotify />
              </a>
            </Icon>
            <Icon col={'#FF0000'}>
              <a rel='noreferrer' target='_blank' href={props.youtube}>
                <SiYoutube />
              </a>
            </Icon>
          </Icons>
        </InfoContainer>
        <ImgContainer>
          <Img img={props.img} />
        </ImgContainer>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transform: ${({ inView }) =>
    inView ? 'translate(0px, 0px);' : 'translate(0px, 80px);'};
  transition: all 1.2s;

  @media ${device.tablet} {
  }
`

const Wrapper = styled.div`
  display: flex;
  border-bottom: 0.5px solid white;
  width: 90%;
  text-transform: uppercase;
`
const ImgContainer = styled.div`
  display: none;

  @media ${device.tablet} {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    margin-left: 2rem;
  }
`
const Img = styled.div`
  border-radius: 5px;
  height: 160px;
  width: 320px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  &:hover {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      url(${(props) => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    object-fit: cover;
    border-radius: 5px;
  }
`
const InfoContainer = styled.div`
  min-height: 200px;
  display: flex;
  width: 100%;
  padding: 20px 0;
  flex-direction: column;
  @media ${device.tablet} {
    width: 60%;
  }
`
const Info = styled.div``
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
const Icon = styled.div`
  a {
    text-decoration: none;
  }
  svg {
    font-size: 2rem;
    color: ${colors.white};
    cursor: pointer;
    &:hover {
      color: ${(props) => props.col};
    }
  }
`

export default Temas
