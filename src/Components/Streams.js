import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getStreams, setPlayingState, setLiveUrl } from '../redux/actions';
import { EXTENSION_BUILD, streamUrl } from '../baseUrl';
import { setPort } from './AudioBridge';

import PlayIcon from '../assets/play.png';
import PauseIcon from '../assets/pause.png';

let port;

export default function Streams() {
  const dispatch = useDispatch();
  const streams = useSelector(state => state.app.streams);
  const playingState = useSelector(state => state.app.playingState);
  const liveUrl = useSelector(state => state.app.liveUrl);

  useEffect(() => {
    dispatch(getStreams());

    if (EXTENSION_BUILD) {
      port = chrome.runtime.connect(); // eslint-disable-line no-undef
      setPort(port);
      port.postMessage({ status: true });
      port.onMessage.addListener(function(msg) {
        if (msg.playState === 'playing') {
          dispatch(setPlayingState('playing'));
        } else if (msg.playState === 'stopping') {
          dispatch(setPlayingState('stopped'));
        }
      });
    }
  }, []);

  function PlayAudio(url) {
    dispatch(setLiveUrl(url));
    dispatch(setPlayingState('loading'));
    port.postMessage({ play: `${ streamUrl() }/${ url }` });
  }

  function StopAudio() {
    dispatch(setPlayingState('stopped'));
    dispatch(setLiveUrl(null));
    port.postMessage({ stop: true });
  }

  console.log('STREAMS', streams, playingState, liveUrl);

  function renderStreams() {
    const list = [];

    if (streams && streams.length) {
      const online = streams.filter((stream) => stream.online);
      const offline = streams.filter((stream) => !stream.online);
      const ordered = [...online, ...offline];

      ordered.forEach(stream => {
        list.push(
          <div className='flex' key={ stream._id }>
            { stream.currentUrl &&
              <div>
                { (liveUrl !== stream.currentUrl || playingState === 'stopped' || !playingState) &&
                  <div onClick={ () => PlayAudio(stream.currentUrl) }>
                    <img src={ PlayIcon } className='control-icon point' title='Play Stream'/>
                  </div>
                }
                { (liveUrl === stream.currentUrl && playingState === 'loading') &&
                  <div onClick={ () => StopAudio() }>
                    <div className='loading center point'><span /></div>
                  </div>
                }
                { (liveUrl === stream.currentUrl && playingState === 'playing') &&
                  <div onClick={ () => StopAudio() }>
                    <img src={ PauseIcon } className='control-icon point' title='Stop Stream'/>
                  </div>
                }
              </div>
            }
            <div>
              { stream.name }<br />
              { stream.genre }
            </div>
          </div>
        )
      });
    }

    return list;
  }

  return (
    <div>
      { renderStreams() }
    </div>
  );
}
