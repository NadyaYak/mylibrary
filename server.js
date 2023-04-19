require("dotenv").config();
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const mongoose = require("mongoose");

const indexRouter =require('./routes/index')
app.set('view engine','ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

mongoose.connect('mongodb+srv://nadezhdayagubova:5oSYP8l8nslLj0gw@cluster0.xjszrfu.mongodb.net/?retryWrites=true&w=majority');
mongoose.set("strictQuery", true);
//mongoose.connect(process.env.MONGO_URI, {
  //useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});


app.use('/', indexRouter)



app.listen(process.env.PORT || 3000)