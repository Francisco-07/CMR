import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useState } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { device } from '../../utils'
import { BsSpotify } from 'react-icons/bs'
import { SiInstagram } from 'react-icons/si'

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0 })
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }
  const slides = [
    'https://tn.com.ar/resizer/z4vSOIFyoqVJdouo5QO_lFNne_k=/767x0/smart/cloudfront-us-east-1.images.arcpublishing.com/artear/QREUJ7GN7GLL2JJMK6BJYGME4E.jpg',
    'https://tn.com.ar/resizer/z4vSOIFyoqVJdouo5QO_lFNne_k=/767x0/smart/cloudfront-us-east-1.images.arcpublishing.com/artear/QREUJ7GN7GLL2JJMK6BJYGME4E.jpg',
    'https://tn.com.ar/resizer/z4vSOIFyoqVJdouo5QO_lFNne_k=/767x0/smart/cloudfront-us-east-1.images.arcpublishing.com/artear/QREUJ7GN7GLL2JJMK6BJYGME4E.jpg',
  ]

  return (
    <Container ref={ref} inView={inView}>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <AiOutlineArrowLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slides.map((item, i) => (
          <Slide key={i}>
            <InfoContainer>
              <div>
                <Title>LUCHO</Title>
                <Desc>MUSICO</Desc>
                <Icons>
                  <Icon col={'#E1306C'}>
                    <SiInstagram />
                  </Icon>
                  <Icon col={'#1DB954'}>
                    <BsSpotify />
                  </Icon>
                </Icons>
              </div>
            </InfoContainer>
            <ImgContainer>
              <Image src={item} />
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
  @media ${device.tablet} {
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
    font-size: 1.5rem;
    &:hover {
      color: ${(props) => props.col};
    }
  }
`

export default Slider
