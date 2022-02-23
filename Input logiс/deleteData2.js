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

function deleteData2(markers2) {
  
  input2.onclick = (e) => {
    if (e.target.value === "") {
      for (let i = 0; i < markers2.length; i++) {
        markers2[i].setMap(null);
      }
      markers2 = [];
    }
  };
  input2.oninput = (e) => {
    for (let i = 0; i < markers2.length; i++) {
      markers2[i].setMap(null);
    }
    markers2 = [];
  };
  input2.onchange = (e) => {
    for (let i = 0; i < markers2.length; i++) {
      markers2[i].setMap(null);
    }
    markers2 = [];
  };
  input.onclick = (e) => {
    if (e.target.value === "") {
      for (let i = 0; i < markers2.length; i++) {
        markers2[i].setMap(null);
      }
      markers2 = [];
      input2.value = ""
    }
  };
  input.oninput = (e) => {
    for (let i = 0; i < markers2.length; i++) {
      markers2[i].setMap(null);
    }
    markers2 = [];
    input2.value = ""
  };
  input.onchange = (e) => {
    for (let i = 0; i < markers2.length; i++) {
      markers2[i].setMap(null);
    }
    markers2 = [];
    input2.value = ""
  };
}



export { deleteData2 };
