const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send('hello Message')
})

app.get('/deneme',(req,res)=>{
    res.json({'message' : 'hosgeldin2 denemee...'})
})


app.listen(3000 , ()=>{
    console.log("3000 portundan server çalışıyor....");
})