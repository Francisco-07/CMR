import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Temas from '../components/temas/Temas'
import Footer from '../components/footer/Footer'
import Slider from '../components/slider/Slider'
import Eventos from '../components/eventos/Eventos'
import Title from '../components/title/Title'
import YoutubeEmbed from '../components/youtube/YoutubeEmbed'
import { data, eventos } from '../data'
import styled, { keyframes } from 'styled-components'

function Main() {
  return (
    <Fade>
      <Navbar />
      <Hero />
      <div id='musica'>
        <Title title='MUSICA' />
      </div>
      {data.map((info) => (
        <Temas
          key={info.id}
          title={info.title}
          author={info.author}
          img={info.img}
        />
      ))}
      <div id='artistas'>
        <Title title='ARTISTAS' />
      </div>
      <Slider />
      <div id='eventos'>
        <Title title='EVENTOS' />
      </div>
      {eventos
        .sort((a, b) => b.id - a.id)
        .map((info) => (
          <Eventos
            key={info.id}
            date={info.date}
            name={info.name}
            location={info.location}
          />
        ))}
      <div id='video'>
        <Title title='VIDEOS' />
      </div>
      <YoutubeEmbed embedId='S1kf_XhrUos' />
      <Footer />
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
