const express = require('express');
const mustacheExpress = require('mustache-express');

const port = process.env.PORT || 3000;

const app = express();

app.engine('html',mustacheExpress());

app.set('view engine','html');
app.set('views',__dirname+'/views');

function errorMid(req,res,next){
    let n1 = +req.params.n1;
    let n2 = +req.params.n2;
    if(n2==0){
        console.log(n2);
        throw new Error("dzielenie przez zero");
    }
}

function handleError(err,req,res,next){
    if(err){
        return next(err);
    }
    res.status(500);
    res.render('error.html',{error:err});
}

//app.use(errorMid);


app.get('/divide/:n1/:n2',(req,res)=>{
    let n1 = +req.params.n1;
    let n2 = +req.params.n2;
    if(n2==0){
        throw new Error('Dzielenie przez zero.');
    }else{
        let result = n1/n2;
        console.log(result);
        res.render('index1.html',{result});
    }
    
});
app.use(function(err,req,res,next){
    if(err){
        return next(err);
    }
    res.status(500);
    res.render('error.html',{error:err});
});


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});