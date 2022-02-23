import { mapDiv } from "../index.js";
import { inputLogic } from "../Input logiс/dropdown.js";
import { inputLogic2 } from "../Input logiс/dropdown2.js";
import { closeLogic } from "../Input logiс/closeDropDown1.js";
import { closeLogic2 } from "../Input logiс/closeDropDown2.js";
import { arrowLogicUp } from "../Input logiс/arrowsLogicUp.js";
import { arrowLogicUp2 } from "../Input logiс/arrowsLogicUp2.js";
import { mouseNavigation } from "../Input logiс/mouseClick.js";
import { mouseNavigation2 } from "../Input logiс/mouseClick2.js";
import { autocomplete } from "../Input logiс/autoComplete.js";
import { autocomplete2 } from "../Input logiс/autoComplete2.js";
import { map } from "../Map Options/map_options.js";
import { myMarkers } from "../markers/cities.js";

/* DOM elements */
let container = document.createElement("div");
let row = document.createElement("div");
let col1 = document.createElement("div");
let col2 = document.createElement("div");
let row2 = document.createElement("div");
let col1row1 = document.createElement("div");
let col1row2 = document.createElement("div");
let row3 = document.createElement("div");
let col1row3 = document.createElement("div");
let col2row3 = document.createElement("div");
let input = document.createElement("input");
let input2 = document.createElement("input");
let divModal = document.createElement("div")
let button = document.createElement("a")
let divModalDialog = document.createElement("div")
let divModalDialogContent = document.createElement("div")
let divModalDialogContentHeader = document.createElement("div")
let divModalDialogContentTitle = document.createElement("h5")
let divModalDialogClose = document.createElement("button")
let divModalDialogContentBody = document.createElement("div")


/* initialise counter */
let i = 0;

/* DOM test text */
let text = document.createTextNode("Open first modal");
let text2 = document.createTextNode("Show a second modal and hide this one with the button below.");
let textForModalDialogContentTitle = document.createTextNode("Modal 1");

/* DOM classes */
container.classList.add("container");
row.classList.add("row");
col1.classList.add("col");
col2.classList.add("col");
row2.classList.add("row");
col1row1.classList.add("col");
col1row2.classList.add("col");
row3.classList.add("row");
col1row3.classList.add("col");
col2row3.classList.add("col");
divModal.classList.add("modal");
divModal.classList.add("fade");
button.classList.add("btn");
button.classList.add("btn-primary");
divModalDialog.classList.add("modal-dialog");
divModalDialog.classList.add("modal-xl");
divModalDialogContent.classList.add("modal-content");
divModalDialogContentHeader.classList.add("modal-header");
divModalDialogContentTitle.classList.add("modal-title");
divModalDialogClose.classList.add("btn-close");
divModalDialogContentBody.classList.add("modal-body");


/* DOM Ids' */
input.id = "input";
input2.id = "input2";
col1row1.id = "col1row1";
col1row2.id = "col1row2";
divModal.id = "exampleModalToggle";
divModalDialogContentTitle.id = "exampleModalToggleLabel";

/* DOM attributes */
input.setAttribute("type", "search");
input.setAttribute("autocomplete", "off");
input.setAttribute("placeholder", "From");

input2.setAttribute("type", "search");
input2.setAttribute("autocomplete", "off");
input2.setAttribute("placeholder", "To");
divModal.setAttribute("aria-hidden", "true");
divModal.setAttribute("aria-labelledby", "exampleModalToggleLabel");
divModal.setAttribute("tabindex", -1);
button.setAttribute("data-bs-toggle", "modal");
button.setAttribute("href", "#exampleModalToggle");
button.setAttribute("role", "button");
divModalDialogClose.setAttribute("aria-label", "Close");
divModalDialogClose.setAttribute("data-bs-dismiss", "modal");
divModalDialogClose.setAttribute("type", "button");

/* Append to col1row1-2 */
col1.append(input);
col2.append(input2);

/* Append to row2 */
row.append(col1);
row.append(col2);

/* Append to container */
container.append(row);

/* Append text to row2 */
// col1row1.append(text);
// col1row2.append(text2);

/* Append to row2 */
row2.append(col1row1);
row2.append(col1row2);

/* Append to container */
container.append(row2);

/* Hide button */
button.style.display = "none"

/* Append text to modal body */
divModalDialogContentBody.append(text2)

/* Append title to Modal Header */
divModalDialogContentHeader.append(textForModalDialogContentTitle)
divModalDialogContentHeader.append(divModalDialogClose)

/* Append modal-content-header to modal-dialog */
divModalDialogContent.append(divModalDialogContentHeader)
divModalDialogContent.append(divModalDialogContentBody)

/* Append modal-content to modal-dialog */
divModalDialog.append(divModalDialogContent)

/* Append modal dialog to modal general */
divModal.append(divModalDialog)

/* Append text to button */
button.append(text)

/* Append to column 1 and 2 of row 3 */
col1row3.append(button);
col2row3.append(divModal);

/* Append to row3 */
row3.append(col1row3);
row3.append(col2row3);

/* Append to container */
container.append(row3);

/* initialise DOM function */
function dom(map) {
  /* import first input logic */
  inputLogic();
  closeLogic();
  arrowLogicUp(i, map);
  mouseNavigation(map);
  autocomplete(map);

  /* import Second input logic */
  inputLogic2();
  closeLogic2();
  arrowLogicUp2(i, map);
  mouseNavigation2(map);
  autocomplete2(map);

  /* My cities */
  myMarkers(map);

  /* Append to divMap */
  mapDiv.append(container);
}

export {
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
};
