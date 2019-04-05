const express = require('express');
const mustacheExpress = require('mustache-express');

const port = process.env.PORT || 3000;

const app = express();

app.engine('html',mustacheExpress());

app.set('view engine','html');
app.set('views',__dirname+'/views');

app.get('/podatek/:tax/:value',(req,res)=>{
    let tax = req.params.tax;
    let value = req.params.value;
    let taxBrutto = value*(tax/100);
    let valueWithoutTax = value - taxBrutto;
    res.render('index.html',{tax,value,taxBrutto,valueWithoutTax});
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});