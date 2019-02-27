const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/mydb',{ useNewUrlParser: true },(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
 }
 console.log('Connected to MongoDB server');
const db=client.db('mydb');
 db.collection('newtodo').insertOne({
  text:'sbsk'

},(err,result)=>{
if(err){
  return console.log('Unable to insert todo',err);
}


console.log(JSON.stringify(result.ops,undefined,2));
});

 client.close();



});
