const express = require('express');
require('./config_mongoosedb');
const posts = require('./schema_posts');

const app = express();
app.use(express.json());

app.post("/create", async (req,res)=>{
    let data = new posts(req.body);
    let result = await data.save();
    res.send("Created successfully ...");
})

app.get("/list", async (req,res)=>{
    let data = await posts.find();
    res.send(data);
})

app.delete("/delete/:_id", async (req,res)=>{
    let data = await posts.deleteOne(req.params);
    res.send("Delete successfull ...");
})

app.put("/update/:_id", async (req,res)=>{
    let data = await posts.updateOne(
            req.params,
        {
            $set:req.body
        }
    );
    res.send(data);
})

app.listen(4201);