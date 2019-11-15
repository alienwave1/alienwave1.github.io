const cityInput = document.getElementById("cityInput");

cityInput.addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
        getWeather();
    }
})

function loadCookie() {
    cityInput.value = getCookie('city') ? getCookie('city') : '';
}

function getReq() {
    if (getCookie('city')) {
        getWeather();
    }
}

loadCookie();
getReq();

function getWeather() {
    const CITY = cityInput.value;
    const key = "&appid=1ffca6db0ea908d8883ff72a55ebaf21";
    const metric = '&units=metric';
    const blockNumbers = CITY.replace(/^([^0-9]*)$/);
    const weatherBlock = document.getElementById("weatherBlock");
    const date = new Date();

    setCookie('city', CITY);

    if (CITY == 0 || CITY == blockNumbers) {
        return weatherBlock.innerHTML = "";
    }

    else {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + CITY + key + metric)
            .then(response => response.json())

            .then(data => {
                var textParse;

                if (data.sys) {
                    textParse =
                        `<div class="weatherTemperature">
                            ${data.main.temp.toFixed(0)}&deg; <!-- Temperature -->
                        </div>

                        <div class="weatherCondition">
                            ${data.weather[0].main} <!-- Weather Condition -->
                        </div>

                        <div сlass="weatherWind">
                            ${data.wind.speed} m/s
                        </div>

                        <!-- <div>
                            ${date.getHours()}:${date.getMinutes()}
                        </div> -->`;

                    weatherBlock.innerHTML = textParse;
                }

                else {
                    switch (data.cod) {
                        case '400':
                            textParse = `<div>Bad request</div>`;

                            weatherBlock.innerHTML = textParse;
                            break;

                        case '404':
                            textParse = `<div>Sorry, there is no such city in our database</div>`;
                            weatherBlock.innerHTML = textParse;
                            break;

                        default:
                            textParse = `<div>${data.message}</div>`;
                            break;
                    }
                }
            })

            .catch(error => {
                // const errorStatus = `<div>${error.cod}: ${error.message}</div>`;
                // document.getElementById('response').innerHTML = errorStatus;
                console.log(error);
            });
    }
};

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}