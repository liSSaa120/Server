const express = require("express");
const server = express();

server.use("/static", function(request, response){
    response.send({header:"Hello", body:"Octagon NodeJS Test"});
});

server.use("/dynamic", function(request, response){
      
    const a = request.query.a;
    const b = request.query.b;
    const c = request.query.c;

    if(isNumber(a) && isNumber(b) && isNumber(c)){
        response.send({header:"Calculated", body:((a * b * c) / 3)});
    }
    else{
        response.send({header:"Error"});
    };
});

server.listen(3000, 'localhost');

function isNumber(num){
    if(num === null || (typeof num === "string" && num.length === 0)){
        return false;
    };

    return !isNaN(num);
};