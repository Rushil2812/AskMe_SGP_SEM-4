const mongoose = require('mongoose')

const url = "mongodb://rushil:rushil@cluster0-shard-00-00.tkruq.mongodb.net:27017,cluster0-shard-00-01.tkruq.mongodb.net:27017,cluster0-shard-00-02.tkruq.mongodb.net:27017/AskMe?ssl=true&replicaSet=atlas-pt4vx1-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => { console.log('Mongo connected succesfully') }).catch((error) => console.log("Error: ", error))
}