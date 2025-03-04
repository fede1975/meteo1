
 const axios = require("axios");
let apiKey = '71c406cd0696048af1069afda7277927';
let city = 'Noale';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`



 const express = require('express')
const app = express()
const port = 3000
app.set("view engine", "ejs");


app.get('/', async (req, res) => {

 
const response = await axios.get(url);
 
let weather;

weather = response.data;
console.log(weather.main)
res.render("index",{weather});



})





app.listen(port, () => {


  console.log(`Example app listening on port ${port}`)
})