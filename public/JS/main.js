const btn = document.getElementById("submitBtn");
const cityname = document.getElementById("cityname");
const city_Name = document.getElementById("city_name");

const temp = document.getElementById("temp");


const getInfo = async (event) => {
//   event.preventDefult();
  let cityVal = cityname.value;
  if (cityVal === "") {
    city_Name.innerText = "please enter right city name";
  } else {


    try{
        let url =
        "https://api.openweathermap.org/data/2.5/weather?q=germany&appid=9cb139095be13692f0f8ac68f7252781";
        const response = await fetch(url);
        const data =  await response.json();
        const arrData = [data];

        temp.innerText = arrData[0].main.temp;
        console.log(data);
    }catch{

        city_Name.innerText = "please Enter Right City Name";

    }
 
  }
};

btn.addEventListener("click", getInfo);
