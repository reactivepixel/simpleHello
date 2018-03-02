const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json(
    {
      msg: 'hello world',
      author: 'chapman'
    }
  );
});

app.get('/error', (req, res) => {
  res.status(500).json(
    {
      msg: 'Testing A Hard Error'
    }
  );
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
  console.log('server is active on port ' + port);
});
