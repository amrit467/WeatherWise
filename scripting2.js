document.addEventListener('DOMContentLoaded', function () {


 

    const apiKey = '3ad4fdd89d884f9a969113334240802';
    
    const defaultCity = 'New delhi';

    const toggleBtn=document.querySelector('#toggle-btn');
    const crossBtn=document.querySelector('#cross-btn');
    const collapsedMenu=document.querySelector('#collapsed-menu');

    toggleBtn.addEventListener('click',()=>
    {
        collapsedMenu.classList.remove('invis');
    })

    crossBtn.addEventListener('click',()=>
    {
        collapsedMenu.classList.add('invis');
    })

    const weatherDescriptionAll = {

        'Mist': ['assets/icon/mist2.png','assets/background/mist.jpg','Soft tendrils of mist gracefully float through the air, lending an air of mystery to the surroundings.'],
        
        'fog': ['assets/icon/fog.png','assets/background/fog.jpg','A subtle fog blankets the area, creating a sense of tranquility and calm.'],
        
        'smoke': ['assets/icon/mist.png','assets/background/fog.jpg','Hazy conditions due to the presence of smoke in the air, impacting visibility and air quality.'],
        
        'haze': ['assets/icon/haze2.png','assets/background/haze.jpg','Reduced visibility due to the presence of fine particles or pollutants in the air, creating a hazy atmosphere.'],
        
        'Overcast': ['assets/icon/cloudy.png','assets/background/most-cloudy.jpg','The sky is draped in overcast clouds, creating a subdued and misty atmosphere.'],
        
        'broken clouds': ['assets/icon/partly-cloudy.png','assets/background/cloudy.jpg','Partly cloudy skies with scattered clouds, allowing some sunshine to filter through.'],
        
        'few clouds': ['assets/icon/cloudy.png','assets/background/less-cloudy.jpg','A sky filled with clouds, resulting in overcast conditions and diffuse sunlight, with the possibility of precipitation.'],

        'Partly cloudy': ['assets/icon/cloudy.png','assets/background/less-cloudy.jpg','A sky filled with clouds, resulting in overcast conditions and diffuse sunlight, with the possibility of precipitation.'],

        'Partly Cloudy': ['assets/icon/cloudy.png','assets/background/less-cloudy.jpg','A sky filled with clouds, resulting in overcast conditions and diffuse sunlight, with the possibility of precipitation.'],
        
        'scattered clouds': ['assets/icon/partly-cloudy.png','assets/background/less-cloudy.jpg','Partly cloudy skies with scattered clouds, allowing some sunshine to filter through.'],
        
        'clear sky': ['assets/icon/sunny1.png','assets/background/sunny-day.jpg','Bright and sunny conditions with a clear sky, offering abundant sunshine and pleasant weather.'],

        'Clear': ['assets/icon/night.png','assets/background/night.jpg','Under the serene embrace of a clear night sky, stars twinkle, casting a celestial glow and enchanting the surroundings.'],
        
        'Sunny': ['assets/icon/sunny1.png','assets/background/sunny-day.jpg','Bright and sunny conditions with a clear sky, offering abundant sunshine and pleasant weather.'],
        
        'light intensity drizzle': ['assets/icon/drizzle.png','assets/background/drizzle.jpg','Light rain in the form of small, fine droplets, characterized by a gentle and steady precipitation.'],
        
        'drizzle': ['assets/icon/drizzle.png','assets/background/drizzle.jpg','Light rain in the form of small, fine droplets, characterized by a gentle and steady precipitation.'],
        
        'Patchy rain nearby' : ['assets/icon/rain.png','assets/background/rain.jpg','Light rain in the form of small, fine droplets, characterized by a gentle and steady precipitation.'],

        'light intensity shower rain': ['assets/icon/rain.png','assets/background/rain.jpg','Light rain in the form of small, fine droplets, characterized by a gentle and steady precipitation.'],

        'Light rain': ['assets/icon/rain.png','assets/background/rain.jpg','Light rain in the form of small, fine droplets, characterized by a gentle and steady precipitation.'],

        'Light rain shower': ['assets/icon/rain.png','assets/background/rain.jpg','Light rain in the form of small, fine droplets, characterized by a gentle and steady precipitation.'],
        
        'moderate rain': ['assets/icon/rain.png','assets/background/rain.jpg','Steady and moderate rainfall characterized by a more pronounced and sustained intensity of precipitation.'],

        'Moderate rain': ['assets/icon/rain.png','assets/background/rain.jpg','Steady and moderate rainfall characterized by a more pronounced and sustained intensity of precipitation.'],
        
        'heavy intensity rain': ['assets/icon/thunderstorm.png','assets/background/rain.jpg','Intense and heavy rainfall with a substantial volume of water falling within a short period.'],
        
        'thunderstorm with light rain': ['assets/icon/thunderstorm.png','assets/background/thunderstorm.jpg','Thunderstorm accompanied by flashes of lightning and the presence of light rain.'],
        
        'thunderstorm with rain': ['assets/icon/thunderstorm2.png','assets/background/thunderstorm-n.jpg','Thunderstorm with moderate to heavy rainfall, featuring both lightning and intensified precipitation.'],
        
        'thunderstorm with heavy rain': ['assets/icon/thunderstorm2.png','assets/background/thunderstorm-n.jpg','Intense thunderstorm with heavy rainfall, characterized by vigorous lightning, thunder, and a substantial volume of precipitation, leading to potential flooding.'],
        
        'light snow': ['assets/icon/snow.png','assets/background/snow2.jpg','Light snowfall with small, delicate snowflakes, creating a gentle dusting of snow on surfaces.'],
        
        'moderate snow': ['assets/icon/snow.png','assets/background/snow.jpg','Moderate snowfall with steady and more substantial accumulation of snow, creating a moderate layer on surfaces.'],
        
        'heavy snow': ['assets/icon/snow2.png','assets/background/snow.jpg','Heavy snowfall with intense and continuous snow, resulting in rapid accumulation and challenging travel conditions.'],
        
    };

    const weatherDescriptionAllNight =
    {
        'few clouds': ['assets/icon/partly-cloudy-n.png','assets/background/less-cloudy.jpg','A sky filled with clouds, resulting in overcast conditions and diffuse sunlight, with the possibility of precipitation.'],
        
        'scattered clouds': ['assets/icon/partly-cloudy-n.png','assets/background/less-cloudy.jpg','Partly cloudy skies with scattered clouds, allowing some sunshine to filter through.'],
        
        'clear sky': ['assets/icon/night.png','assets/background/night.jpg','Under the serene embrace of a clear night sky, stars twinkle, casting a celestial glow and enchanting the surroundings.']
        
    };
    
    const reversed = {
        'Afghanistan': 'AF',
        'Azerbaijan': 'AZ',
        'Iran': 'IR',
        'Sri Lanka': 'LK',
        'Maldives': 'MV',
        'Nepal': 'NP',
        'Bhutan': 'BT',
        'Bangladesh': 'BD',
        'Myanmar': 'MM',
        'Kazakhstan': 'KZ',
        'Kyrgyzstan': 'KG',
        'Uzbekistan': 'UZ',
        'Turkmenistan': 'TM',
        'Tajikistan': 'TJ',
        'Pakistan': 'PK',
        'United Arab Emirates': 'AE',
        'Oman': 'OM',
        'Qatar': 'QA',
        'Bahrain': 'BH',
        'Kuwait': 'KW',
        'Saudi Arabia': 'SA',
        'Yemen': 'YE',
        'Iraq': 'IQ',
        'Jordan': 'JO',
        'Lebanon': 'LB',
        'Syria': 'SY',
        'Palestine': 'PS',
        'Israel': 'IL',
        'Turkey': 'TR',
        'Cyprus': 'CY',
        'Algeria': 'DZ',
        'Angola': 'AO',
        'Argentina': 'AR',
        'Australia': 'AU',
        'Austria': 'AT',
        'Belarus': 'BY',
        'Belgium': 'BE',
        'Brazil': 'BR',
        'Canada': 'CA',
        'Chile': 'CL',
        'China': 'CN',
        'Colombia': 'CO',
        'Croatia': 'HR',
        'Czech Republic': 'CZ',
        'Denmark': 'DK',
        'Egypt': 'EG',
        'Finland': 'FI',
        'France': 'FR',
        'Germany': 'DE',
        'Greece': 'GR',
        'Hungary': 'HU',
        'Iceland': 'IS',
        'India': 'IN',
        'Netherlands': 'NL',
        'New Zealand': 'NZ',
        'Nigeria': 'NG',
        'South Africa': 'ZA',
        'South Korea': 'KR',
        'Spain': 'ES',
        'Sweden': 'SE',
        'Switzerland': 'CH',
        'Taiwan': 'TW',
        'Thailand': 'TH',
        'Tunisia': 'TN',
        'Ukraine': 'UA',
        'United Kingdom': 'GB',
        'United States': 'US',
        'Venezuela': 'VE',
        'Vietnam': 'VN',
        'Zambia': 'ZA',
        'Zimbabwe': 'ZW',
        'Indonesia': 'ID',
        'Italy': 'IT',
        'Japan': 'JP',
        'Mexico': 'MX',
        'Russia': 'RU'
      };
      
     
      

    const form =document.querySelector('#city-form');
    form.addEventListener('submit', function(event) 
    {
        event.preventDefault();
        const city=document.querySelector('#city').value;
        fetchCity(city);
    });

    let alerts;


    function fetchCity(city)
    {

        
        const apiUrl=`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=6&aqi=no&alerts=yes`;


        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {

            if(data.cod === 404)
            {
                alert("City not Found");
            }
            else if(data.cod === 400)
            {
                alert("Enter city name");
            }

            
            const city = data.location.name;
            const country=data.location.country;
            const temperature = data.current.temp_c;
            const description = data.current.condition.text;
            const windSpeed=data.current.wind_kph;
            const gustSpeed=data.current.gust_kph;
            const feelsLike=data.current.feelslike_c;
            const humiDity=data.current.humidity;
            const visiBility=data.current.vis_km;
            const pressure=data.current.pressure_mb;
            const lastUpdatedEpoch=data.current.last_updated_epoch;
            const currentTime=data.current.last_updated;
            const winDire=data.current.wind_dir;
            alerts=data.alerts.alert;

            const weatherForecast=data.forecast.forecastday;
            const sunrise = weatherForecast[0].astro.sunrise;
            const sunset = weatherForecast[0].astro.sunset;
            const moonrise=weatherForecast[0].astro.moonrise;
            const moonset = weatherForecast[0].astro.moonset;


            document.querySelector('#sun-rise').textContent=converter(sunrise);
            document.querySelector('#sun-set').textContent=converter(sunset);

            if(timeFetcher(currentTime) < converter(moonrise))
            {
                document.querySelector('.sun-container').classList.add('rever');
            }
            else
            {
                document.querySelector('.sun-container').classList.remove('rever');
            }

           


            const maxTemp = [];
            const minTemp = [];
            const avgTemp = [];
            const timeDay=[];
            const descDay=[];

            for(let weather of weatherForecast)
            {
                maxTemp.push(Math.floor(weather.day.maxtemp_c));
                minTemp.push(Math.floor(weather.day.mintemp_c));
                avgTemp.push(Math.floor(weather.day.avgtemp_c));
                timeDay.push(dateToRight(weather.date));
                descDay.push(weather.day.condition.text);
            }
        
            const uvInde=data.current.uv;
            const windDeg=data.current.wind_dir;
                     
            
            const city_name=document.getElementById('city-name');
            const temp_collection=document.querySelectorAll('.temperature');
            const one_word_desc=document.getElementById('weather-description');
            const describe=document.querySelector('#describe');
            const wind_speed=document.querySelector('#wind-speed');
            const gust_speed=document.querySelector('#gust-speed');
            const wind_dird=document.querySelector('#wind-dir');
            const feels_liked=document.querySelector('#feels-like');
            const humi_dity=document.querySelector('#humi-dity');
            const now_icon=document.querySelectorAll('.now-icon');
            const body=document.querySelector('body');

            const dayForecast=document.querySelectorAll('.day-forecast-temp');
            const dayForecastMaxMin=document.querySelectorAll('.min-max-n');
            const dayForecastText=document.querySelectorAll('.day-forecast');
            const dayIcons=document.querySelectorAll('.day-forecast-icon');
            const thisIcon = document.querySelector('#current-icon');
                        
            for(temp of temp_collection)
            {
                temp.textContent= `${Math.round(temperature)}°`
            }

            city_name.textContent = `${city}, ${country}`;
           
            one_word_desc.textContent = `${capitalize(description)}`;
           
            wind_speed.innerHTML=`${Math.round(windSpeed)}  <sup>KPH</sup> <sub>Wind</sub>`;
            gust_speed.innerHTML=`${Math.round(gustSpeed)}  <sup>KPH</sup> <sub>Gust</sub>`;
            wind_dird.textContent=setWind(winDire);
            feels_liked.textContent = `${Math.round(feelsLike)}°`;
            humi_dity.textContent = `${humiDity}%`;
            document.querySelector('#visibility').textContent=`${visiBility} Km`;
            document.querySelector('#air-pressure').textContent=`${pressure} hPa`;
            document.querySelector('#uv-index').textContent=uvInde;
            if(uvInde <= 2)
            {
                document.querySelector('#uv-one').textContent='Very Low';
                
                document.querySelector('#uv-desc').textContent='Good for Outer Activity';
            }
            else if((uvInde > 2) && (uvInde <= 5))
            {
                document.querySelector('#uv-one').textContent='Moderate';
                document.querySelector('#uv-desc').textContent='Avoid Unneccessary going outside';
            }
            else if((uvInde > 5) && (uvInde <= 8))
            {
                document.querySelector('#uv-one').textContent='High';
                document.querySelector('#uv-desc').textContent='Can Feel Skin burns when going outside';
            }
            else if((uvInde > 8) && (uvInde <= 10))
            {
                document.querySelector('#uv-one').textContent='Very High';
                document.querySelector('#uv-desc').textContent='Can Feel Skin burns when going outside';
            }
            else if(uvInde > 10)
            {
                document.querySelector('#uv-one').textContent='Extreme';
                document.querySelector('#uv-desc').textContent='Going Outside can be really harmful';
            }
            

            
            for(let descriptionShort in weatherDescriptionAll)
            {
                if(descriptionShort === description)
                {
                    let currentArr=weatherDescriptionAll[descriptionShort];
                    describe.textContent=currentArr[2];
                    body.style.background=`url(${currentArr[1]})`;
                    for(icon of now_icon)
                    {
                        icon.src=currentArr[0];
                    }
                    thisIcon.src=currentArr[0];
                    break;
                }
            }


            const todayHourWeather=data.forecast.forecastday[0].hour;
            const tomHourWeather=data.forecast.forecastday[1].hour;
            const hrData=[];
            const hrDescription=[];


            const hourForecastTemp=document.querySelectorAll('.hr-forecast-temp');
            const hourForecastIcon=document.querySelectorAll('.hr-forecast-icon');
            const hourForecastTime=document.querySelectorAll('.hr-forecast-time');

            for(let hr of todayHourWeather)
            {
                if(hr.time_epoch > lastUpdatedEpoch)
                {
                    hrData.push(hr);
                }
            }

            if(hrData.length < 6)
            {
                for(let hr of tomHourWeather)
                {
                    if(hr.time_epoch > lastUpdatedEpoch)
                    {
                        hrData.push(hr);
                    }
                }
            }


            for (let i = 0; i < hourForecastIcon.length; i++) {
                hourForecastTime[i].textContent = timeFetcher(hrData[i].time);
                hourForecastTemp[i].textContent = `${Math.floor(hrData[i].temp_c)}°`;
                hrDescription.push(hrData[i].condition.text);
                
                for (let descri in weatherDescriptionAll) {
                    if (hrData[i].condition.text === descri) {
                        let currentArr2 = weatherDescriptionAll[descri];
                        hourForecastIcon[i].src = currentArr2[0];
                    }
                }
            }
         


            if(description === 'broken clouds')
            {
                one_word_desc.textContent='Partly Cloudy';  
            }
            else if(description === 'few clouds')
            {
                one_word_desc.textContent='Cloudy'; 
            }
            else if(description === 'clear sky')
            {
                if(temperature > 277)
                {
                    one_word_desc.textContent='Sunny';
                }
                else
                {
                    one_word_desc.textContent='Clear Sky';
                }  
            }
            else if((description === 'light intensity drizzle') || (description === 'drizzle'))
            {
                one_word_desc.textContent='Drizzling';
            }
            else if((description === 'light rain') || (description === 'light intensity shower rain'))
            {
                one_word_desc.textContent='Little Rain';
            }
            else if(description === 'heavy intensity rain')
            {
                one_word_desc.textContent='Heavy Rain'
            }
            else if((description === 'thunderstorm with light rain') || (description === 'thunderstorm with rain') || (description === 'thunderstorm with heavy rain'))
            {
              one_word_desc.textContent='Thunderstorm';
            }

            if(humiDity >80)
            {
                document.querySelector('#humi-desc').textContent="Damp air, humidity exceeds 80%";
            }
            else if((humiDity >50) && (humiDity <80))
            {
                document.querySelector('#humi-desc').textContent="Moderate humidity, ranging 50-80%.";
            }
            else if((humiDity >20) && (humiDity <50))
            {
                document.querySelector('#humi-desc').textContent="Balanced humidity, ranging 20-50%.";
            }
            else if(humiDity<20)
            {
                document.querySelector('#humi-desc').textContent="Low Humidity, below 20%.";
            }


            if((feelsLike > temperature) && (humiDity > 60))
            {
                document.querySelector('#feels-like-desc').textContent="Humidity is making it feel warmer.";
            }
            else if((feelsLike < temperature) && (humiDity > 60))
            {
                document.querySelector('#feels-like-desc').textContent="Humidity and pressure are making it feel colder.";
            }
            else if(feelsLike < temperature)
            {
                document.querySelector('#feels-like-desc').textContent="Factors like wind chill make it feel colder than recorded temperature.";
            }
            else if(feelsLike > temperature)
            {
                document.querySelector('#feels-like-desc').textContent="It feels warmer due to factors like low wind and direct sunlight.";
            }





            for(let i =0;i<dayForecast.length;i++)
            {
                dayForecast[i].textContent=`${avgTemp[i]}°`;
                dayForecastMaxMin[i].textContent=`${maxTemp[i]}/${minTemp[i]}`;
                for(let one_word in weatherDescriptionAll)
                {
                    if(descDay[i] === one_word)
                    {
                        let currentArr=weatherDescriptionAll[one_word];
                        dayIcons[i].src=currentArr[0];
                    }
                }
                if( i == 0)
                {
                    continue;
                }
                else
                {
                    dayForecastText[i-1].textContent=timeDay[i];
                }
            }

            setTimeout(delayedFunction(city), 100);
        })
        .catch(error => console.error('Error fetching weather data:', error));

       

        function delayedFunction(country)
        {
            const api2key='';
        
            const url2 = `https://newsdata.io/api/1/news?apikey=${api2key}&q=pegasus&language=en`;

            fetch(url2)
            .then(response => response.json())
            .then(data => 
            {

               const results=data.results;
               for(let result of results)
               {
                    let title=result.title;
                    let wordsArray=title.split(/\s+/);
                    let wordsLength=wordsArray.length;
                    if(wordsLength > 7)
                    {
                        alerts.push(title);
                    }
               }
               alerts = [...new Set(alerts)];
              

               const alertsLength=alerts.length;
               let mar=document.querySelectorAll('.mar');
               let marLength=mar.length;
               const remaining=alertsLength-marLength;
               for(let i=0; i<remaining; i++)
               {
                    addheader();
               }
               mar=document.querySelectorAll('.mar');
               marLength=mar.length;
               for(let i=0; i<marLength;i++)
               {
                    mar[i].textContent=alerts[i];
               }



                
            })
            .catch(error => console.error('Error fetching weather data:', error));
    
        }

         
        
        
    }
    fetchCity(defaultCity);  
});

