// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
 if (err) {
     return console.log('Unable to connect to MongoDB Server');
 } 
 console.log('Connected to MongoDB Server');

 const db = client.db('TodoApp');

// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//     console.log(result);
// });

// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//     console.log(result);
// });

// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//     console.log(result);
// });

// db.collection('Users').deleteMany({name: 'Drazen'}).then((result) => {
//     console.log(result);
// });

db.collection('Users').findOneAndDelete({_id : ObjectID("5c34d164005ebe0338bb189b")}).then((result) => {
    console.log(result);
});

//  client.close();
});