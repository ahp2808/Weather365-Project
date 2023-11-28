const Api_Link = "	https://api.openweathermap.org/data/2.5/weather?q=";
    const API_Key = "&appid=92b787a46f030c1ca9f7afe522c408a4";
    let c = inp1;

    const getWeather = (c) => {
      cname.innerHTML = c;

      fetch(Api_Link + c + API_Key + "&units=metric")
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          feels_like.innerHTML = response.main.feels_like + "&degC";
          Temp.innerHTML = response.main.temp + "&degC";
          Temp_Max.innerHTML = response.main.temp_max + "&degC";
          Temp_Min.innerHTML = response.main.temp_min + "&degC";
          Humidity.innerHTML = response.main.humidity + "%";
          Wind_Spd.innerHTML = response.wind.speed + "m/s";
        })
        .catch((err) => {console.error(err)
                        alert("Invalid Location!/No Internet Access!")
        });
    };

    op1.addEventListener("click", (e) => {
      e.preventDefault();
      srchct.style.visibility = "visible";
      getWeather(c.value);
    });

    const Cdel = (c) => {
      c = "Delhi";
      fetch(Api_Link + c + API_Key + "&units=metric")
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          D1.innerHTML = response.main.temp + "&degC";
          D2.innerHTML = response.main.temp_max + "&degC";
          D3.innerHTML = response.main.temp_min + "&degC";
          D4.innerHTML = response.main.humidity + "%";
        })
        .catch((err) => console.error(err));
    };
    Cdel(c.value);

    const CAhm = (c) => {
      c = "Ahmedabad";
      fetch(Api_Link + c + API_Key + "&units=metric")
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          A1.innerHTML = response.main.temp + "&degC";
          A2.innerHTML = response.main.temp_max + "&degC";
          A3.innerHTML = response.main.temp_min + "&degC";
          A4.innerHTML = response.main.humidity + "%";
        })
        .catch((err) => console.error(err));
    };
    CAhm(c.value);
    const CBen = (c) => {
      c = "Mumbai";
      fetch(Api_Link + c + API_Key + "&units=metric")
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          M1.innerHTML = response.main.temp + "&degC";
          M2.innerHTML = response.main.temp_max + "&degC";
          M3.innerHTML = response.main.temp_min + "&degC";
          M4.innerHTML = response.main.humidity + "%";
        })
        .catch((err) => console.error(err));
    };
    CBen(c.value);