const express = require('express');
const routes = express.Router();

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        conn.query('SELECT * FROM product', (err, table)=>{
            if(err) return res.send(err);
            res.json(table);
        })
    });
});

module.exports = routes;