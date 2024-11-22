import navigations from "../data/navigations.js";

(function () {
  const navigationEl = document.querySelector("footer .navigations");

  navigations.forEach((nav) => {
    const mapEl = document.createElement("div");
    mapEl.classList.add("map");

    let mapList = "";
    nav.maps.forEach((map) => {
      mapList += /*html*/ `
            <li><a href="${map.url}">${map.name}</a></li>
        `;
    });

    mapEl.innerHTML = /*html*/ `
        <h3><span class="text">${nav.title}</span></h3>
        <ul>
            ${mapList}
        </ul> 
    `;

    navigationEl.appendChild(mapEl);
  });
})();
