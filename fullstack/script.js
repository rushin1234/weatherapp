
let cityname = prompt('Enter any city ')
document.getElementById('temp').innerHTML  = 'Loading..'
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=252a56874d495f902740b98abe3fc8ed`)
    .then(response => response.json())
    .then(data => {
        console.log('Response:', data);
        document.getElementById('temp').innerHTML = data.main.temp
        document.getElementById('tempmin').innerHTML = data.main.temp_min
        document.getElementById('tempmax').innerHTML = data.main.temp_max
        document.getElementById('city').innerHTML = data.name
        document.getElementById('country').innerHTML = data.sys.country
        if(data.weather[0].main == 'Clouds') {
            document.getElementById('icon').classList.remove('fa-sun')
            document.getElementById('icon').classList.add('fa-cloud')
        } else {
            document.getElementById('icon').classList.remove('fa-cloud')
            document.getElementById('icon').classList.add('fa-sun')
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
function getCurrentTime() {
    let d = new Date()
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    let zone = 'AM'
    let day = days[d.getDay()]
    let month = months[d.getMonth()]
    let date = d.getDate()
    let hour = d.getHours()
    if (hour > 12) {
        hour -= 12
        zone = 'PM'
    }
    let minute = d.getMinutes()
    document.getElementById('date').innerHTML = day + ' | ' + month + ' ' + date + ' | ' + hour + ':' + minute + ' ' + zone
}
getCurrentTime()
setInterval(getCurrentTime(), 60000)