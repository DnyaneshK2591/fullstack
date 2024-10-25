/**
 * Non Global Module import
 */
const colors = require('colors');
const http = require('http');


/**
 * Simple REST API
 */

http.createServer((request,response)=>{
    response.writeHead(200,{
        'Content-Type':'application/json'
    });
    response.write(JSON.stringify({
        name:"Dnyaneshwar K",
        email:"test@gmail.com"
    }));
    response.end();
}).listen(4201);