const addheader = () =>
{
    const marquees=document.querySelector('#hello-hi');
    let newElement = document.createElement("h3");
    newElement.classList.add("mar");
    marquees.appendChild(newElement);
}

const converter = (temp) =>
{
    const am=temp.indexOf("A");
    if(am !== -1)
    {
        return temp.slice(0,am);
    }
    else
    {
        let minut=temp.slice(3,5);
        let hrs= parseInt(temp.slice(0,2))+12;
        return `${hrs}:${minut}`;
    }
}

const dateConverter = (stri)=>
{
    return new Date(stri);
}

const capitalize = (str) =>
{
    if(!str.includes(" "))
    {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    else
    {
        let myStr = str.charAt(0).toUpperCase();
        for (let i = 1; i < str.length; i++) {
            if (str[i - 1] === " ") 
            {
                myStr += str[i].toUpperCase(); // Append the uppercase character
            } else {
                myStr += str[i];
            }
        }
        return myStr;
    }
}

const timeStampToDateConverter = (timestam) =>
{
    const dateObject = new Date(timestam * 1000);
    return dateObject;
}

const timeStampConverter = (timestamp) =>
{
    const date = new Date(timestamp * 1000); 
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    const formattedTime = `${hours}:${minutes}`;
    return formattedTime;
}

const computeWindDirection = (deg) =>
{
    if(((deg > 350) && (deg <= 360)) || ((deg >= 0) && (deg <= 22)))
    {
        return 'N wind';
    } 
    else if ((deg > 22) && (deg <= 45))
    {
        return 'NNE wind';
    }
    else if ((deg > 45) && (deg <= 67))
    {
        return 'NE wind';
    }
    else if((deg > 67) && (deg < 85))
    {
        return 'ENE wind';
    }
    else if ((deg >= 85) && (deg < 112))
    {
        return 'E wind';
    }
    else if ((deg >= 112) && (deg < 135))
    {
        return 'ESE wind';
    }
    else if((deg >= 135) && (deg < 157))
    {
        return 'SE wind';
    }
    else if((deg >= 157) && (deg < 175))
    {
        return 'SSE wind';
    }
    else if ((deg >= 175) && (deg < 202))
    {
        return 'S wind';
    }
    else if ((deg >= 202) && (deg < 225))
    {
        return 'SSW wind';
    }
    else if((deg >= 225) && (deg < 247))
    {
        return 'SW wind';
    }
    else if((deg >= 247) && (deg < 265))
    {
        return 'WSW wind';
    }
    else if((deg >= 265) && (deg < 292))
    {
        return 'W wind';
    }
    else if ((deg >= 292) && (deg < 315))
    {
        return 'WNW wind';
    }
    else if ((deg >= 315) && (deg < 337))
    {
        return 'SSW wind';
    }
    else if((deg >= 337) && (deg <= 350))
    {
        return 'NNW wind';
    }
    else
    {
        return 'undefined';
    }
}

const setWind = wind => 
{
   return `${wind} wind`;
}

const tempRight= (tempera,describti,timest,current) =>
{
    const tempo=[];
    const tempo1=[];
    const tempo2=[];
    for(let i=0;i<tempera.length;i++)
    {
        if(timest[i] > current)
        {
            tempo.push(tempera[i]);
            tempo1.push(describti[i]);
            tempo2.push(timest[i]);
        }
        else
        {
            continue;
        }
    }
    return [tempo,tempo1,tempo2];
}

const dateToRight = (date) =>
{
    const inputDate = new Date(date);
    const options = { day: 'numeric', month: 'short' };
    const outputDateString = inputDate.toLocaleDateString(undefined, options);

    return outputDateString;
}

const timeFetcher = (dater) =>
{
    let index=dater.indexOf(" ");
    index+=1;
    if(index === -1)
    {
        return null;
    }
    else
    {
        return dater.slice(index);
    }
} 
