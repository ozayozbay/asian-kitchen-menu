const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "./images/tteokbokki.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "./images/chicken-ramen.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "./images/bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "./images/Dan-Dan-Noodles.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
    "./images/Yangzhou-Fried-Rice.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "./images/Onigiri.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "./images/Jajangmyeon.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "./images/Ma-Yi-Shang-Shu.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "./images/Dorayaki-New.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const btnContainer = document.querySelector(".btn-container"); //btn container'ı seçildi

const allButton = document.createElement("button"); //Button oluşturduk.
allButton.textContent = "All"; //Butonda yazacak olan metin
allButton.classList.add("btn", "btn-outline-secondary", "btn-item"); //buton class
allButton.setAttribute("type", "button"); //HTML ögesine metot ekliyoruz
btnContainer.append(allButton); //Container altına eklendi.

const koreaButton = document.createElement("button");
koreaButton.textContent = "Korea";
koreaButton.classList.add("btn", "btn-outline-secondary", "btn-item");
koreaButton.setAttribute("type", "button");
btnContainer.append(koreaButton);

const japanButton = document.createElement("button");
japanButton.textContent = "Japan";
japanButton.classList.add("btn", "btn-outline-secondary", "btn-item");
japanButton.setAttribute("type", "button");
btnContainer.append(japanButton);

const chinaButton = document.createElement("button");
chinaButton.textContent = "China";
chinaButton.classList.add("btn", "btn-outline-secondary", "btn-item");
chinaButton.setAttribute("type","button");
btnContainer.append(chinaButton);

const allCategory = (category) => {
  if (category == "All") return menu;
  return menu.filter((item)=> item.category === category);
} //All tuşuna basıldığında bütün ögeleri göstermesi için

const menuContainer = document.querySelector("#menu-container");
const showMenu = (menuList) => {
  menuContainer.innerHTML = "";
  menuList.forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-ıtems", "col-lg-6", "col-sm-12");
    menuItem.innerHTML = `
    <img src="${item.img}" alt="${item.title}" class="photo">
    <div class="menu-info">
    <div class="menu-title">
      <h4>${item.title}</h4>
      <h4>${item.price}</h4>
    </div>
    <p class="menu-text">${item.desc}</p>
    </div>
    `;
    menuContainer.append(menuItem);
  });
}

const eventHandler = (filterText) => {
  showMenu(allCategory(filterText));
};

allButton.addEventListener("click", () => eventHandler("All"));
koreaButton.addEventListener("click", () => eventHandler("Korea"));
japanButton.addEventListener("click", () => eventHandler("Japan"));
chinaButton.addEventListener("click", () => eventHandler("China"));

window.addEventListener("DOMContentLoaded", () => {
  eventHandler("All");
});

