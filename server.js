const express = require('express');
//obtengo servicio sql
const mysql = require('mysql');
const myconn = require('express-myconnection');

//obtengo mapeo de ruta
const route = require('./routes');
const routes = require('./routes');

const app = express();
app.set('port', process.env.PORT || 9000);
// Add the credentials to access your database
var dbOptions = {
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user: 'bsale_test',
    password: 'bsale_test',
    database: 'bsale_test'
};
//midleware para conexion con banco de datos-------------------
app.use(myconn(mysql, dbOptions, 'single'));

//routes ------------------------------------------------------
app.use('/index', routes);

//Server Runing
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'));
});