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

/* Close dropdown */
function closeLogic2() {
  input2.addEventListener(
    "keyup",
    (e) => {
      if (e.keyCode === 8) {
        e.target.value = "";
      }
      if (e.target.value === "") {
        col1row2.textContent = "";
      }
    },
    false
  );
  input2.addEventListener(
    "click",
    (e) => {
      if (e.keyCode === 8) {
        e.target.value = "";
      }
      if (e.target.value === "") {
        col1row1.textContent = "";
      }
      
    },
    false
  );
  input2.addEventListener(
    "focusout",
    (e) => {
      if (e.keyCode === 8) {
        e.target.value = "";
      }
      if (e.target.value === "") {
        col1row1.textContent = "";
      }
      
    },
    false
  );
}

export { closeLogic2 };
