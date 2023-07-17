// const { MongoClient } = require("mongodb");
// const mongoose = require("mongodb").MongoClient;

/**
 * @see https://stackoverflow.com/questions/28712248/difference-between-mongodb-and-mongoose
*/
const mongoose = require("mongoose")
mongoose.Promise = global.Promise;

const uri = "mongodb://localhost:27017"
const dbName = "todo"

module.exports = mongoose.connect(`${uri}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
