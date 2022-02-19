import { taskCount } from "./utilities.js";

function addSection(arr) {
  if (arr.length < 1) {
    document.getElementById("todo__list").innerHTML = "This list is empty!";
  } else {
    document.getElementById("todo__list").innerHTML = "";
    let list = document.getElementById("todo__list");
    for (let i = 0; i < arr.length; i++) {
      let section = document.createElement("section");
      section.innerHTML =
        "<input type='checkbox' id='item" +
        i +
        "' name='item" +
        i +
        "' onclick='strikethrough()'><label class='todo__label' id='item" +
        i +
        "l' for='item" +
        i +
        "'>" +
        arr[i].content +
        "</label><button class='todo__item--remove' id='item" +
        i +
        "--remove' onclick='clickRemove()'>X</button><br>";
      section.setAttribute("class", "todo__item");
      list.appendChild(section);
      if (arr[i].completed === true) {
        document
          .getElementById("item" + i + "l")
          .classList.add("todo__item--strike");
        document.getElementById("item" + i).setAttribute("checked", "true");
      }
    }
  }
  taskCount();
}

export { addSection };
