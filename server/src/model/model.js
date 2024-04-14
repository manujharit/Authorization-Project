const mongo = require('mongoose')

mongo.connect('mongodb://localhost:27017/Auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('Database Connected')
}).catch((err)=>{
    console.log(err)
})

const userAuthSchema = new mongo.Schema({
    firstName : {
        type:String,
        required: true
    },
    lastName : {
        type : String
    },
    username : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required:true
    }
})

const Model = mongo.model('UserAuth',userAuthSchema)

module.exports = Model;