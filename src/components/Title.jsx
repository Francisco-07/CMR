// libraries
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { colors } from '../utils'

const Title = (props) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0 })
  return (
    <Container>
      <Text ref={ref} inView={inView}>
        <Span>{props.title}</Span>
      </Text>
    </Container>
  )
}

const Container = styled.div`
  background-color: black;
  overflow-x: hidden;
`
const Text = styled.h2`
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transform: ${({ inView }) =>
    inView ? 'translate(0px, 0px);' : 'translate(0px, 25px);'};
  transition: all 0.7s;
  position: relative;
  font-size: 1.8rem;
  text-align: center;
  margin: 0;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    position: absolute;
    top: 50%;
    margin: 0 auto;
    background-color: ${colors.white};
    z-index: -2;
  }
  &::after {
    content: '';
    display: block;
    width: 90px;
    height: 1px;
    position: absolute;
    right: 10%;
    top: 50%;
    margin: 0 auto;
    background-color: ${colors.white};
    z-index: -2;
  }
`

const Span = styled.span`
  background-color: ${colors.black};
  padding: 0 20px;
  overflow: hidden;
`
export default Title
