const express =require('express');
const app = express();
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
const port = process.env.PORT || 8080;
const personDetails = require('./userDb');


app.get('/personDetails',(req,res,next)=>{
    console.log(personDetails);
    res.status(200).json(personDetails);
})
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port);
module.exports = app;