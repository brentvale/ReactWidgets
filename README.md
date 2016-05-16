#React.js Widgets

Building a couple widgets with React.js.  There's a tabs menu where clicking other tabs causes them to become 'active'.  There's a simple clock.  I used the [Open Weather Map API][weather-api] to get weather with lat long coordinates.  And finally, there's an autocompletion widget to match elements of an array to the user's input.  Enjoy!

[weather-api]: http://openweathermap.org/api
## Setup Instructions

To fire this bad boy up, you can start by cloning this reposity and then running `npm install`.

If you don't already have http-server, you'll need to:

`npm install -g http-server`

In another terminal tab, you can now load the server by simply running 

`http-server`. 

Navigate to http://localhost:8080 and you should be all set to go!

##Making Changes 

If you'd like to make changes to these widgets, you'll need to install [webpack][webpack-link]:
[webpack-link]:https://www.npmjs.com/package/webpack
`npm install webpack -g`

Once that download completes, in a separate terminal tab, run `webpack
--watch`, which will automatically re-complile your `bundle.js` when you make
changes and save them.
