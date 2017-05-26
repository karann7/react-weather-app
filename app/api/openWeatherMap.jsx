var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=7349bcbde71c819ee8362d31bdd37251';

//api key    7349bcbde71c819ee8362d31bdd37251

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error('Unable to fetch weather');
      } else {
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error('Unable to fetch weather');
    });
  }
};



//gonna re-write this using geolocation and darksky API instead this one sucks!