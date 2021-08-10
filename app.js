const express = require('express');
const path = require('path');

//Init App
const app = express();

//Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Home routing
app.get('/', function(req, res){
    res.render('index', {
        title: 'Articlees'
    });
});

//Start server
app.listen(3000, function(){
    console.log('Server started at port 3000...');
});
