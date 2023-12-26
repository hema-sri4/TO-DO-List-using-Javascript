// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerText = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", function() {
            deleteTask(taskItem);
        });

        const completeButton = document.createElement("button");
        completeButton.innerText = "Complete";
        completeButton.addEventListener("click", function() {
            toggleComplete(taskItem);
        });

        taskItem.appendChild(deleteButton);
        taskItem.appendChild(completeButton);
        taskList.appendChild(taskItem);

        taskInput.value = "";
    }
}

// Function to delete a task
function deleteTask(taskItem) {
    taskItem.remove();
}

// Function to toggle task completion
function toggleComplete(taskItem) {
    taskItem.classList.toggle("completed");
}
