import React, { useState } from 'react';
import { VideoDataItem } from '../reducers/videoData';
import './VideoItem.css';
import share_img from '../img/share.png';

interface VideoItemProps {
  videoData: VideoDataItem,
}

const VideoItem: React.FC<VideoItemProps> = (props: VideoItemProps) => {
  const [expand, setExpand] = useState(false);
  const {videoData} = props;
  const dateStr = (new Date(videoData.publishDate)).toDateString();

  const toggleExpand = () => {
    setExpand(!expand);
  }
  return (
    <div onClick={toggleExpand}>
      {expand ?
        <div className='video-item-container'>
          <video controls playsInline preload='none' poster={`https://img.youtube.com/vi/${videoData._id}/mqdefault.jpg`}>
            <source src={`https://www.youtube.com/watch?v=${videoData._id}`} type='video/mp4'/>
          </video>
          <h2>{videoData.title}</h2>
          <strong>Published on {dateStr}</strong>
          <strong>Share</strong>
          <img src={share_img} alt=''  className='share-img'/>
          <div className='video-item-description'>
            {videoData.description}
          </div>
          {/* <div dangerouslySetInnerHTML={{__html: videoData.description}} className='video-item-description'/> */}
        </div>  
        :
        <div className='video-item-container'>
          <img src={`https://img.youtube.com/vi/${videoData._id}/mqdefault.jpg`} alt={videoData.title} />
          <strong>{dateStr}</strong>
          {videoData.title}
        </div>
      }
      
    </div>
  );
};

export default VideoItem;
