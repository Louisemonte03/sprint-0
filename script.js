/* ======================
   FLIP CARDS — klik-support voor mobiel
========================= */

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

/* ======================
   RANDOM MEDESTUDENT
   Bron: https://fdnd.directus.app
========================= */

const btn = document.querySelector("#random-btn");
const display = document.querySelector("#student-display");

let minorPeople = [];

async function loadMinorPeople() {
  const base = "https://fdnd.directus.app/items";
  const endpoint =
    "/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526&filter[avatar][_nempty]=true&sort=name&fields=name,avatar,fav_emoji";
  const response = await fetch(base + endpoint);
  const data = await response.json();

  minorPeople = data.data.map((person) => ({
    name: person.name,
    avatar: person.avatar ?? null,
    emoji: person.fav_emoji ?? "❓",
  }));
}

loadMinorPeople();


if (btn) {
  btn.addEventListener("click", () => {
    if (minorPeople.length === 0) return;

    const random = minorPeople[Math.floor(Math.random() * minorPeople.length)];
    const imgSrc = random.avatar
      ? random.avatar.startsWith("http")
        ? random.avatar
        : `https://fdnd.directus.app/assets/${random.avatar}?width=120&height=120&fit=cover`
      : null;

    display.innerHTML = `
      <div class="mini-card">
        ${imgSrc ? `<img class="mini-avatar" src="${imgSrc}" alt="Foto van ${random.name}" />` : `<span style="font-size:3rem">🐒</span>`}
        <p class="mini-name">${random.name}</p>
        <p class="mini-club">Minor Web Dev</p>
      </div>
    `;
  });
}
