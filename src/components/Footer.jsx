import Redes from './Redes'
import Title from './Title'
import Contacto from './Contacto'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'

function Footer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0 })
  return (
    <Container ref={ref} inView={inView}>
      <Title title='CONTACTO' />
      <Redes />
      <Contacto />
    </Container>
  )
}

const Container = styled.div`
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 1.3s;
`

export default Footer
