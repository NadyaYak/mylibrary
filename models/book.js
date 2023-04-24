const mongoose=require('mongoose')

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type:String,

    publishDate: {
       type: Date,
       required:true
    },
    pageCount:
    }
})

module.exports = mongoose.model('Book', bookSchema)