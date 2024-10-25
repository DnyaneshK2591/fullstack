/**
 * Non Global Module import
 */
const {MongoClient} = require('mongodb');


/**
 * MongoDB database connection url i.e. local or cloud 
 */
const mongoUrl = "mongodb://localhost:27017";
const mongoDb = "test";

/**
 * MongoDB connection
 */
const client =  new MongoClient(mongoUrl);

/**
 * MongoDB connection function
 */
async function dbConnect() {
    let result = await client.connect();
    let db = result.db(mongoDb);
    return db.collection('users');
    //let response = await collection.find({}).toArray();
    //console.log(response);
}

module.exports = dbConnect;