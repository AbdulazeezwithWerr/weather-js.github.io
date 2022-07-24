fetch('http://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=a54c2d23c534e7731381956fb2abb57e')
.then(function(resp) {return resp.json()})
.then(function(data){
    console.log(data);
    document.querySelector('.pasi').textContent =  data.name + ', Uzbekistan';
    document.querySelector('.temperatura').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.tepasi').textContent = data.weather[0]
    ['description'];
    //https://openweathermap.org/img/wn/01d@2x.png
    document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
})
.catch(function(){

})