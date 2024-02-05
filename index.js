import express from 'express';
import bodyparser from 'body-parser';
import usersRoutes from './routes/users.js';
import {PORT,mongoDBURL} from './config.js';
import mongoose from 'mongoose';

const app = express();

app.use(bodyparser.json());
app.use('/users',usersRoutes); 

app.get('/',(req,res)=>{
    console.log('[TEST]');
    res.send("Hello from home");
})
mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log("App connected Successfully");
        app.listen(PORT,()=> console.log('server running on port 5000'));
    })
    .catch((error)=>{
        console.log(error);
    })

