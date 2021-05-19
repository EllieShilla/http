const express = require("express");
   
const app = express();
 
app.get("/sum", function(request, response){
       
    const number1 = parseInt(request.query.num1);
    const number2 = parseInt(request.query.num2);
 
    const sum = number1 + number2;
     
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
     
    response.send({result: sum});
});
  
app.listen(3000);
