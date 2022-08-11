import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Temas from '../components/temas/Temas'
import Footer from '../components/footer/Footer'
import Slider from '../components/slider/Slider'
import Eventos from '../components/eventos/Eventos'
import Title from '../components/title/Title'
import YoutubeEmbed from '../components/youtube/YoutubeEmbed'
import styled, { keyframes } from 'styled-components'
import {
  getAllSongs,
  getAllArtistas,
  getAllEvents,
  getHeroImg,
} from '../lib/api'
import { useEffect, useState } from 'react'

function Main() {
  const [songs, setSongs] = useState([])
  const [artistas, setArtistas] = useState([])
  const [events, setEvents] = useState([])
  const [heroImg, setHeroImg] = useState([{ mainImage: 'none' }])

  useEffect(() => {
    getAllSongs()
      .then((data) => setSongs(data))
      .catch(console.error)
  }, [])

  useEffect(() => {
    getAllArtistas()
      .then((data) => setArtistas(data))
      .catch(console.error)
  }, [])

  useEffect(() => {
    getAllEvents()
      .then((data) => setEvents(data))
      .catch(console.error)
  }, [])

  useEffect(() => {
    getHeroImg()
      .then((data) => setHeroImg(data))
      .catch(console.error)
  }, [])

  console.log(events)
  return (
    <Fade>
      <Navbar />
      <Hero heroImg={heroImg[0]} />
      <div id='musica'>
        <Title title='MUSICA' />
      </div>
      {songs.map((info) => (
        <Temas
          key={info.slug}
          title={info.title}
          author={info.author}
          img={info.mainImage}
          youtube={info.youtube}
          spotify={info.spotify}
          alt={info.slug}
        />
      ))}
      <div id='artistas'>
        <Title title='ARTISTAS' />
      </div>
      <Slider artistas={artistas} />
      <div id='eventos'>
        <Title title='EVENTOS' />
      </div>
      {events.map((info) => (
        <Eventos
          key={info.id}
          date={info.publishedAt}
          name={info.title}
          location={info.ciudad}
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
