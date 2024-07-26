const model = [
  {
    name: "SUN",
    description:
      "The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma,heated to incandescence by nuclear fusion reactions in its core.",
    year: "4,500,000,000",
    type: "YELLOW DWARF STAR",
    radius: "696,340 km",
    planet: "./images/sun.png",
    galaxy: "./images/galaxy1.jpg",
  },
  {
    name: "EARTH",
    description:
      "Earth is the third planet from the Sun and the only place known in the universe where life has originated and found habitability. This is enabled by Earth being a water world, the only one in the Solar System sustaining liquid surface water.",
    year: "4.54 billion",
    type: "terrestrial",
    radius: "6,371 km",
    planet: "./images/earth.png",
    galaxy: "./images/galaxy3.jpg",
  },
  {
    name: "MARS",
    description: `Mars is the fourth planet and the furthest terrestrial planet from the Sun. The reddish color of its surface is due to finely grained iron(III) oxide dust in the soil, giving it the nickname "the Red Planet". Mars’s radius is second smallest among the planets in the Solar System at 3,389.5 km`,
    year: "4.6 billion",
    type: "terrestrial",
    radius: "6,371 km",
    planet: "./images/mars.png",
    galaxy: "./images/galaxy4.jpg",
  },
  {
    name: "JUPITER",
    description:
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, and slightly less than one one-thousandth the mass of the Sun",
    year: "4.6 billion",
    type: " gas giant",
    radius: "69,911 km",
    planet: "./images/jupiter.png",
    galaxy: "./images/galaxy2.jpg",
  },
];

const right = document.querySelector(".right");
const left = document.querySelector(".left");
const name = document.querySelector(".name");
const description = document.querySelector(".description");
const year = document.querySelector(".year");
const type = document.querySelector(".type");
const radius = document.querySelector(".radius");
const planet = document.querySelector(".planet");
const galaxy = document.querySelector(".galaxy");
let index = 0;
let degrees = 0;

right.addEventListener("click", () => {
  if (index < 3) {
    index++;
    degrees += 60;
    name.innerHTML = model[index].name;
    description.innerHTML = model[index].description;
    year.innerHTML = model[index].year;
    type.innerHTML = model[index].type;
    radius.innerHTML = model[index].radius;
    planet.style.transform = `rotate(${degrees}deg)`;
    galaxy.style.transform = `rotate(-${degrees}deg)`;
    galaxy.style.transform += `scale(2)`;
    setTimeout(() => {
      planet.src = model[index].planet;
      galaxy.src = model[index].galaxy;
    }, 500);
  }
});
left.addEventListener("click", () => {
  if (index > 0) {
    index--;
    degrees -= 60;
    name.innerHTML = model[index].name;
    description.innerHTML = model[index].description;
    year.innerHTML = model[index].year;
    type.innerHTML = model[index].type;
    radius.innerHTML = model[index].radius;
    planet.style.transform = `rotate(${degrees}deg)`;
    galaxy.style.transform = `rotate(-${degrees}deg)`;
    galaxy.style.transform += `scale(2)`;
    setTimeout(() => {
      planet.src = model[index].planet;
      galaxy.src = model[index].galaxy;
    }, 500);
  }
});
