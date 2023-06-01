const {MongoClient}=require('mongodb');
// const url= "mongodb+srv://root:root@cluster0.y7cfcpt.mongodb.net/";
const url= "mongodb://127.0.0.2:27017/";
const database='user';
const client= new MongoClient(url);
console.log('connnecting...');
 async function getData() {
  let result= await client.connect();
  console.log('connected');
  let db=result.db(database);
  // console.log(db);
  let collection = db.collection('data');
  // console.log(collection);
  
  let response= await collection.find({}).toArray();
  console.log(response);
}

getData();