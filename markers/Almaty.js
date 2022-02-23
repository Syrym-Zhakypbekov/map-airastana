import { map } from "../Map Options/map_options.js";
import { mapDiv } from "../index.js";

function AlmatyCoords(map, markerCity, blueLineSymbol, redLineSymbol, flightPath) {
  markerCity.addListener(
    "click",
    (e) => {
      mapDiv.setAttribute("data-bs-toggle", "modal");
      mapDiv.setAttribute("href", "#exampleModalToggle");
      // map.setCenter(markerCity.getPosition())
      map.panTo(markerCity.getPosition());
      document.body.querySelector(
        "div.modal-header"
      ).childNodes[0].textContent = markerCity.getLabel().text;
      document.body.querySelector("div.modal-body").innerHTML =
        `<p>This is my city ${markerCity.getLabel().text}</p>` +
        `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium perferendis quos molestias, reprehenderit amet placeat vero nostrum distinctio dolores delectus at officiis voluptatem fuga blanditiis aperiam sapiente aut! Pariatur, nobis!</p>` +
        `<img style="width:100%; height:100%" src="https://image.shutterstock.com/shutterstock/photos/585990431/display_1500/stock-photo-astana-astana-kazakhstan-585990431.jpg">`;
      
      
      
      
      if (markerCity.getLabel().text === "Almaty") {
        flightPath.setMap(map);
      }
    },
    false
  );
  markerCity.addListener(
    "mouseover",
    (e) => {
      mapDiv.setAttribute("data-bs-toggle", "modal");
      mapDiv.setAttribute("href", "#exampleModalToggle");
      markerCity.setIcon(blueLineSymbol);

    //   if (markerCity.getLabel().text === "Aktobe") {
    //     flightPath.setMap(map);
    //   }
    },
    false
  );
  markerCity.addListener(
    "mouseout",
    (e) => {
      mapDiv.setAttribute("data-bs-toggle", "");
      mapDiv.setAttribute("href", "");
      markerCity.setIcon(redLineSymbol);

      //   flightPath.setMap(null);
    },
    false
  );

  map.addListener(
    "center_changed",
    (e) => {
      flightPath.setMap(null);
    },
    false
  );
}
export { AlmatyCoords };
