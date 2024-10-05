const temperature = 10;
const windSpeed = 16;

function calculateWindChill(temperature, windSpeed) {
    let wind = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    return wind;
}

if (temperature <= 10 && windSpeed > 4.8) {
    let windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("wind-chill").innerHTML = windChill.toFixed(2);
} else {
    document.getElementById("wind-chill").innerHTML = "N/A";
}

