window.onload = function () {
    let id = getIdUrl();
    getUser(id);
    console.log(id)
};
function getUser(id) {
    let url = "https://635a488038725a1746c20106.mockapi.io/api/v1/person/" + id
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.getElementById("input__id").value = data.id
        document.getElementById("input__name").value = data.name
        document.getElementById("input__age").value = data.age
        document.getElementById("input__address").value = data.address
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log(id);
}
function getIdUrl() {
    let url = new URL(window.location.href);
    let id = url.searchParams.get("id");
    return id;
}