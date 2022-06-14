// libraries
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { colors } from '../utils'

const Title = (props) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0 })
  return (
    <Container>
      <Text ref={ref} inView={inView}>
        <Span>CONTACTO</Span>
      </Text>
    </Container>
  )
}

const Container = styled.div`
  overflow-x: hidden;
`
const Text = styled.h2`
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
    background: ${colors.white};
    z-index: -1;
  }
`

const Span = styled.span`
  background-color: ${colors.black};
  padding: 0 20px;
`
export default Title
