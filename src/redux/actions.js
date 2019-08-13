import api from './api';

export const SET_SESSION = 'SET_SESSION';
export const SET_STREAMS = 'SET_STREAMS';
export const SET_PLAYING_STATE = 'SET_PLAYING_STATE';
export const SET_LIVE_URL = 'SET_LIVE_URL';

export function setSession(data) {
  return {
    type: SET_SESSION,
    data
  };
}

export function login(user, password) {
  return function (dispatch) {
    api.login(user, password)
      .then(data => data && dispatch(setSession(data)))
      .catch(() => {});
  };
}

export function setStreams(data) {
  return {
    type: SET_STREAMS,
    data
  };
}

export function getStreams() {
  return function (dispatch) {
    api.getStreams()
      .then(data => data && dispatch(setStreams(data)))
      .catch(() => {});
  };
}

export function setPlayingState(data) {
  return {
    type: SET_PLAYING_STATE,
    data
  };
}

export function setLiveUrl(data) {
  return {
    type: SET_LIVE_URL,
    data
  };
}