const mongoose = require('mongoose')  //importing mongoose
const mongoUrl = 'mongodb://localhost:27017/SG'  // definning url

mongoose.connect(mongoUrl)
.then(() => {
    console.log('Connection is established successfully');
})
.catch((err) => {
    console.error('There is an error connecting to MongoDB:', err);
});
const db = mongoose.connection;

db.on('disconnected',()=>{
    console.log('connection is disconnecteD successfully');
})

module.exports = db;



