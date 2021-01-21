const express = require('express');
const app = express();
const path = require('path');
const {v4 : getID}=require('uuid');
const methodOverride=require('method-override');
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
let comments = [
    {
        id: getID(),
        username: 'deku',
        comment: 'first'
    },
    {
        id: getID(),
        username: 'sonda',
        comment: 'lol'
    }
    ,
    {

        id: getID(),
        username: 'sourav',
        comment: 'haha'
    }
]
app.get('/', (req, res) => {
    res.send('<h1>index page of this site</h1>');
})
app.get('/comment', (req, res) => {
    res.render('commentEjs/index', { comments });
})
app.post('/comment', (req, res) => {
    let { username, comment } = req.body;
    if (username != '' && comment != '') 
    {
        const id=getID(); 
        comments.push({ id,username, comment });
    }
    res.redirect('/comment');
})
app.get('/comment/:id', (req, res) => {
    const {id} = req.params;
    const com = comments.find(c => c.id == id)
    res.render('commentEjs/show', { com });
})
app.get('/comment/:id/edit',(req,res)=>{
    const {id}=req.params;
    // console.log(id);
    const com=comments.find(c=>c.id==id);
   
    res.render('commentEjs/edit',{com});
})
app.patch('/comment/:id',(req,res)=>{
    const {id}=req.params;
    const newComment=req.body.newComment;
    const com=comments.find(c=> c.id==id);
    com.comment=newComment;
    res.redirect('/comment');
})
app.delete('/comment/:id',(req,res)=>{
    const {id}=req.params;
    comments=comments.filter(c=>c.id !=id)
    res.redirect('/comment');
})
app.listen(3000, () => {
    console.log('listening ...')
})