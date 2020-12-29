# play_sports_frontend

Code test for Play Sports Front end.

## Setup
1) After cloning repo, run `npm install`
2) Run `npm start` to start the development server and see the app running.
3) For a production build run `npm build` and deploy the `build` folder to the web-server of choice.

## Improvements Made
NB: the header and footer are both screenshots of the existing site.
When clicking a video link in the list the description and the video itself get displayed in-line in the list.
Clicking the title of the expanded version collapses the detail back to the default list item.
If I was to give myself more time I would:
1) animate the expanding/collapsing rather than direct show/hide.
2) on collapse scroll back up the list so the top of the collapsed item is at the top of the list.
3) collapse all other open list items when opening another one.