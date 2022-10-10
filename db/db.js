const mysql=require('mysql');

const conexion=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'n0m3l0',
    database:'lolplayers'
});

conexion.connect((error)=>{
    if(error){
        console.error('error de conexion'+ error);
        return
    }
    console.log('conexion exitosa');
});

module.exports=conexion;