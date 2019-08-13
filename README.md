# CUE Music's Chrome Extension
This is an open source project to interface with CUE Music's API through a Google Chrome extension. The goal of this project is to provide music lovers the ability to listen to live music without the need to be immersed in CUE Music's UI experience, but rather provide a simple live audio player to accompany their web usage without any distractions.

## Technologies Used
- React Hooks & Redux
- HTML/CSS/JavaScript

## How to set up on my local environment
1. Ensure you have the latest NodeJS installed
2. Ensure you have Yarn installed (preferrably over npm)
3. Run ```yarn install```
4. Make sure you are using ```https://dev.cue.dj``` for testing purposes

### Running in browser tab
1. Open /src/baseUrl.js
2. Ensure ```EXTENSION_BUILD = false```
3. Run ```yarn start```

### Running in local chrome extension
1. Open /src/baseUrl.js
2. Ensure ```EXTENSION_BUILD = true```
3. Run ```yarn build```
4. Navigate to ```chrome://extensions```
5. Ensure developer mode is selected
6. Select ```Load unpacked``` and select the resulting build directory

# Development Timeline
This is an open project currently with no set timeline. But once all basic features are flushed out, we will surely ship to the Chrome Extension store without hesitation.