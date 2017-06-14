var express = require('express');

// initialize the server
const app = express();

// define the folder that will be used for static assets
app.use(express.static(__dirname + '/public'));

// universal routing
app.get('*', (req, res) => { 
   res.sendFile(__dirname + '/public/index.html');
}); 

// start the server
const port = process.env.PORT || 3000;
app.listen(port, err => {
   if (err) {
      return console.error(err);
   }
   console.log('Server running on http://localhost:' + port);
});