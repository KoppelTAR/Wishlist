const express = require('express');
const mainRoutes = require('./routes/mainRoutes');
const errorRoutes = require('./routes/errorRoute');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true})); // get data from req body
app.use(express.static('public'));

app.use(mainRoutes);
app.use(errorRoutes);

port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});