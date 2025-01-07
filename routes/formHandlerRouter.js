const express = require('express');
const formHandlerRouter = express.Router();
const formHandlerController = require('../controllers/formHandlerController')
// const name of controller

formHandlerRouter.get('/', formHandlerController.renderFormController)
formHandlerRouter.post('/', formHandlerController.addMessage)



module.exports = formHandlerRouter;