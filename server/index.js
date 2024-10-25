/**
 * Non Global Module import
 */
// const http = require('http');
// const colors = require('colors');
const express = require('express');

/**
 * Local Module import
 */
const dbConnect = require('./config_mongodb');

/**
 * Way 1
 */
// dbConnect().then((res)=>{
//     res.find({}).toArray().then((data)=>{
//         console.log(data);
//     })
// })

/**
 * Way 2
 */

const main = async () => {
  let data = await dbConnect();
  data = await data.find({}).toArray();
  console.log(data);
};

main();

/**
 * Express JS initialisation
 */
const app = express();

app.get('/home', (req, res) => {
  res.send('hello');
});
app.listen(4201);

/**
 * Simple REST API
 */
/*
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
*/
