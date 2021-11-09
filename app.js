const express = require('express');
const app = express();
const date=require(__dirname+'/date.js');
const day=date.getDay();
var items=['buy food','cook food','eat food'];
var workItems=[];
app.use(express.urlencoded({
    extended: true
}))
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render('list', {
        listTitle: day,
        newListItems:items
    });
})
app.get('/work',function(req,res){
    res.render('list', {
        listTitle: 'work',
        newListItems:workItems
    });
})
app.get('/about',function(req,res){
    res.render('about');
})
app.post('/',function(req,res){
    if(req.body.list==='work'){
        workItems.push(req.body.item);
        res.redirect('/work');
    }
    else{
        items.push(req.body.item);
        res.redirect('/');
    }
})
app.listen(3000, function () {
    console.log('server running successfully');
})