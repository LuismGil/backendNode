const db = require('mongoose');
const { default: model } = require('./model');
require('dotenv').config()

const dbUser = encodeURIComponent(process.env.DB_USER)
const dbPassword = encodeURIComponent(process.env.DB_PASSWORD)
const dbHost = encodeURIComponent(process.env.DB_HOST)
const dbName = process.env.DB_NAME

db.Promise = global.Promise;
db.connect(`mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
});

console.log('[db] Connected');

function addMessage(message) {
    list.push(message);
}

async function getMessages() {
  const messages = await model.find();
  return messages;
}

module.exports= {
    add: addMessage,
    list: getMessages,
    // get
    // update
    // delete
}