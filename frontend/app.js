const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/',(req,res) =>{
    res.sendFile(__dirname+'/public/index.html')
})

app.post('/submit',async (req,res) => {
    try {
        console.log("Backend URL:", process.env.API_URL);
        const response = await axios.post(process.env.API_URL, req.body)
        res.send(response.data)
    } catch (error) {
        console.error("Error on submitting form:", error);
        res.status(500).send("Internal server error");
    }
})

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})