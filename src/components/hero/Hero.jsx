import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { ReactComponent as YourSvg } from '../../assets/logo.svg'

const Hero = (props) => {
  const [ref, inView] = useInView({ triggerOnce: true })

  return (
    <Container ref={ref} inView={inView} heroImg={props.heroImg}>
      <Title>CMR</Title>
      <YourSvg />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${(props) => props.heroImg.mainImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  position: relative;
  h2,
  svg {
    opacity: ${({ inView }) => (inView ? '1' : '0')};
    transform: ${({ inView }) =>
      inView ? 'translate(0px, 0px);' : 'translate(-30px, 0px);'};
    transition: all 1s;
    filter: ${({ inView }) => (inView ? 'blur(0px)' : 'blur(4px)')};
  }
`
const Title = styled.h2`
  font-size: 5.5rem;
  border-bottom: 4px solid white;
  margin: 0;
`

export default Hero
