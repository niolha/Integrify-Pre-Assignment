let myNodelist = document.getElementsByTagName("LI");
let i;
let close = document.getElementsByClassName("close");
let list = document.querySelector("ul");

// //For default "tasks"
function addClose(element) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  element.appendChild(span);
  span.onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

for (i = 0; i < myNodelist.length; i++) {
  addClose(myNodelist[i]);
}

// Change style to "checked"

list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("done");
    }
  },
  false
);

// Create new tasks

function addTask() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("input").value;
  let t = document.createTextNode(inputValue);
  let msg = document.querySelector(".msg");
  li.appendChild(t);
  if (inputValue === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please assign the task";
    setTimeout(() => msg.remove(), 3000);
  } else {
    document.getElementById("tasks").appendChild(li);
  }
  document.getElementById("input").value = "";
  addClose(li);
}

//Remove all

function myReset() {
  const elmnt = document.getElementById("tasks");
  elmnt.innerHTML = "";
}
