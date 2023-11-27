const GeoCode = "http://api.openweathermap.org/geo/1.0/direct?q=";
const API_Key = "&appid=92b787a46f030c1ca9f7afe522c408a4";
let c = inp1;
var lat,lon;
const getCityCoord = (c) => { 
  cname.innerHTML = c + "'s Weather Details";
  fetch(GeoCode + c + API_Key + "&units=metric")
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      lt1.innerHTML = response[0].lat;
      lat = response[0].lat;
      lg1.innerHTML = response[0].lon;
      lon = response[0].lon;
    })
    .catch((err) => {
      console.error(err);
      });
};
    
const getAirDetails = (c) => {  
const AirAPI = "http://api.openweathermap.org/data/2.5/air_pollution?lat="+lat+"&lon="+lon;
  fetch(AirAPI + API_Key)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      aqi.innerHTML = ":"+response.list[0].main.aqi;
      p2.innerHTML = ":"+response.list[0].components.pm2_5;
      p10.innerHTML = ":"+response.list[0].components.pm10;
      co.innerHTML = ":"+response.list[0].components.co;
      nm.innerHTML = ":"+response.list[0].components.no;
      nd.innerHTML = ":"+response.list[0].components.no2;
      oz.innerHTML = ":"+response.list[0].components.o3;
      sd.innerHTML = ":"+response.list[0].components.so2;
      am.innerHTML = ":"+response.list[0].components.nh3;

    })
    .catch((err) => {
      console.error(err);
      alert("Invalid Location!/No Internet Access!");
    });
};

op1.addEventListener("click", (e) => {
  e.preventDefault();
  cards.style.visibility = "visible";
  coord.style.visibility = "visible";
  getCityCoord(c.value);
  setTimeout(()=> {getAirDetails(c)},3000);      
});
