var env = process.env.NODE_ENV || 'development';
console.log('ENV ***************', env)

if (env === 'development') {
	process.env.PORT = 3000;
	process.env.PROD_MONGODB = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
	process.env.PORT = 3000;
	process.env.PROD_MONGODB = 'mongodb://localhost:27017/TodoAppTest';	
}