// copy die we eerder hadden gebruikt

let base = "https://fdnd.directus.app/items";
let endpoint =
  "/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526&sort=name&filter[fav_tag][_nempty]";
let url = base + endpoint;

const deLijst = document.querySelector(".student-list");
const btn = document.querySelector("#random-btn");
const display = document.querySelector("#student-display");

let deMinorMensen = [];

async function getMinorMensen() {
  let response = await fetch(url);
  let responseJSON = await response.json();
  deMinorMensen = responseJSON.data;

  deMinorMensen.forEach((eenMinorMens) => {
    let minorMensHTML = `
            <li class="student-card">
                <h4>${eenMinorMens.name}</h4>
                <p><strong>${eenMinorMens.fav_emoji}</strong></p>
            </li>`;
    deLijst.insertAdjacentHTML("beforeend", minorMensHTML);
  });
}

// button voor de random student
btn.addEventListener("click", () => {
  if (deMinorMensen.length > 0) {
    let random =
      deMinorMensen[Math.floor(Math.random() * deMinorMensen.length)];
    display.innerHTML = `
            <h4>${random.name}</h4>
            <p>${random.fav_emoji}</p>`;
  }
});

getMinorMensen();

// light dark mode komt hier
const themeBtns = document.querySelectorAll(".theme-btn");

themeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const theme = btn.getAttribute("data-theme");

    // Reset classes
    document.body.classList.remove("dark-mode", "orange-mode");

    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else if (theme === "orange") {
      document.body.classList.add("orange-mode");
    }
  });
});
