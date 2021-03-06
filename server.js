"use strict";
const express = require('express'),
  // Create our app
  app = express(),
  //binding port to env
  port = process.env.PORT || 3000;

app.use((req, res, next)=>{
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  } else {
     next();
  }
});
app.use(express.static('public'));

app.listen(port, () => {
  console.log('Express server is up on port 3000');
});
 