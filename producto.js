const express = require("express");
const mysql = require("mysql2");
const app = express();
app.use(express.json());

const conexion = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'JHOEL12345',
    database: 'producto'
}
);

conexion.connect((err)=>{
    if(err){
        throw err;
    }else {
        console.log('Conexion exitosa');
    }
});


app.post('/prod',(req,res)=>{
    data= {id_producto:req.body.id_producto,
        id_tipo:req.body.id_tipo,
        descripcion:req.body.descripcion,
        precio_compra:req.body.precio_compra,
        precio_venta:req.body.precio_venta,
        cantindad:req.body.cantindad
    }
    let sql="insert into tproducto set ?";
    conexion.query(sql, data, (err, resul)=>{
        if(err){
            console.log(err.message);
            res.json({mensaje:'Error inesperado'});
        }else{
            res.json(resul);

        }
    });
})

app.get('/prod' , (req, res)=>{
    console.log('sql');
let sql= 'Select id_producto, id_tipo, descripcion, precio_compra, precio_venta, cantindad from tproducto';
conexion .query(sql,(err,resul)=>{
if(err){
    console.log(err.message);
    res.json({mensaje: 'Error inesperado'});
}else{
    res.json(resul);
}
});
});

app.listen(3000, ()=>{
    console.log('Servidor OK en puerto 3000');
});



/*
app.get('/',(req,res) => { 
    res.send('hola mundo');
});
app.get('/saludo',(req,res)=>{
    console.log('Buenos dias tecnologos');
    res.send('Buenos dias jskskj');
});
app.get('/saludo/:nombre',(req,res)=>{
    res.send(`buenos dias ${req.params.nombre}`);
});
app.get('/saludo/:nombre/:edad',(req,res)=>{
    res.send(`buenos dias ${req.params.nombre,req.params.edad}`);
    
});
*/

