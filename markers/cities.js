import { array } from "../data/data.js";
import { arrayCoords } from "../data/data.js";
import { arr } from "../data/data.js";
import {mapDiv} from "../index.js"
import {AktobeCoords} from "./Aktobe.js"

function myMarkers(map) {
  for (let i = 0; i < arrayCoords.length; i++) {
    
    const blueLineSymbol = {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 7,
      fillColor: "#9C8761",
      fillOpacity: 0.6,
      strokeColor: "#9C8761",
      strokeOpacity: 0.9,
      strokeWeight: 2,
      labelOrigin: new google.maps.Point(0, 2.8),
    };
    const redLineSymbol = {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 7,
      fillColor: "#002A47",
      fillOpacity: 0.5,
      strokeColor: "#002A47",
      strokeOpacity: 0.9,
      strokeWeight: 2,
      labelOrigin: new google.maps.Point(0, 2.8),
    };
    


    let markerCity = new google.maps.Marker({
      position: arrayCoords[i],
      map: map,
      icon: redLineSymbol,
      label: {
        text: arr[i],
        className: "",
        color: "",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "14px",
        fontWeight: "bold",
      },
    });

    
  
    AktobeCoords(map, markerCity, blueLineSymbol, redLineSymbol)

    
  }
}

export { myMarkers };
