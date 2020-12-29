import React from 'react';
import { VideoDataAction, videoDataActionCreators } from '../reducers/videoData';
import videos from './VideoData.json';

// const VIDEO_DATA_URL = 'https://globalcyclingnetwork.com/api/devtask';

export async function fetchVideos(dispatch: React.Dispatch<VideoDataAction>) {
  dispatch(videoDataActionCreators.loading());
  try {
    // hmm can't fetch from url, need to use static json :(
    // const response = await fetch(
    //   VIDEO_DATA_URL,
    //   {
    //     method: 'GET',
    //     mode: 'no-cors',
    //   },
    // );
    
    
    // const videos: VideoDataItem[] = await response.json();
    // dispatch(videoDataActionCreators.success({
    //   videos: videos,
    // }));

    dispatch(videoDataActionCreators.success({
      videos: videos,
    }));
  } catch (e) {
    console.log(e);
    dispatch(videoDataActionCreators.failure());
  }
}