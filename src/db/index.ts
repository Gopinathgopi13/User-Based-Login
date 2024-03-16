import mongoose from 'mongoose';

const uri ='mongodb://localhost:27017/dummy';

mongoose.connect(uri).then(()=>{
    console.log("DB is connected")
}).catch(err => console.log(err))