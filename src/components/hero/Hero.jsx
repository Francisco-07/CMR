import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'

const Hero = (props) => {
  const [ref, inView] = useInView({ triggerOnce: true })
  console.log(props.heroImg)
  return (
    <Container ref={ref} heroImg={props.heroImg}>
      <Title inView={inView}>CMR</Title>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(24, 23, 23, 0.6), rgba(24, 23, 23, 0.6)),
    url(${(props) => props.heroImg.mainImage});
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
