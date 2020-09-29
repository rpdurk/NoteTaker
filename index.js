const express = require('express');
//need to require the routes folder to direct all other routes
const routes = require('./routes');
const app = express();

const port = 3000;

//ensures all the routes go to the correct place
app.use(express.static('public'));

app.use(routes);

app.listen(3000, () => console.log(`server started at http://localhost:3000`));