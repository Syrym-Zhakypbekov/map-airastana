import {
  dom,
  container,
  row,
  col1,
  col2,
  row2,
  col1row1,
  col1row2,
  input,
  input2,
  text,
  text2,
} from "../DOM/structure.js";
import { deleteData } from "../Input logiс/deleteData.js";
import { deleteData2 } from "../Input logiс/deleteData2.js";

/* store data here */
let markers = [];


function createMarkerFromInput(map, coords) {
  let service;
  service = new google.maps.places.PlacesService(map);
  service.findPlaceFromQuery(
    {
      query: coords,
      fields: ["name", "geometry"],
    },
    (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        let marker = new google.maps.Marker({
          position: results[0].geometry.location,
        });
        markers.push(marker);
        markers[markers.length - 1].setMap(map);
        map.panTo(results[0].geometry.location);
        deleteData(markers)
        
      }
    }
  );

  // deleteData2(markers);
}

export { createMarkerFromInput };
