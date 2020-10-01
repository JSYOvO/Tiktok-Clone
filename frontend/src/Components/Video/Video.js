import React, {useRef, useState} from 'react'
import './Video.css';
import VideoFooter from './VideoFooter/VideoFooter';
import VideoSidebar from './VideoSidebar/VideoSidebar';

function Video({url, channel, description, song, likes, shares, messages}) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if(playing) {
            videoRef.current.pause();
            setPlaying(false);
        }
        else{
            videoRef.current.play();
            setPlaying(true);
        }
    }
    return (
        <div className="video">
            <video
                onClick={handleVideoPress}
                className="video__player"
                loop 
                ref={videoRef}
                src = {url}
            ></video>
    
        <VideoFooter channel={channel} description={description} song={song}/>
        <VideoSidebar likes={likes} shares={shares} messages={messages} />
        
        </div>
    )
}

export default Video
