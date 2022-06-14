import Navbar from '../components/Navbar'
import Temas from '../components/Temas'
import Hero from '../components/Hero'
import Title from '../components/Title'
import { data } from '../data'
import Contacto from '../components/Contacto'
import Redes from '../components/Redes'
import styled, { keyframes } from 'styled-components'
import Slider from '../components/Slider'

function Main() {
  return (
    <Fade>
      <Navbar />
      <Hero />
      {data.map((info) => (
        <Temas
          key={info.id}
          title={info.title}
          author={info.author}
          img={info.img}
        />
      ))}
      <Slider />
      <Title title='CONTACTO' />
      <Redes />
      <Contacto />
    </Fade>
  )
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Fade = styled.div`
  animation: 1s ${fadeIn} ease-out;
`

export default Main
