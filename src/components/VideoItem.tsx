import React from 'react';
import { VideoDataItem } from '../reducers/videoData';
import './VideoItem.css';

interface VideoItemProps {
  videoData: VideoDataItem,
}

const VideoItem: React.FC<VideoItemProps> = (props: VideoItemProps) => {
  const {videoData} = props;
  const dateStr = (new Date(videoData.publishDate)).toDateString();
  return (
    <div className='video-item-container'>
      <img src={`https://img.youtube.com/vi/${videoData._id}/mqdefault.jpg`} alt={videoData.title} />
      <strong>{dateStr}</strong>
      {videoData.title}
    </div>
  );
};

export default VideoItem;
