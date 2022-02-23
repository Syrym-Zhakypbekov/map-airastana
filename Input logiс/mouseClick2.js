import { arr } from "../data/data.js";
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
  i,
} from "../DOM/structure.js";
import { map } from "../Map Options/map_options.js";
import {createMarkerFromInput2} from "./firstTryService2.js"

function mouseNavigation2(map) {
  input2.addEventListener(
    "keyup",
    (e) => {
      for (let f = 0; f < col1row2.children.length; f++) {
        col1row2.children[f].addEventListener(
          "mouseenter",
          (e) => {
            e.target.style.backgroundColor = "LightSalmon";
          },
          false
        );
        col1row2.children[f].addEventListener(
          "mouseleave",
          (e) => {
            e.target.style.backgroundColor = "white";
          },
          false
        );
        col1row2.children[f].addEventListener(
          "click",
          (e) => {
            input2.value = e.target.innerText;

            /* SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE */

            console.log("test");
            createMarkerFromInput2(map, e.target.innerText)
            
            /* SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE */
            col1row2.textContent = "";
          },
          false
        );
      }
    },
    false
  );
}

export { mouseNavigation2 };
