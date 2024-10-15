function check_route(url) {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        console.log("all is good");
      } else {
        console.log("Problem");
      }
    })
    .catch((error) => console.log("shit happens", error));
}
check_route("https://dog.ceo/dog-api/");
