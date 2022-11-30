const express = require('express');
const app = express();

app.listen(3000, function(){
    console.log('listening on 3000...')
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
});

app.get('/next', function(req, res){
    res.sendFile(__dirname + '/detail.html')
});

app.use(express.static('asset'))
app.use('/style', express.static(__dirname + '/style'))