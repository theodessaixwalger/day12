function my_fetch(url) {
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error('Error:', error));
}
my_fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12528")