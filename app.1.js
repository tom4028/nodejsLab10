const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.set('view engine','pug');
app.set('views','./views');

app.get('/:name',(req,res)=>{
    let name = req.params.name;
    let str = `Hello ${name}!`;
    res.render('index',{str});
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});