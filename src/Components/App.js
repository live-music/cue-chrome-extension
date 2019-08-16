import React from 'react';
import { useDispatch } from 'react-redux';

import { setSession, setPlayingState, setLiveUrl } from '../redux/actions';
import Streams from './Streams';
import { getPort } from './AudioBridge';

export default function App() {
  const dispatch = useDispatch();

  function logout() {
    dispatch(setSession(null));
    dispatch(setPlayingState('stopped'));
    dispatch(setLiveUrl(null));

    const port = getPort();
    port.postMessage({ stop: true });
  }

  return (
    <div>
      <Streams />
      <div className='login-button' onClick={ () => logout() }>
        LOG OUT
      </div>
    </div>
  );
}
