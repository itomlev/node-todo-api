var env = process.env.NODE_ENV || 'development'; //Heroku only support

if (env === 'development') {
  process.env.PORT = 3000;  //Localhost support vs Heroku
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
  process.env.PORT = 3000;  //Localhost support vs Heroku
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}
