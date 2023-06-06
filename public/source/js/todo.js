
const todoA = JSON.parse(localStorage.getItem("todos"));

const handligTodos = () => {
    todoA.length > 0 ? displayList(todoA) : null
    const myNodelist = document.getElementsByTagName("myUL");
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
        document.querySelector('#myInput').value = null;
        document.querySelector('#date').value = null;
        const addButton = document.querySelector('.addBtn');
        const editButton = document.querySelector('.updateBtn')
        addButton.style.display = 'block';
        editButton.style.display = 'none';
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

const removePost = id => {
    delete todoA[id];
    localStorage.setItem("todos", JSON.stringify(todoA));
    handligTodos();
}

const editPost = id => {
    const post = todoA.find(todo => todo.id === id);
    const close = document.querySelector('.editClose');
    const addButton = document.querySelector('.addBtn');
    const editButton = document.querySelector('.updateBtn')
    const inputText = document.querySelector('#myInput');
    const inputDate = document.querySelector('#date');
    const hidden = document.querySelector("#postId");
    close.style.display = 'block';
    close.addEventListener("click", function (e) {
        inputText.value = null;
        inputDate.value = null;
        addButton.style.display = 'block';
        editButton.style.display = 'none';
        close.style.display = 'none';
        handligTodos()
    })
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
        let li2 = document.createElement("li");
        li.setAttribute('id', a.id);
        li.classList.add('todo-list');
        let spanForText = document.createElement("SPAN");
        let spanForDeletion = document.createElement("SPAN");
        spanForText.title = "Click here for edit the todo post";
        spanForDeletion.title = "Click here for remove the todo post";
        spanForText.setAttribute('id', a.id);
        spanForDeletion.setAttribute('id', a.id);
        let txt = document.createTextNode("\u00D7");
        spanForDeletion.className = "close";
        spanForDeletion.appendChild(txt);
        let name = document.createTextNode(` Task: ${a.task} - Date: ${a.date}   `);
        spanForText.appendChild(name);
        li.appendChild(spanForText);
        li.appendChild(spanForDeletion)
        ul.appendChild(li);
        first_ul.appendChild(ul);




        spanForText.addEventListener("click", function (e) {
            editPost(+e.target.id);
        })
        spanForDeletion.addEventListener("click", function (e) {
            removePost(+e.target.id);
        })
    })

}





document.addEventListener('DOMContentLoaded', handligTodos, false);