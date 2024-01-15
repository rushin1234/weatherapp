
const axios = require('axios')
const bodyParser = require('body-parser');

const express = require('express');
const path = require('path');
const app = express()
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../frontend')))
app.post('/', (req, res) => {
    const city = req.body.city;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=252a56874d495f902740b98abe3fc8ed`)
        .then((response) => {
            res.json({
                temp: response.data.main.temp,
                temp_min: response.data.main.temp_min,
                temp_max: response.data.main.temp_max,
                city: response.data.name,
                country: response.data.sys.country,
                status: response.data.weather[0].main
            })
        })
        .catch(e => res.send('city not found'))
});
app.listen(8000, () => {
    console.log('listening at 8000')
})
