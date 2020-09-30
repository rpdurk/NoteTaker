const express = require('express');
//need to require the routes folder to direct all other routes
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
const app = express();

const port = 3000;

//ensures all the routes go to the correct place (send file starts in the public folder)
app.use(express.static('public'));

// line 3/4 gives access to these files and app.use impliments their utilization
app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(3000, () => console.log(`server started at http://localhost:3000`));