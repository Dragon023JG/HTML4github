// script.js
// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array calle
// TODO: Call the render function to update the table with the new tasks.


// Section 2: App State Variables
let tasks = [];
// Section 3: Cached Element References
const taskForm = null;
const taskTable = null;


document.addEventListener("DOMContentloaded", function () {
    const taskForm = document.getElementById("taskForm").value;
    // Get the table element by its ID and assign it to taskTable
    const taskTable = document.getElementById("taskTable").value;
    // Log the values of taskForm and taskTable to the console
    console.log("taskForm:", taskForm);
    console.log("taskTable:", taskTable);
});

