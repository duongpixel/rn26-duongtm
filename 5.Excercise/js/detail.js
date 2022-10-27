window.onload = function () {
  let id = getIdUrl();
  getUser(id);
};

function getUser(id) {
  let url = "https://635a488038725a1746c20106.mockapi.io/api/v1/person/" + id
  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderInfo(data);
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

function renderInfo(user) {
  const contentHTML = `
    <p><b>ID : </b>${user?.id}</p>
    <p><b>Full Name : </b>${user?.name}</p>
    <p><b> Age : </b>${user?.age}</p>
    <p><b>Address : </b> ${user?.address}</p>
  `;
  const elm = document.getElementById("info");
  elm.innerHTML = contentHTML;
}
function gotoUpdate() {
  let id = getIdUrl();
  console.log(window.location.href, id);
  // ?id=1 -> params url
  window.location.href = "./register.html?id=" + id; // redirect
}