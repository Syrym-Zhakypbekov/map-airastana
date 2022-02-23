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

/* Create dropdown */
function inputLogic2() {
  input2.addEventListener(
    "keyup",
    (e) => {
      col1row2.textContent = "";

      let result2 = arr.filter((arr) =>
        arr.toLowerCase().includes(e.target.value.toLowerCase())
      );
      /* Check result */
      // console.log(result2);

      /* Create dropdown */
      if (result2) {
        for (let i = 0; i < result2.length; i++) {
          let dropdown2 = document.createElement("div");
          dropdown2.id = "dropdown2";
          let dropdownContent2 = document.createTextNode(result2[i]);
          dropdown2.append(dropdownContent2);
          col1row2.append(dropdown2);
        }
      }
    },
    false
  );
}

export { inputLogic2 };
