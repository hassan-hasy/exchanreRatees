function getCountry() {
    let endpoint = "https://ip-api.com/json/?fields=country"; //get user location form this api.

    fetch(endpoint).then(
        function (response) {
            let promiseForward = response.json();
            return promiseForward;
        }
    ).then(
        function (data) {
            console.log(data.country);
            let countryName = document.getElementById("countryName");
            countryName.innerHTML = data.country;
        }
    ).catch(
        function (error) {
            console.log(error)
        });
}

getCountry();

function getCurrencyRates() {
    fetch("https://api.exchangerate.host/latest?base=USD&symbols=AED,GBP,EUR")
        .then(
            function(response){ return (response.json())}
            )
        .then(
            function (result) {
                document.getElementById("aed").innerHTML=result.rates.AED;
                document.getElementById("gbp").innerHTML=result.rates.GBP;
                document.getElementById("eur").innerHTML=result.rates.EUR;
            }
            )
        .catch(function (error) { 
            console.log('error', error)
        })
}
getCurrencyRates();
