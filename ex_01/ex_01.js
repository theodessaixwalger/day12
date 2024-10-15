function display_weather_chart(longitude, latitude) {
    const test = "https://www.7timer.info/bin/civil.php?lon=" + longitude + "&lat=" + latitude + "&product=civil&unit=metric&output=internal&tzshift=0";
    console.log(test);
}
display_weather_chart(2.367, 48,817);