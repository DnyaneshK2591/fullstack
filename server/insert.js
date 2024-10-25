const dbConnect = require('./mongodb');

const insert = async ()=> {
    const db = await dbConnect();
    const result = await db.insertOne(
        {
            name:'Rani',
            age:"29"
        }
    );
    console.log(result);
}

insert();