const store = require('./store');

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error('[messageController] User or message is undefined');
      reject('Wrong data');
      return false;
    }

    const fullMessage = {
      chat: chat,
      user: user,
      message: message, 
      date: new Date()
    }
    store.add(fullMessage);

    resolve(fullMessage)
  });
};

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  })
}

async function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject('Invalidad data');
      return false;
    }

    const result = await store.updateText(id, message);

    resolve(result);
  })
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Invalid Id');
      return false;
    }

    store.remove(id)
      .then(() => {
        resolve();
      })
      .catch((e) => {
        reject(e);
      })
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage
}; 