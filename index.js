const { json } = require('express');
const express = require('express');
const app = express();


app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.use('/',require('./router'));

app.listen(8080,()=>{
    console.log('servidor abierto en el puerto 8080');
});