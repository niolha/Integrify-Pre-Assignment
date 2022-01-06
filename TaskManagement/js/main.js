var myNodelist = document.getElementsByTagName("LI");
var i;
var close = document.getElementsByClassName("close");
var list = document.querySelector('ul');


//For default "tasks"

for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    }
}


// Change style to "checked"

list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('done');
        }
}, false);


// Create new tasks

function addTask() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    var msg = document.querySelector('.msg');
    li.appendChild(t);
    if (inputValue === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please assign the task';
        setTimeout(() => msg.remove(), 3000);
    } else {
        document.getElementById("tasks").appendChild(li);
        }
    document.getElementById("input").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    span.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


//Remove all

function myReset() {
    const elmnt = document.getElementById('tasks');
    elmnt.innerHTML = "";
}
