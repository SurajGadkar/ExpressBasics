import express from 'express';
import mongoose from 'mongoose';
const app = express();


app.get('/', (req, res) => {
    res.send("Hello World!")
})
mongoose.connect('mongodb+srv://surajgadkar14_db_user:4RDJzoHP0gpgcXgB@refresher.xbdyn8j.mongodb.net/?appName=Refresher')
.then(() => {
    console.log('Connected!')}
)
.then (()=> {
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
})
.catch(err => console.log(err))



