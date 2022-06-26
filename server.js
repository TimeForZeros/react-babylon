var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(function (req, res, next) {
    res.send('Welcome to Express');
});
app.listen(port, function () {
    console.log(`Server running on port ${port}`);
});
