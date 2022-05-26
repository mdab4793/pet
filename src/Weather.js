const apiKey = "a11f1d9f2d08ba3a25222ff18fad0c30";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${apiKey}&lang=kr`;

const requestWeather = async () => {
  // API 호출
  const res = await fetch(apiUrl);
  // JSON 파싱
  const json = await res.json();

  const {
    weather: [{ main: weather }],
  } = json;
  console.log(`API 호출 결과 : ${weather}`);
  return weather;
};

const init = async () => {
  let weather = sessionStorage.getItem("weather");
  if (weather == null) {
    // API 호출
    weather = await requestWeather();
    // SessionStorage에 저장
    sessionStorage.setItem("weather", weather);
  }

  if (weather === "Rain") {
    console.log("Rain");
  } else if (weather === "Snow") {
    console.log("Snow");
  } else {
    console.log(weather);
  }
};

init();
