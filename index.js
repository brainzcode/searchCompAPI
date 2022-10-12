const express = require('express');
const cors = require('cors');
const users = require('./Users')

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  const { q } = req.query;

  const keys = ['first_name', 'last_name', 'email'];
  	
	const search = (data) => {
		return data.filter((item) =>
			keys.some((key) => item[key].toLowerCase().includes(q))
		);
  }
  res.json(search(users).splice(0, 10))
});

app.listen(3500, () => console.log('API listening!'));
