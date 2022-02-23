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

/* Create dropdown */
function inputLogic() {
  // let i = 0
  input.addEventListener(
    "keyup",
    (e) => {
      col1row1.textContent = "";

      let result = arr.filter((arr) =>
        arr.toLowerCase().includes(e.target.value.toLowerCase())
      );
      /* Check result */
      // console.log(result);

      /* Create dropdown */
      if (result) {
        for (let i = 0; i < result.length; i++) {
          let dropdown = document.createElement("div");
          dropdown.id = "dropdown";
          let dropdownContent = document.createTextNode(result[i]);
          dropdown.append(dropdownContent);
          col1row1.append(dropdown);
        }
      }
    },
    false
  );
}

export { inputLogic };
