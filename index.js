const express = require('express');
const app = express();
const { player, lead } = require('./outcome.js')
const fs = require('fs')

// set up core routes
app.get('/read', (req,res) => {
    let element = req.query.something;
    fs.readFile(`${element}.txt`, 'utf8', (error, data) => {
        if (error) {
          return res.json({
            message: 'There is an issue, try again later...'
          });
        } else {
          return res.json({
            message: data
          });
        }
      })
})

// local routes
app.get('/player/:stroke', (req,res) => {
let answer = player (String(req.params.stroke));
return res.json({
  answer: answer
});
});

app.get('/lead/:stroke', (req, res) => {
let answer = lead(String(req.params.stroke));
return res.json({
  answer: answer
});
});

// Third-Party Routes
app.get('/', (req, res) => {
return res.json({
  message: 'Welcome to the Final Round of the Masters Championship'
});
})

// Port setup and listener
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
console.log('Server is running on PORT', PORT);
})

