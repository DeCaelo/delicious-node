const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const wes = { name: 'Wes', age: 100, cool: true };
  //res.send('Hey! It works!');
  //res.json(wes);
  //res.send(req.query.name);
  res.json(req.query);
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;

// req => has all the information. http://expressjs.com/fr/4x/api.html#req
// res => has all the method for sending the data back. http://expressjs.com/fr/4x/api.html#res
