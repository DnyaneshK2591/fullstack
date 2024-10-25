const express = require('express');
const dbConnect = require('./config_mongodb');
const mongodb = require('mongodb');
const app = express();

app.use(express.json());

/**
 * Get API - get all post from collection
 */
app.get('/', async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  res.send(data);
});

/**
 * Post API -
 */
app.post('/', async (req, res) => {
  let data = await dbConnect();
  let result = await data.insertOne(req.body);
  res.send(result);
});

/**
 * Put API -
 */
app.put('/', async (req, res) => {
  let data = await dbConnect();
  let result = data.updateMany(
    {
      postedon: req.body.postedon,
    },
    {
      $set: req.body,
    }
  );
  res.send({ result: 'Update successful ...' });
});

/**
 * Delete API -
 */
app.delete('/:id', async (req, res) => {
  let data = await dbConnect();
  let result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  res.send('Delete successful ...');
});

app.listen(4201);
