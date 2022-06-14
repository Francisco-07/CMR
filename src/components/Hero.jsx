import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: true })
  return (
    <Container ref={ref} id='eventos'>
      <Title inView={inView} delay={0.2}>
        PROXIMO EVENTO
      </Title>
      <Text inView={inView} delay={0.4}>
        Marzo 23 LA PLATA
      </Text>
      <Text inView={inView} delay={0.6}>
        Trappa Things
      </Text>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(24, 23, 23, 0.6), rgba(24, 23, 23, 0.6)),
    url('https://images.unsplash.com/photo-1528489290689-444dece355b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  margin-bottom: 20px;
`
const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transform: ${({ inView }) =>
    inView ? 'translate(0px, 0px);' : 'translate(120px, 0);'};
  transition: all 0.5s;

  transition-delay: ${(props) => props.delay}s;
`
const Text = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transform: ${({ inView }) =>
    inView ? 'translate(0px, 0px);' : 'translate(120px, 0px);'};
  transition: all 0.5s;
  transition-delay: ${(props) => props.delay}s;
`
export default Hero
