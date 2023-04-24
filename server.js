require("dotenv").config();
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const mongoose = require("mongoose");
const bodyParser =require('body-parser')

const indexRouter =require('./routes/index')
const authorRouter =require('./routes/authors')
const bookRouter =require('./routes/books')


app.set('view engine','ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

mongoose.connect('mongodb+srv://nadezhdayagubova:5oSYP8l8nslLj0gw@cluster0.xjszrfu.mongodb.net/?retryWrites=true&w=majority');
mongoose.set("strictQuery", true);
//mongoose.connect(process.env.MONGO_URI, {
  //useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});


app.use('/', indexRouter)
app.use('/authors', authorRouter)
app.use('/books',bookRouter)




app.listen(process.env.PORT || 3000)