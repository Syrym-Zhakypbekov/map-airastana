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

function deleteData(markers) {
  input.onclick = (e) => {
    if (e.target.value === "") {
      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = [];
    }
  };
  input.oninput = (e) => {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  };
  input.onchange = (e) => {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  };
  
  input.onkeyup = (e) => {
    if (e.keyCode === 8) {
      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = [];
    }
  };
}

export { deleteData };
