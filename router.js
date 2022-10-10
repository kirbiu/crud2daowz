const express = require ('express');
const router = express.Router();
const conexion= require('./db/db');

router.get('/',(req,res)=>{
    conexion.query('SELECT * FROM JUGADOR',(error,results)=>{
        if(error){
            throw error;
        }
        else{
            res.render('index',{results:results});
        }
    });
});

router.get('/create',(req,res)=>{
    res.render('create')
});

router.get('/edit/:id',(req,res)=>{
    const id=req.params.id;
    conexion.query('Select * from jugador where id=?',[id],(error,results)=>{
        if(error){
            throw error;
        }
        else{
            res.render('edit',{user:results[0]});
        }
    })
})

router.get('/delete/:id',(req,res)=>{
    const id=req.params.id;
    conexion.query('delete from jugador where id=?',[id],(error,results)=>{
        if(error){
            throw error;
        }
        else{
            res.redirect('/');
        }
    })
})
const crud=require('./controladores/crud');


router.post('/save',crud.save);
router.post('/update',crud.update)
module.exports=router;