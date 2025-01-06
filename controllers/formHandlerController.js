const messages = require('../db/queries')

exports.renderFormController = (req, res) => {
    res.render('form')
}

exports.newMessageController = (req, res) => {
    const {name , message} = req.body;
    messages.push({ text: message, user: name, added: new Date() });
    res.redirect('/')
    console.log(messages)
}