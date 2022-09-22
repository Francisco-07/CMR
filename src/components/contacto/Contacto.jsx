import { colors } from '../../utils'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'

function Contacto() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0 })
  return (
    <>
      <Container id='contacto' ref={ref} inView={inView}>
        <Text>NEWSLETTER</Text>
        <Form>
          <Email placeholder='EMAIL' />

          <Btn>SUBSCRIBIRSE</Btn>
        </Form>
      </Container>
    </>
  )
}
export default Contacto

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  transition: all 1s;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
`

const Text = styled.h3`
  width: 90%;
  text-align: center;
  font-size: 1.5rem;
  margin-top: 1.2rem;
  margin-bottom: 0;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  width: 100%;
`
const Email = styled.input`
  outline: none;
  height: 50px;
  width: 250px;
  padding: 0.6rem;
  border: 1px solid ${colors.white};
  background-color: ${colors.black};
  ::placeholder {
    color: ${colors.white};
  }
`
const Btn = styled.button`
  color: ${colors.white};
  border: none;
  margin-top: 15px;
  padding: 0.6rem;
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 2px;
  width: 250px;
  height: 50px;
  border: 1px solid ${colors.white};
  background-color: ${colors.black};
  &:hover {
    color: ${colors.black};
    background-color: ${colors.white};
    border: 1px solid ${colors.black};
  }
`
