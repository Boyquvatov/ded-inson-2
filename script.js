document.getElementById('add-task-btn').addEventListener('click', addTask);

let tasks = [];

function addTask() {
    const taskTime = parseFloat(document.getElementById('task-time').value);
    const taskErrors = parseInt(document.getElementById('task-errors').value);

    if (isNaN(taskTime) || isNaN(taskErrors)) {
        alert("Iltimos, to'g'ri ma'lumot kiriting.");
        return;
    }

    tasks.push({ time: taskTime, errors: taskErrors });

    const stressLevel = calculateStress(taskTime, taskErrors);

    updateTaskList();

    displayStressLevel(stressLevel);
}

function calculateStress(time, errors) {
    if (time > 8 || errors > 3) {
        return "Yuqori stress darajasi";
    } else {
        return "Past stress darajasi";
    }
}

function updateTaskList() {
    const taskListDiv = document.getElementById('task-list');
    taskListDiv.innerHTML = "<h3>Vazifalar Ro'yxati:</h3>";

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.innerText = `Vazifa ${index + 1}: Bajarish vaqti - ${task.time}s, Xatolar - ${task.errors}`;
        taskListDiv.appendChild(taskElement);
    });
}

function displayStressLevel(level) {
    const statusDiv = document.getElementById('status');
    statusDiv.innerHTML = `<p>Stress darajasi: ${level}</p>`;

    if (level === "Yuqori stress darajasi") {
        document.getElementById('task-time').disabled = true;
        document.getElementById('task-errors').disabled = true;
        document.getElementById('add-task-btn').classList.add('disabled');
    } else {
        document.getElementById('task-time').disabled = false;
        document.getElementById('task-errors').disabled = false;
        document.getElementById('add-task-btn').classList.remove('disabled');
    }
}
