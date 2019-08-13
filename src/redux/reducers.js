import { REHYDRATE } from 'redux-persist';

import {
  SET_SESSION,
  SET_STREAMS,
  SET_PLAYING_STATE,
  SET_LIVE_URL
} from './actions';

const initialState = {
  session: null,
  streams: [],
  playingState: 'stopped',
  liveUrl: null,
}

const actionsMap = {
  [REHYDRATE]: (state, action) => {
    return action.payload ? action.payload.app : initialState;
  },
  [SET_SESSION]: (state, action) => {
    return {
      ...state,
      session: action.data
    };
  },
  [SET_STREAMS]: (state, action) => {
    return {
      ...state,
      streams: action.data
    };
  },
  [SET_PLAYING_STATE]: (state, action) => {
    return {
      ...state,
      playingState: action.data
    };
  },
  [SET_LIVE_URL]: (state, action) => {
    return {
      ...state,
      liveUrl: action.data
    };
  },
}

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
