import styled from 'styled-components'
import React, { useState } from 'react'

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from 'react-icons/fa'

const Profiles = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)

  return (
    <>
      <Container>
        <Cards>
          <Card
            color='red'
            flexe={3}
            onClick={() => setIsOpen(!isOpen)}
            isOpen={isOpen}
          >
            <Img src='/assets/lucho-chad.jpg' />
            <Info>
              <Text>LUCHO</Text>
              <div>
                <FaFacebookSquare />
                <FaInstagramSquare />
                <FaYoutubeSquare />
              </div>
            </Info>
          </Card>
          <Card
            color='yellow'
            flexe={3}
            onClick={() => setIsOpen2(!isOpen2)}
            isOpen={isOpen2}
          >
            <Img src='/assets/lucho-chad.jpg' />
            <Info>
              <Text>LUCHO</Text>
              <div>
                <FaFacebookSquare />
                <FaInstagramSquare />
                <FaYoutubeSquare />
              </div>
            </Info>
          </Card>
          <Card
            color='green'
            flexe={3}
            onClick={() => setIsOpen3(!isOpen3)}
            isOpen={isOpen3}
          >
            <Img src='/assets/lucho-chad.jpg' />
            <Info>
              <Text>LUCHO</Text>
              <div>
                <FaFacebookSquare />
                <FaInstagramSquare />
                <FaYoutubeSquare />
              </div>
            </Info>
          </Card>
          <Card
            color='blue'
            flexe={3}
            onClick={() => setIsOpen4(!isOpen4)}
            isOpen={isOpen4}
          >
            <Img src='/assets/lucho-chad.jpg' />
            <Info>
              <Text>LUCHO</Text>
              <div>
                <FaFacebookSquare />
                <FaInstagramSquare />
                <FaYoutubeSquare />
              </div>
            </Info>
          </Card>
        </Cards>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2.2rem;
  margin-bottom: 2.2rem;
`
const Cards = styled.div`
  width: 100%;
  display: flex;
`
const Card = styled.div`
  transition: all 1s;
  flex: ${({ isOpen, flexe }) => (isOpen ? flexe : 1)};
  color: ${({ isOpen }) => (isOpen ? 'white' : 'black')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0.5)}; ;
`

const Img = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`
const Text = styled.p``
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.3rem;
  margin-left: 0.5rem;
`

export default Profiles
