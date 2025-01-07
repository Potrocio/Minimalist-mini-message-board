const db = require("../db/queries")

async function queryMessagesController() {
    const messages = await db.getAllMessages();
    return messages
}

module.exports = {
    queryMessagesController
}