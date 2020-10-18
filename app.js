const express = require('express');
const path = require('path');
const app = express();
//app.use('/public',express.static(__dirname + 'static'));
app.set('view engine','ejs');
app.get('/:userQuery',(req,res)=>{
    res.render('index', {data: {userQuery: req.params.userQuery,
                                searchResults: ['item 1','item 2','item 3'],
                                loggedIn: true,
                                userName: 'user123'}});
});
app.listen('3000');