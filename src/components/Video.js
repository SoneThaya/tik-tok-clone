import React, { useRef, useState } from 'react';
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSideBar'

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
      <VideoFooter
        channel="rafehqazi"
        song="user - yeah"
        description="checkout this dance"
      />
      <VideoSidebar />
    </div>
  )
}

export default Video
