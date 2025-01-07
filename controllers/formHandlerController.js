const db = require('../db/queries')
//This has to be changed

async function renderFormController(req, res) {
    res.render('form')
}

async function addMessage(req, res) {
    const {name, message} = req.body;
    await db.addNewMessage(message, name);
    res.redirect('/')
}

module.exports = {
    addMessage,
    renderFormController
}
