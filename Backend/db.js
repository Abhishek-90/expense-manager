const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const dbUri = process.env.Db_Uri;

const connectToMongoose = () => {
    mongoose.connect(dbUri, ()=>{
        console.log("Connected to Mongoose Database");
    })
}

module.exports = {connectToMongoose};
