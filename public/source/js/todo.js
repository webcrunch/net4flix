
const todoA = JSON.parse(localStorage.getItem("todos"));

const handligTodos = () => {
    todoA.length > 0 ? displayList(todoA) : null
    // if (todoA.length > 0) document.querySelector('.todo-list').addEventListener("click", function (e) {
    //     console.log(e);
    // })
    // Create a "close" button and append it to each list item
    const myNodelist = document.getElementsByTagName("myUL");
    // for (let i = 0; i < myNodelist.length; i++) {
    //     var span = document.createElement("SPAN");
    //     var txt = document.createTextNode("\u00D7");
    //     span.className = "close";
    //     span.appendChild(txt);
    //     myNodelist[i].appendChild(span);
    // }

    document.querySelector('.updateBtn').addEventListener("click", function (e) {
        e.preventDefault();
        const hidden = document.querySelector("#postId");
        let input = document.querySelector("#myInput").value;
        let date = document.querySelector("#date").value;
        const id = +hidden.value;

        const post = todoA.find(todo => todo.id === id);

        if (input.trim().length < 1 || date.trim().length < 1) return alert("error")
        post.task = input;
        post.date = date;
        todoA[id] = post;
        localStorage.setItem("todos", JSON.stringify(todoA));
        hidden.value = null;
        const addButton = document.querySelector('.addBtn');
        const editButton = document.querySelector('.updateBtn')
        addButton.style.display = 'block';
        editButton.style.display = 'none';
        // displayList(todoA);
        handligTodos();
    });

    document.querySelector('.addBtn').addEventListener("click", function (e) {
        e.preventDefault();
        let input = document.querySelector("#myInput").value;
        let date = document.querySelector("#date").value;
        if (input.trim().length < 1 || date.trim().length < 1) return alert("error")
        let todo = {
            id: todoA.length,
            task: input,
            date: date
        };
        todoA.push(todo);


        localStorage.setItem("todos", JSON.stringify(todoA));
        displayList(todoA);
        handligTodos();
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


const editPost = id => {
    const post = todoA.find(todo => todo.id === id);
    const addButton = document.querySelector('.addBtn');
    const editButton = document.querySelector('.updateBtn')
    const inputText = document.querySelector('#myInput');
    const inputDate = document.querySelector('#date');
    const hidden = document.querySelector("#postId");
    hidden.value = post.id;
    inputText.value = post.task;
    inputDate.value = post.date;
    addButton.style.display = 'none';
    editButton.style.display = 'block';
}

const displayList = arrayn => {
    let first_ul = document.querySelector('#myUL');
    first_ul.replaceChildren();
    arrayn.forEach(a => {

        // let first_ul = document.querySelector('#myUL');
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        li.setAttribute('id', a.id);
        li.classList.add('todo-list');
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        let name = document.createTextNode(` Task: ${a.task} - Date: ${a.date}`);
        li.appendChild(name);
        li.appendChild(span)
        ul.appendChild(li);
        first_ul.appendChild(ul);
        li.addEventListener("click", function (e) {
            editPost(+e.target.id);
        })
    })

}





document.addEventListener('DOMContentLoaded', handligTodos, false);