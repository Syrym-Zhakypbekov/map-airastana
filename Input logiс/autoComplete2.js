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
import {map} from "../Map Options/map_options.js"
import { createMarkerFromInput2 } from "../Input logiс/firstTryService2.js";

/* Create dropdown */

function autocomplete2(map) {
  input2.addEventListener(
    "keyup",
    (e) => {
      if (col1row2.children.length === 1) {
        e.target.value = col1row2.lastElementChild.innerText;
        e.target.setAttribute("maxlength", col1row2.lastElementChild.innerText.length);
        if (e.keyCode === 13) {
          /* SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE */
          
          createMarkerFromInput2(map, e.target.value)

          /* SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE */
          col1row2.textContent = "";
        }
      }
    },
    false
  );
}

export { autocomplete2 };
