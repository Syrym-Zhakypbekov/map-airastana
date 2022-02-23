import { map } from "../Map Options/map_options.js";
import { mapDiv } from "../index.js";

function ShymkentCoords(map, markerCity, blueLineSymbol, redLineSymbol) {
  const flightPlanCoordinates = [
    { lat: 42.3417, lng: 69.5901 },
              { lat: 43.222, lng: 76.8512 },
              { lat: 42.3417, lng: 69.5901 },
              { lat: 47.0945, lng: 51.9238 },
              { lat: 42.3417, lng: 69.5901 },
              { lat: 51.1605, lng: 71.4704 },
              { lat: 42.3417, lng: 69.5901 },
              { lat: 43.6588, lng: 51.1975 },
              { lat: 42.3417, lng: 69.5901 },
              { lat: 50.2839, lng: 57.167 },
              { lat: 42.3417, lng: 69.5901 },
              { lat: 36.8969, lng: 30.7133 },
              { lat: 42.3417, lng: 69.5901 },
              { lat: 25.2048, lng: 55.2708 },
              { lat: 42.3417, lng: 69.5901 },
              { lat: 49.8047, lng: 73.1094 },
              { lat: 42.3417, lng: 69.5901 },
              { lat: 53.2198, lng: 63.6354 },
              { lat: 42.3417, lng: 69.5901 },
              { lat: 42.2662, lng: 42.718 },
              { lat: 42.3417, lng: 69.5901 },
              { lat: 50.4233, lng: 80.2508 },
              { lat: 42.3417, lng: 69.5901 },
              { lat: 51.2278, lng: 51.3865 },
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
      if (markerCity.getLabel().text === "Shymkent") {
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
export { ShymkentCoords };
