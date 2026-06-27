document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Array storage simulation representation
    let tasks = [];

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''}`;
            
            const taskText = document.createElement('span');
            taskText.textContent = task.text;
            li.appendChild(taskText);

            const actionsDiv = document.createElement('div');
            actionsDiv.className = 'task-actions';

            // Complete Button
            const compBtn = document.createElement('button');
            compBtn.textContent = task.completed ? 'Undo' : 'Complete';
            compBtn.style.backgroundColor = '#e2e8f0';
            compBtn.addEventListener('click', () => toggleTask(index));
            actionsDiv.appendChild(compBtn);

            // Delete Button
            const delBtn = document.createElement('button');
            delBtn.textContent = 'Delete';
            delBtn.style.backgroundColor = '#fce8e6';
            delBtn.style.color = '#a81c1c';
            delBtn.addEventListener('click', () => deleteTask(index));
            actionsDiv.appendChild(delBtn);

            li.appendChild(actionsDiv);
            taskList.appendChild(li);
        });
    }

    function addTask() {
        const text = taskInput.value.trim();
        if (text !== '') {
            tasks.push({ text: text, completed: false });
            taskInput.value = '';
            renderTasks();
        }
    }

    function toggleTask(index) {
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        renderTasks();
    }

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });
});