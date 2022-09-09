import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { device, colors } from '../../utils'
import { BsSpotify } from 'react-icons/bs'
import { SiInstagram } from 'react-icons/si'

const Slider = ({ artistas }) => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0 })

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : artistas.length - 1)
    } else {
      setSlideIndex(slideIndex < artistas.length - 1 ? slideIndex + 1 : 0)
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      if (slideIndex >= artistas.length - 1) {
        setSlideIndex(0)
      } else {
        setSlideIndex(slideIndex + 1)
      }
    }, 3000)
    return () => clearTimeout(timer)
  }, [slideIndex, artistas.length])

  return (
    <Container ref={ref} inView={inView}>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <AiOutlineArrowLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {artistas.map((item, i) => (
          <Slide key={i}>
            <InfoContainer>
              <div>
                <Title>{item.name}</Title>
                <Desc>{item.puesto}</Desc>
                <Icons>
                  <Icon col={'#E1306C'}>
                    <a rel='noreferrer' target='_blank' href={item.instagram}>
                      <SiInstagram />
                    </a>
                  </Icon>
                  <Icon col={'#1DB954'}>
                    <a rel='noreferrer' target='_blank' href={item.spotify}>
                      <BsSpotify />
                    </a>
                  </Icon>
                </Icons>
              </div>
            </InfoContainer>
            <ImgContainer>
              <Image src={item.mainImage} />
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}>
        <AiOutlineArrowRight />
      </Arrow>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: 2.2rem;
  opacity: ${({ inView }) => (inView ? '1' : '0')};
  transition: all 1.3s;
`

const Arrow = styled.div`
  display: none;
  @media ${device.tablet} {
    width: 30px;
    height: 30px;
    background-color: white;
    opacity: 0.4;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === 'left' && '10px'};
    right: ${(props) => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    z-index: 2;
    svg {
      color: black;
    }
    &:hover {
      opacity: 1;
    }
  }
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  text-transform: uppercase;
`

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`

const ImgContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex: 1;
`

const Image = styled.img`
  height: 70%;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
  @media ${device.tablet} {
    width: 70%;
  }
`

const InfoContainer = styled.div`
  flex: 1;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-size: 40px;
  margin: 0;
`

const Desc = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Icons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.6rem;
`
const Icon = styled.div`
  svg {
    color: ${colors.white};
    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.col};
    }
  }
`

export default Slider
