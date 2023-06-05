
const todoA = JSON.parse(localStorage.getItem("todos"));

const handligTodos = () => {

    // Create a "close" button and append it to each list item
    const myNodelist = document.getElementsByTagName("myUL");
    if (todoA);
    let i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }

    document.querySelector('.addBtn').addEventListener("click", function (e) {
        let input = document.querySelector("#myInput").value;
        let date = document.querySelector("#date").value;
        if (input.trim().length < 1 || date.trim().length < 1) alert("error")
        let todo = {
            task: input,
            date: date
        };
        todoA.push(todo);


        // localStorage.setItem("todos", JSON.stringify(todoA));
        displayList(todoA);
    });



    // // Click on a close button to hide the current list item
    // var close = document.getElementsByClassName("close");
    // var i;
    // for (i = 0; i < close.length; i++) {
    //     close[i].onclick = function () {
    //         var div = this.parentElement;
    //         div.style.display = "none";
    //     }
    // }

    // // Add a "checked" symbol when clicking on a list item
    // var list = document.querySelector('ul');
    // list.addEventListener('click', function (ev) {
    //     if (ev.target.tagName === 'LI') {
    //         ev.target.classList.toggle('checked');
    //     }
    // }, false);

    // Create a new list item when clicking on the "Add" button


}


const displayList = arrayn => {
    let first_ul = document.querySelector('#myUL');
    first_ul.replaceChildren();
    arrayn.forEach(a => {

        // let first_ul = document.querySelector('#myUL');
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        let name = document.createTextNode(` Task: ${a.task} - Date: ${a.date}`);
        li.appendChild(name);
        ul.appendChild(li);
        first_ul.appendChild(ul);
    })
}




document.addEventListener('DOMContentLoaded', handligTodos, false);