import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: true })
  return (
    <Container ref={ref}>
      <Title inView={inView}>CMR</Title>
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
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  margin-bottom: 20px;
`
const Title = styled.h2`
  font-size: 5.5rem;
  border-bottom: 4px solid white;
  border-top: 4px solid white;
  margin: 0;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transform: scale(1.2);
  transition: all 1.5s;
`

export default Hero
