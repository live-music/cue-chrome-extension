export const ENVIRONMENT = 'DEV';
export const EXTENSION_BUILD = false;
// export const ENVIRONMENT = 'PROD';

export function apiUrl() {
  if (ENVIRONMENT === 'DEV') return 'https://dev.cue.dj';
  else if (ENVIRONMENT === 'PROD') return 'https://cue.dj';
}

export function streamUrl() {
  return 'https://audio.cue.dj';
}

export function socketUrl() {
  if (ENVIRONMENT === 'DEV') return 'https://dev.cue.dj:4000';
  else if (ENVIRONMENT === 'PROD') 'https://socket.cue.dj';
}

export function imagesUrl() {
  return 'https://cue-images.nyc3.cdn.digitaloceanspaces.com';
}

export function publicStreamUrl() {
  return 'http://stream.cue.dj:1337';
}
