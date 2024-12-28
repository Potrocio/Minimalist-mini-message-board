const express = require("express")
const path = require("node:path")

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const messages = [
    {
      text: "Hi there!",
      user: "John",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "John 2",
      added: new Date()
    }
  ];

app.get('/', (req, res) => {
    res.render('index', {title: "Mini message board", messages: messages})
})

app.get('/new', (req, res) => {
    res.render('form')
})

app.get('/details/:id', (req, res) => {
    res.render('message-details', {message: messages[req.params.id]})
})

app.post('/new', (req, res) => {
    const {name , message} = req.body;
    messages.push({ text: message, user: name, added: new Date() });
    res.redirect('/')
})

app.listen(8080, () => {
    console.log('Server running on port 8080')
})

