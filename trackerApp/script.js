// script.js
// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array calle
// TODO: Call the render function to update the table with the new tasks.

console.log('hello from script')
// Section 2: App State Variables
let tasks = [];
// Section 3: Cached Element References
let taskForm = document.getElementById("taskForm")
let taskTable = document.getElementById("taskTable")
console.log(taskForm)
console.log(taskTable)


// Function to handle form submissions
function handleSubmission(event) {
    event.preventDefault();
    //   TODO: Get form input values  task description and task deadline input.
    let taskName = document.getElementById('taskName').value
    let taskDescription = document.getElementById('taskDescription').value
    let taskDeadline = document.getElementById('taskDeadline').value
    // TODO: Validate input fields
    if (!taskName || !taskDeadline) {
        alert("Task name and deadline are required!")
        return;
    }
    tasks.push({
        name: taskName,
        description: taskDescription,
        deadline: taskDeadline
    });
    //     // TODO: Update the tasks array
    //     // Use the push method to add a new task to the tasks array. For example: tasks.push({ name:
    //     //     taskName, description: taskDescription, deadline: taskDeadline })

    render();
}
// // Function to render tasks in the table
function render() {
    // TODO: Use array methods to create a new table row of data for each item in the arr
    taskTable.innerHTML = tasks.map((task, index) => `
<tr>
<td>${task.name}</td>
<td>${task.description}</td>
<td>${task.deadline}</td>
<td><button onclick="markTaskComplete(${index})">Complete</button></td>
<td><button onclick="removeTask(${index})">Remove</button></td>
</tr>
`).join('');
}

// Function to mark a task as complete
function markTaskComplete(index) {
    // just remove it from the tasks array
    tasks.splice(index, 1);
    render(); // Update the table
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1);
    render(); // Update the table
}


//  Function to initialize the table
function init() {

    taskTable.innerHTML = ''; // Clear the table
    tasks = []; // Reset the tasks array
    render(); // Call the render function
}

// // Event listener for form submission
taskForm.addEventListener('submit', handleSubmission);

// // Call the init function to set up the initial state of the app
init();

