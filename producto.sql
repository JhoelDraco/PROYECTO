CREATE DATABASE producto;
use producto;
create table tproducto
(
id_producto int primary key not null,
id_tipo int,
descripcion varchar(50),
precio_compra double,
precio_venta double,
cantindad int,
activo bit
)
Select * from tproducto;
INSERT INTO tproducto (id_producto,id_tipo,descripcion,precio_compra,precio_venta,cantindad,activo)
