const Api_Link = "https://api.openweathermap.org/data/2.5/forecast?q=";
const API_Key = "&appid=92b787a46f030c1ca9f7afe522c408a4";
let c = inp1;

const getWeather = (c) => {
  cname.innerHTML = c+"'s Weather Details";
  fetch(Api_Link + c + API_Key + "&units=metric")
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      dt1.innerHTML = response.list[3].dt_txt.slice(0, 10);
      f1.innerHTML =  response.list[3].main.feels_like+"&degC";
      t1.innerHTML =  response.list[3].main.temp+"&degC";
      ma1.innerHTML = response.list[3].main.temp_max+"&degC";
      mi1.innerHTML = response.list[3].main.temp_min+"&degC";
      ht1.innerHTML = response.list[3].main.humidity+"%";
      wd1.innerHTML = response.list[3].wind.speed+"m/s";
      lt1.innerHTML = response.city.coord.lat;
      lg1.innerHTML = response.city.coord.lon;

      dt2.innerHTML = response.list[19].dt_txt.slice(0, 10);
      f2.innerHTML = response.list[19].main.feels_like+"&degC";
      t2.innerHTML = response.list[19].main.temp+"&degC";
      ma2.innerHTML = response.list[19].main.temp_max+"&degC";
      mi2.innerHTML = response.list[19].main.temp_min+"&degC";
      ht2.innerHTML = response.list[19].main.humidity+"%";
      wd2.innerHTML = response.list[19].wind.speed+"m/s";

      dt3.innerHTML = response.list[35].dt_txt.slice(0, 10);
      f3.innerHTML = response.list[35].main.feels_like+"&degC";
      t3.innerHTML = response.list[35].main.temp+"&degC";
      ma3.innerHTML = response.list[35].main.temp_max+"&degC";
      mi3.innerHTML = response.list[35].main.temp_min+"&degC";
      ht3.innerHTML = response.list[35].main.humidity+"%";
      wd3.innerHTML = response.list[35].wind.speed+"m/s";
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
  getWeather(c.value);
});
