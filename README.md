# play_sports_frontend

Code test for Play Sports Front end.

## Setup
1) After cloning repo, run `npm install`
2) Run `npm start` to start the development server and see the app running.
3) For a production build run `npm build` and deploy the `build` folder to the web-server of choice.

## Improvements Made
NB: the header and footer are both screenshots of the existing site.
When clicking a video link in the list the description and the video itself get displayed in-line in the list.
Clicking the title of the expanded version, or the `Collapse detail` button, collapses the detail back to the default list item.
If I was to give myself more time I would:
1) animate the expanding/collapsing rather than direct show/hide.
- use some kind of css animation, but could potentially be confusing to the user if too slow
- or use some npm package (react-spring?) to handle the animation
2) collapse all other open list items when opening another one.
- would have to run through all the videoItems to workout if they are open or not
- possibly use some css rule to close all except the one with the clicked id? `:not`?