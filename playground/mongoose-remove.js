const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

Todo.remove({}).then((result) => {
    console.log(result);
});

// Todo.findOneAndRemove

Todo.findByIdAndRemove('5c4986ef37c18b42dce1170f').then((todo) => {
    console.log(todo);
})