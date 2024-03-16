import express from 'express';
import 'src/db'
import authRouter from './routes/auth';
const app = express();

const PORT = process.env.PORT || 5000


app.use(express.json())


app.use(authRouter);
app.get('/', (req, res)=>{
    res.json({"ok": true});
})

app.listen(PORT, ()=>{
    console.log(`Server is running on the port ${PORT}` )
})