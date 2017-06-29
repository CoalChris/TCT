var express = require('express');

// initialize the server
const app = express();

// define the folder that will be used for static assets
app.use(express.static(__dirname + '/public'));
app.use(require('prerender-node').set('prerenderToken', 'C300lapyzf9wBOotNjzQ'));

// universal routing
app.get('*', isBot, (req, res, next) => { 
   res.sendFile(__dirname + '/public/index.html');
});

function isBot(req, res, next) {
      var userAgent = req.get('User-Agent');

      if (userAgent.search('facebookexternalhit') == -1) {
         res.redirect(req.path);
      } else {
         return next();
      }
});

// start the server
const port = process.env.PORT || 3000;
app.listen(port, err => {
   if (err) {
      return console.error(err);
   }
   console.log('Server running on http://localhost:' + port);
});