const express = require('express');
const app = express();


app.use(express.static('../Front-End/public'));


app.all('*', (req, res) => {
    res.status(404).send('<h1>404 Error: Resouce Not Found</h1>');
});

app.listen(5000, () => {
    console.log('Server Running Port: 5000...');
});
