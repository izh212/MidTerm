document.getElementById('addTodo').addEventListener('click', (e) => {
    let task = document.getElementById('input').value
    if (task === '')
    {
        alert('Add Todo')
        return;
    }
    document.getElementById('input').value = ''
    let newli = document.createElement('li')
    newli.id = 'li-todo'
    newli.innerHTML = ` <input type="checkbox" name="" class="todo"> ` + task + 
   ` <button class="delete">Delete</button>
    <button class="Edit">Edit</button>`
    document.getElementById('todos').append(newli)
    e.preventDefault()
})

let parent = document.getElementById("todos");
parent.addEventListener("click", function(e) {
    if(e.target.className == "delete") {
        let li = e.target.parentElement;
        parent.removeChild(li);
    }
});

let parent2 = document.getElementById("todos");
parent2.addEventListener("click", function(e) {
    if(e.target.className == "todo") {
        let li = e.target.parentElement;      
     if (!li.classList.contains('completed'))
        li.classList = 'completed'
    else 
    li.classList.remove('completed')
    }
});

let parent3 = document.getElementById("todos");
parent3.addEventListener("click", function(e) {
    if(e.target.className == "Edit") {
       let newtodo = prompt('Edit Todo')
       let li = e.target.parentElement;
        parent.removeChild(li);
        let newli = document.createElement('li')
        newli.id = 'li-todo'
        newli.innerHTML = ` <input type="checkbox" name="" class="todo"> ` + newtodo + 
       ` <button class="delete">Delete</button>
        <button class="Edit">Edit</button>`
        document.getElementById('todos').append(newli)

    }
});







