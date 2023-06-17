const API_KEY = '96b947a45d33d7dc1c49af3203966408'
const API = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`

const data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=Toshkent&appid=${API_KEY}`)

console.log(data);

