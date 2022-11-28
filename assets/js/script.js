let clientIp;
let base = localStorage.getItem('base');
let country = localStorage.getItem('country');
let countryName = document.getElementById("countryName");

function getBase() {
    if (base == null) {
        $.get('https://ipapi.co/currency/', function (data) {
            base = data;
            localStorage.setItem('base', base);
            console.log("base function runing");
    
        });
        
    }
    
}

function getCountry() {
    if (country == null) {
        $.get('https://ipapi.co/country_name', function (data) {
            console.log("country function runing");
            localStorage.setItem('country', data);
            country = data;
            countryName.innerHTML = country;
        });
    }

    else {
        countryName.innerHTML = country;
    }

}

// function getIp() {
//     $.getJSON('https://api.db-ip.com/v2/free/self', function(data) {
//         console.log(JSON.stringify(data, null, 2));
//         // console.log(data.ipAddress);
//         // clientIp=data.ipAddress;
//         let countryName = document.getElementById("countryName");
//         countryName.innerHTML = data.countryName;
//     });
// }
// getIp();
// function getCountry() {
//     let endpoint = "https://api.iplocation.net/?ip="+clientIp; //get user location form this api.

//     fetch(endpoint).then(
//         function (response) {
//             let promiseForward = response.json();
//             return promiseForward;
//         }
//     ).then(
//         function (data) {
//             console.log(data.country);
//             let countryName = document.getElementById("countryName");
//             countryName.innerHTML = data.country;
//         }
//     ).catch(
//         function (error) {
//             console.log(error)
//         });
// }

// getCountry();

function getCurrencyRates() {

    fetch("https://api.exchangerate.host/latest?base=" + base + "&symbols=GBP,JPY,CAD,USD,EUR&amount=1")
        .then(
            function (response) { return (response.json()) }
        )
        .then(
            function (result) {
                document.getElementById("gbp").innerHTML = result.rates.GBP;
                document.getElementById("yen").innerHTML = result.rates.JPY;
                document.getElementById("cad").innerHTML = result.rates.CAD;
                document.getElementById("usd").innerHTML = result.rates.USD;
                document.getElementById("eur").innerHTML = result.rates.EUR;
            }
        )
        .catch(function (error) {
            console.log('error', error)
        })
}
// getCurrencyRates();

function convertCurrency() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    if (amount == "" || from == "" || to == "") {
        return;
    }
    fetch("https://api.exchangerate.host/convert?from=" + from + "&to=" + to + "&amount=" + amount + "&places=3")
        .then(
            function (response) { return (response.json()) }
        )
        .then(
            function (result) {
                document.getElementById("resultAmount").innerHTML = amount + " " + from + " = " + result.result + " " + to;
            }
        )
        .catch(function (error) {
            console.log('error', error)
        })
}


getBase();
getCountry();
getCurrencyRates();
