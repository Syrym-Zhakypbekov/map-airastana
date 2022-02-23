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
import { createMarkerFromInput } from "../Input logiс/firstTryService.js";

/* Create dropdown */

function autocomplete(map) {
  input.addEventListener(
    "keyup",
    (e) => {
      // if (result) {
      //   e.target.setAttribute("maxlength", result[0].length);
      // }
      if (col1row1.children.length === 1) {
        e.target.value = col1row1.lastElementChild.innerText;
        e.target.setAttribute("maxlength", col1row1.lastElementChild.innerText.length);
        if (e.keyCode === 13) {
          /* SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE */
          
          createMarkerFromInput(map, e.target.value)

          /* SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE */
          col1row1.textContent = "";
        }
      }
    },
    false
  );
}

export { autocomplete };
