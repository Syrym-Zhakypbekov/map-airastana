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
let markers2 = [];
  
function createMarkerFromInput2(map, coords) {
  
  let service;
  service = new google.maps.places.PlacesService(map);
  service.findPlaceFromQuery(
    {
      query: coords,
      fields: ["name", "geometry"],
    },
    (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        const marker = new google.maps.Marker({
          position: results[0].geometry.location,
        });
        markers2.push(marker);
        markers2[markers2.length - 1].setMap(map);
        map.panTo(results[0].geometry.location);
        deleteData2(markers2);
        
      }
    }
  );
  
  
}

export { createMarkerFromInput2 };
