const themeBtn = document.querySelector("#theme-btn");
const taskInput = document.querySelector("#task-input");
const addBtn = document.querySelector("#add-btn");
const taskList = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-count");
const studentCards = document.querySelector("#student-cards");

console.log(themeBtn, taskInput, addBtn, studentCards);
//Dark Mode Toggle
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }
});

// work on Task List
const tasks = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function renderTasks() {
    taskList.textContent = "";

    for (let i = 0; i < tasks.length; i++) {
        const li = document.createElement("li");
        li.textContent = tasks[i];
        

        //opportunity to delete a task
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener

        li.append(deleteBtn);
        taskList.append(li);
    }

    taskCount.textContent = `You have ${tasks.length} taskCount(s).`;
}

renderTasks();

//adding a task using
function addTask(){
    const text = taskInput.value.trim();

    if(text === ""){
        alert("Please type a task first.");
        return;
    } else {
        tasks.push(text); //changing the data or adding to the list
        taskInput.value = ""; // Clear the input box
        renderTasks();
    }
}

addBtn.addEventListener("click", addTask)

taskInput.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        addTask();
    }
});

//Student Card section
const students = [
    { name: "Alice", age: 20, course: "React", Level: "Beginner" },
    { name: "Bob", age: 22, course: "React", Level: "Intermediate" },
    { name: "Charlie", age: 21, course: "React", Level: "Advanced" }
];

function renderStudentCards() {
    for(const student of students){
        const card = document.createElement("div");
        card.className = "card";
        
        const heading = document.createElement("h3");
        heading.textContent = student.name;
        console.log(student.name);

        const info = document.createElement("p");
        info.textContent = `Age: ${student.age}, Course: ${student.course}, Level: ${student.Level}`;

        console.log(student.course);
        console.log(student.age);
        
        card.append(heading, info);
        studentCards.append(card);
    }
}

renderStudentCards();