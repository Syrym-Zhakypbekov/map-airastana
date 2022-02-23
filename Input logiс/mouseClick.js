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
import { createMarkerFromInput } from "../Input logiс/firstTryService.js";
import { map } from "../Map Options/map_options.js";

function mouseNavigation(map, newmarkers) {
  
  input.addEventListener(
    "keyup",
    (e) => {
      for (let f = 0; f < col1row1.children.length; f++) {
        col1row1.children[f].addEventListener(
          "mouseenter",
          (e) => {
            e.target.style.backgroundColor = "LightSalmon";
          },
          false
        );
        col1row1.children[f].addEventListener(
          "mouseleave",
          (e) => {
            e.target.style.backgroundColor = "white";
          },
          false
        );
        col1row1.children[f].addEventListener(
          "click",
          (e) => {
            input.value = e.target.innerText;
            console.log(input.value);
            /* SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE */

            
            createMarkerFromInput(map, e.target.innerText, newmarkers)
            /* SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE */
            col1row1.textContent = "";
          },
          false
        );
      }
    },
    false
  );
}

export { mouseNavigation };
