const express = require('express')
const cors = require('cors')
require ('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());


app.get('/' , (req ,res)=>{
    res.send('<h1>ho i am laundry app</h1>');
    console.log('laundry app home page')
})

app.listen(port , ()=>{
    console.log(`server is running on port ${port}`) 
});