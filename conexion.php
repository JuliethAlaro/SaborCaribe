<?php

$ usuario = 'root';
$ contraseña = 'raíz';
$ db = 'comentarios';
$ host = 'localhost';
$ puerto = 3306;

$ enlace = mysql_connect (
   "$ host: $ puerto", 
   $ usuario, 
   $ contraseña
);
$ db_selected = mysql_select_db (
   $ db, 
   $ enlace
);
?>