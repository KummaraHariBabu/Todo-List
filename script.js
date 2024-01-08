document.addEventListener("DOMContentLoaded", function() {
    const addTodoButton = document.getElementById("addTodo");
    const newTodoInput = document.getElementById("newTodo");
    const todoList = document.getElementById("todos");

    addTodoButton.addEventListener("click", function() {
        addTodo();
    });

    newTodoInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTodo();
        }
    });

    function addTodo() {
        const todoText = newTodoInput.value.trim();

        if (todoText !== "") {
            const newTodo = document.createElement("li");
            newTodo.className = "todo"; 
            newTodo.textContent = todoText;

            const removeButton = document.createElement("span");
            removeButton.className = "remove-todo";
            removeButton.textContent = "Remove";

            removeButton.addEventListener("click", function() {
                newTodo.remove();
            });

            newTodo.addEventListener("mouseenter", function() {
                removeButton.style.display = "inline-block";
            });

            newTodo.addEventListener("mouseleave", function() {
                removeButton.style.display = "none";
            });

            newTodo.appendChild(removeButton);
            todoList.appendChild(newTodo);
            newTodoInput.value = "";
        }
    }
});
