# Setup Instructions

To fire this bad boy up, you can start by cloning this reposity and then running `npm install`.

If you don't already have http-server, you'll need to:

`npm install -g http-server`

In another terminal tab, you can now load the server by simply running 

`http-server`. 

Navigate to http://localhost:8080 and you should be all set to go!

##Making Changes 

If you'd like to make changes to these widgets, you'll need to install webpack:

`npm install webpack -g`

Once that download completes, in a separate terminal tab, run `webpack
--watch`, which will automatically re-complile your `bundle.js` when you make
changes and save them.
