const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '58dd9305f2fe19602d8e81d411';

// if (!ObjectID.isValid(id)) {
// 	return console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({	
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

User.findById('58dd749aa465aa040c7ff0d2').then((user) => {
	if (!user) {
		return console.log('Unable to find user.');
	}

	console.log(JSON.stringify(user, undefined, 2));
}, (e) => console.log(e));