import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const YoutubeEmbed = ({ embedId }) => {
  return (
    <Container>
      <VideoFrame>
        <iframe
          width='853'
          height='480'
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Embedded youtube'
        />
      </VideoFrame>
    </Container>
  )
}
YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const VideoFrame = styled.div`
  width: 80%;
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`

export default YoutubeEmbed
