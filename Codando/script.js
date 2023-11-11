const items = [
  {
    title: "Estudando TypeScript",
    body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit Asperiores
      voluptatibus voluptates reiciendis et voluptate Facere voluptatibus
      similique impedit, esse, dignissimos eaque blanditiis quae aliquam
      corporis debitis, nihil quisquam laborum sapiente`,
  },

  {
    title: "Curso de Figma",
    body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit Asperiores
      voluptatibus voluptates reiciendis et voluptate Facere voluptatibus
      similique impedit, esse, dignissimos eaque blanditiis quae aliquam
      corporis debitis, nihil quisquam laborum sapiente`,
  },
  {
    title: "Prototipagem com Balsamiq",
    body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit Asperiores
      voluptatibus voluptates reiciendis et voluptate Facere voluptatibus
      similique impedit, esse, dignissimos eaque blanditiis quae aliquam
      corporis debitis, nihil quisquam laborum sapiente`,
  },
  {
    title: "FlutterFlow Web",
    body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit Asperiores
      voluptatibus voluptates reiciendis et voluptate Facere voluptatibus
      similique impedit, esse, dignissimos eaque blanditiis quae aliquam
      corporis debitis, nihil quisquam laborum sapiente`,
  },
];

const itemsContainer = document.getElementsByClassName("items")[0];
const searchInput = document.getElementById("seach-input");

function renderItems(items) {
  itemsContainer.innerHTML = "";
  items.forEach((item) => {
    const title = document.createElement("h2");
    title.className = "title";
    title.innerHTML = item.title;

    const body = document.createElement("p");
    body.textContent = item.body;

    const divItem = document.createElement("div");
    divItem.className = "item";

    divItem.appendChild(title);
    divItem.appendChild(body);

    itemsContainer.appendChild(divItem);
  });
}

window.addEventListener("load", () => {
  renderItems(items);
});

searchInput.addEventListener("input", (e) => {
  const searchContent = e.target.value.trim().toUpperCase();

  if (searchContent) {
    const newItems = items.filter((item) => {
      return item.title.toUpperCase().includes(searchContent);
    });

    newItems.length !== 0
      ? renderItems(newItems)
      : (itemsContainer.innerHTML = "<p> Pesquisa não encontrada </p> ");
  } else renderItems(items);
});
