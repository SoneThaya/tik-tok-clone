import React, { useRef, useState } from 'react';
import './Video.css'
import VideoFooter from './VideoFooter'

const Video = () => {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="https://www.youtube.com/watch?v=-EmpJ0HdXpI"></video>
      <VideoFooter />
    </div>
  )
}

export default Video
