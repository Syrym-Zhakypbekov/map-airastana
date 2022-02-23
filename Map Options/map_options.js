import { mapDiv } from "../index.js";
import { mouseNavigation } from "../Input logiс/mouseClick.js";
import { mouseNavigation2 } from "../Input logiс/mouseClick2.js";
import { createMarkerFromInput } from "../Input logiс/firstTryService.js";
import { dom } from "../DOM/structure.js";
// import {createMarkerFromInput} from "./test2.js"
let map;
function options(map) {
  const kazakhstan = new google.maps.LatLng(48.0196, 66.9237);
  map = new google.maps.Map(document.getElementById("map"), {
    center: kazakhstan,
    zoom: 6,
    mapId: "1d9c2ce4e4c0cfaa",
    disableDefaultUI: true,
    // backgroundColor: "white",
    // clickableIcons: true,
    // controlSize: 0,
    // disableDoubleClickZoom: true,
    // draggable: true,
    // draggableCursor:
    //   "url(https://www.pngfind.com/pngs/m/597-5975111_unknown-small-copy-small-circle-png-transparent-png.png), auto;",
    // draggingCursor: "url(http://www.example.com/icon.png), auto;",
    // fullscreenControl: false,
    // fullscreenControlOptions: "",
    // gestureHandling: "cooperative",
    // heading: 0,
    // isFractionalZoomEnabled: true,
    // keyboardShortcuts: true,
    // mapTypeControl: false,
    // mapTypeId: "",
    // maxZoom: 5,
    // minZoom: 5,
    // noClear: true,
    // panControl:true,
    // panControlOptions:"",
    // restriction:"",
    // rotateControl:false,
    // rotateControlOptions:"", 
    // scaleControl:true,
    // scaleControlOptions:"", 
    // scrollwheel:true,
    // streetView:"",
    // streetViewControl:false,
    // streetViewControlOptions:"",
    // styles:"",
    // tilt:0,
    // zoom:5,
    // zoomControl:false,
    // zoomControlOptions:""
  });
  dom(map);
}

export { options, map };
