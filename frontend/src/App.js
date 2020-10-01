import React from 'react';
import Video from './Components/Video/Video';
import './App.css';

function App() {
  return (
    
    <div className="app">
      <div className="app__videos">
        <Video 
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          channel="JSYOvO"
          description="YOOO this works"
          song="the git up"
          likes="123"
          messages="456"
          shares="789"
        />
        <Video 
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          channel="JSYOvO"
          description="YOOO this works"
          song="the git up"
          likes="999"
          messages="456"
          shares="789"
        />
      </div>

    </div>
  );
}

export default App;
