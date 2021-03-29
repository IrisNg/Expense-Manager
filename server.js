const express = require('express'),
  app = express(),
  path = require('path'),
  port = process.env.PORT || 8080;
  const db = require('./db');



app.get('/', async (req, res) => {
  const response = await db.query('SELECT * FROM contacts');

  res.json(response.rows)
})


//If in production environment
if (process.env.NODE_ENV === 'production') {
  //Set static folder to serve js, css, image assets
  app.use(express.static('client/build'));

  //Always serve index.html regardless of url route, react router will determine which view component to render
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})