import React, { useRef, useState } from 'react';
import './Video.css'

const Video = () => {
  const [play, setPlay] = useState(false)
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false)
    } else {
      videoRef.current.play()
      setPlay(true)
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
    </div>
  )
}

export default Video
