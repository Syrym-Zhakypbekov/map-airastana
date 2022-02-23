import { map } from "../Map Options/map_options.js";
import { mapDiv } from "../index.js";

function TurkestanCoords(map, markerCity, blueLineSymbol, redLineSymbol) {
  const flightPlanCoordinates = [
    { lat: 43.3051, lng: 68.2347 },
    { lat: 43.222, lng: 76.8512 },
    { lat: 43.3051, lng: 68.2347 },
    { lat: 51.1605, lng: 71.4704 },
    { lat: 43.3051, lng: 68.2347 },
    { lat: 42.8746, lng: 74.5698 },
    { lat: 43.3051, lng: 68.2347 },
    { lat: 41.0082, lng: 28.9784 },
    { lat: 43.3051, lng: 68.2347 },
    { lat: 55.7558, lng: 37.6173 },
    { lat: 43.3051, lng: 68.2347 },
    { lat: 41.2995, lng: 69.2401 },
  ];
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });
  markerCity.addListener(
    "click",
    (e) => {
      mapDiv.setAttribute("data-bs-toggle", "modal");
      mapDiv.setAttribute("href", "#exampleModalToggle");
      map.panTo(markerCity.getPosition());
      document.body.querySelector(
        "div.modal-header"
      ).childNodes[0].textContent = markerCity.getLabel().text;
      document.body.querySelector("div.modal-body").innerHTML =
        `<p>This is my city ${markerCity.getLabel().text}</p>` +
        `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium perferendis quos molestias, reprehenderit amet placeat vero nostrum distinctio dolores delectus at officiis voluptatem fuga blanditiis aperiam sapiente aut! Pariatur, nobis!</p>` +
        `<center><img style="width:50%; height:50%;" src="https://image.shutterstock.com/shutterstock/photos/585990431/display_1500/stock-photo-astana-astana-kazakhstan-585990431.jpg"></center>`;
      if (markerCity.getLabel().text === "Turkestan") {
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
    },
    false
  );
  markerCity.addListener(
    "mouseout",
    (e) => {
      mapDiv.setAttribute("data-bs-toggle", "");
      mapDiv.setAttribute("href", "");
      markerCity.setIcon(redLineSymbol);
    },
    false
  );

  map.addListener(
    "click",
    (e) => {
      flightPath.setMap(null);
    },
    false
  );
}
export { TurkestanCoords };
