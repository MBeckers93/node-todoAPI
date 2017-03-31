const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

Todo.findOneAndRemove({_id: '58dda5d630980825f46355d6'}).then((todo) => {
	console.log(todo);	
});

Todo.findByIdAndRemove('58dda5d630980825f46355d6').then((todo) => {
	console.log(todo);
});