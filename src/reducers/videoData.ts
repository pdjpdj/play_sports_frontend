export interface VideoDataItem {
  _id: string;
  description: string;
  publishDate: string;
  title: string;
  urlTitle: string;
}

interface VideoDataState {
  loading: boolean;
  error: boolean;
  videos: VideoDataItem[] | undefined;
}

interface VideoDataActionPayload {
  videos: VideoDataItem[];
}

export interface VideoDataAction {
  type: string;
  payload?: VideoDataActionPayload;
}

const videoDataActionTypes = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
};

export const videoDataActionCreators = {
  loading: () => ({
    type: videoDataActionTypes.LOADING
  }),
  failure: () => ({
    type: videoDataActionTypes.FAILURE
  }),
  success: (payload: VideoDataActionPayload) => ({
    type: videoDataActionTypes.SUCCESS, 
    payload
  }),
};

export const videoDataInitialState: VideoDataState = {
  loading: true,
  error: false,
  videos: undefined,
};

export function videoDataReducer(
  state: VideoDataState,
  action: VideoDataAction,
): VideoDataState {
  switch (action.type) {
    case videoDataActionTypes.LOADING:
      return {...state, loading: true, error: false,};
    case videoDataActionTypes.FAILURE:
      return {...state, loading: false, error: true,};
    case videoDataActionTypes.SUCCESS:
      return {
        ...state, 
        loading: false, 
        error: false, 
        videos: action.payload?.videos,
      };
    default:
      return state;
  }
};
