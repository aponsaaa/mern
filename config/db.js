const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            UseNewUrlParser: true
        });
        console.log("MonggoDB Connected");
    } catch (error) {
        console.log(error.message);
        // exit process with failur
        process.exit(1);
    }
}

module.exports = connectDB; 
