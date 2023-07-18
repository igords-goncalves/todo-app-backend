// const { MongoClient } = require("mongodb");
// const mongoose = require("mongodb").MongoClient;

/**
 * @see https://stackoverflow.com/questions/28712248/difference-between-mongodb-and-mongoose
*/
const mongoose = require("mongoose")
mongoose.Promise = global.Promise;

module.exports = mongoose.connect("mongodb://localhost:27017/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
