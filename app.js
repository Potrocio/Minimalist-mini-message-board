const express = require("express")
const path = require("node:path")
const formHandlerRouter  = require('./routes/formHandlerRouter')
const { queryMessagesController } = require("./controllers/queryMessagesController")
require('dotenv').config()

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use('/new', formHandlerRouter);

app.get('/', (req, res) => {
  queryMessagesController()
  .then((messages) => {
    console.log(messages)
    res.render('index', {title: "Mini message board", messages: messages})
  })
})

app.get('/details/:id', (req, res) => {
  queryMessagesController()
  .then((messages) => {
    res.render('message-details', {message: messages[req.params.id]})
  })
})

const PORT = process.env.PORT || 4044;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})