const conexion=require('../db/db');

exports.save=(req,res)=>{
    const nombre = req.body.nombre;
    const main = req.body.main;
    const rol = req.body.rol;
    const servidor = req.body.servidor;
    conexion.query('insert into jugador SET ?',{nombredeinvocador:nombre,main:main,rol:rol,servidor:servidor},(error,results)=>{
        if(error){
            console.log(error);
        }
        else{
            res.redirect('/');
        }
    })
}

exports.update =(req,res)=>{
    const id=req.body.id;
    const nombre = req.body.nombre;
    const main = req.body.main;
    const rol = req.body.rol;
    const servidor = req.body.servidor;
    conexion.query('UPDATE jugador set ? where id = ?',[{nombredeinvocador:nombre,main:main,rol:rol,servidor:servidor},id],(error,results)=>{
        if(error){
            console.log(error);
        }
        else{
            res.redirect('/');
        }
    })
}