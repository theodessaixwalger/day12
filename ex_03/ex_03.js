function display_planet_info(planet) {
    const planetlist = $('#planet-list');
    const listitem = $('<li>', { class: 'planet' }).html(`
        <strong>Name:</strong> ${planet.name}<br>
        <strong>Diameter:</strong> ${planet.diameter}km<br>
        <strong>Climate:</strong> ${planet.climate}<br>
        <strong>Terrain:</strong> ${planet.terrain}<br>
        <strong>Population:</strong> ${planet.population}
    `);
    planetlist.append(listitem);
}
fetch('https://swapi.dev/api/planets/3/')
    .then(response => response.json())
    .then(data => {
        display_planet_info(data);
    })
    .catch(err => console.error("Error", err));