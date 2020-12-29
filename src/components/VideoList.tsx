import React, { useEffect, useReducer } from 'react';
import { fetchVideos } from '../api/VideoData';
import { videoDataInitialState, VideoDataItem, videoDataReducer } from '../reducers/videoData';
import VideoItem from './VideoItem';
import './VideoList.css';

interface VideoListProps {
}

const VideoList: React.FC<VideoListProps> = (props: VideoListProps) => {
  const [state, dispatch] = useReducer(videoDataReducer, videoDataInitialState);

  const {loading, videos, error} = state;

  useEffect(() => {
    fetchVideos(dispatch);
  }, []);


  if (loading) {
    return (
      <div>
        Loading videos...
      </div>
    );
  }

  if (error) {
    return (
      <div>
        There's been an error!
      </div>
    );
  }

  return (
    <div>
      {videos ? 
        videos.map((video: VideoDataItem) => (
          <VideoItem videoData={video} key={video._id} />
        )) : 
        'nothing loaded'
      }
    </div>
  );
};

export default VideoList;
