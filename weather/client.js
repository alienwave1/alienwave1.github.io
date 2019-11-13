var kinput = document.getElementsByClassName('main-input')[0];

function mySubmit(e) {
    e.preventDefault();
    fetchApi();
}

function loadCookie() {
    kinput.value = getCookie('city') ? getCookie('city') : '';
}

function getReq() {
    if (getCookie('city')) {
        fetchApi();
    }
}

loadCookie();
getReq();
setColor();

function fetchApi() {
    var city = kinput.value;
    var key = "&appid=1ffca6db0ea908d8883ff72a55ebaf21";
    var metric = '&units=metric';
    var blocknum = city.replace(/^([^0-9]*)$/);
    var divresp = document.getElementById("response");
    var date = new Date();

    setCookie('city', city);

    if (city == 0 || city == blocknum) {
        return divresp.innerHTML = "";
    }

    else {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + key + metric)
            .then(response => response.json())

            .then(data => {
                var textParse;

                if (data.sys) {
                    textParse = `<div>${date.getHours()}:${date.getMinutes()}</div>
                    <div>${data.weather[0].main}</div>
                    <div>${data.main.temp}&deg;</div> <div>${data.wind.speed} m/s</div>`;

                    divresp.innerHTML = textParse;
                }

                else {
                    switch (data.cod) {
                        case '400':
                            textParse = `<div>Bad request</div>`;

                            divresp.innerHTML = textParse;
                            break;

                        case '404':
                            textParse = `<div>Sorry, there is no such city in our database</div>`;
                            divresp.innerHTML = textParse;
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