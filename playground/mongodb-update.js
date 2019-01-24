// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
 if (err) {
     return console.log('Unable to connect to MongoDB Server');
 } 
 console.log('Connected to MongoDB Server');

 const db = client.db('TodoApp');

// db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('5c35e0b630449b74bddc2a82')
// }, {
//     $set: {
//     completed: true
//     }
// }, {
//     returnOriginal: false
// }).then((result) => {
//     console.log(result);
// });

db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c35e4cf30449b74bddc2cfa')
}, {
    $set: {
    name: 'Drazen'
    },
    $inc: {age: 1}
}, {
    returnOriginal: false
}).then((result) => {
    console.log(result);
});


//  client.close();
});