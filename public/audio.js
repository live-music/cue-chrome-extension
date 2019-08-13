document.write('<audio id="player">');
const player = document.getElementById('player');
let port;

player.addEventListener('playing', () => {
  port.postMessage({ playState: 'playing' });
});

chrome.runtime.onConnect.addListener(function(newPort) {
  port = newPort;

  port.onMessage.addListener(function(request) {
    if (request.play) {
      player.src = request.play;
      player.play();
    }

    if (request.stop) {
      player.pause();
      player.currentTime = 0;
      player.src = null;
      port.postMessage({ playState: 'stopping' });
    }

    if (request.status) {
      if (player.paused) port.postMessage({ playState: 'stopping' });
      else port.postMessage({ playState: 'playing' });
    }
  });
});