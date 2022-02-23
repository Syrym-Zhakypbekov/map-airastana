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
  
} from "../DOM/structure.js";
import { map } from "../Map Options/map_options.js";
import { createMarkerFromInput } from "../Input logiс/firstTryService.js";

/* Create dropdown */
let i = 0
function arrowLogicUp(i, map) {
  input.addEventListener(
    "keyup",
    (e) => {
      if (e.target.value === "") {
        i = 0;
      }

      try {
        if (e.keyCode == 40 && i <= col1row1.children.length) {
          col1row1.children[i].style.backgroundColor = "LightSalmon";
          i++;
        }
        if (e.keyCode === 13) {
          e.target.value = col1row1.children[i - 1].innerText;
          col1row1.textContent = "";
          /* SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE */
          // console.log("this is my service");
          createMarkerFromInput(map, e.target.value)
          /* SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE */
        }
      } catch (error) {
        i = col1row1.children.length + 1;
      }

      try {
        if (e.keyCode == 38 && i >= 0) {
          col1row1.children[i - 2].style.backgroundColor = "LightSalmon";

          i--;
        }
      } catch (error) {
        i = 0;
      }
    },
    false
  );
}

export { arrowLogicUp };
