"use strict";
const express = require('express'),
  // Create our app
  app = express(),
  //binding port to env
  port = process.env.PORT || 3000;


app.use(express.static('public'));

app.listen(port, () => {
  console.log('Express server is up on port 3000')
});
