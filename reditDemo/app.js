const express = require('express');
const app = express();
const reditData = require('./data.json');
const path = require('path');
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.get('/',(req,res)=>{
    res.send('<h1>this is the index page</h1>');
})
app.get('/r/:sub', (req, res) => {
    const { sub } = req.params;
    const data=reditData[sub];
    res.render('subreddit.ejs', {...data});
})
app.listen(3000, () => {
    console.log("listening");
})

