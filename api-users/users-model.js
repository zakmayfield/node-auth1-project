const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy
}

function find (){
  return db('users').select('id', 'username', 'password')
}

function add (user) {
  return db('users')
    .insert(user, "id")
}

function findBy(filter){
  return db('users')
    .select('id', 'username', 'password')
    .where(filter)
}