var $=document;
let myColor=$.querySelectorAll('.bt');
let colorRes;
myColor.forEach(function(color) 
{
    color.addEventListener('click',function(event)
    {
    colorRes=event.target.dataset.color;
    $.documentElement.style.setProperty('--theme-color',colorRes)
    })   
})

// todolist

// تابع برای بارگذاری تسک‌ها از لوکال استوریج
// function loadTasks() {
//     const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     const taskList = document.getElementById('taskList');
//     taskList.innerHTML = '';
//     tasks.forEach((task, index) => {
//         const li = document.createElement('li');
//         li.textContent = task;
//         li.addEventListener('click', () => {
//             removeTask(index);
//         });
//         taskList.appendChild(li);
//     });
// }

// // تابع برای اضافه کردن تسک جدید
// function addTask() {
//     const taskInput = document.getElementById('itemInput');
//     const task = taskInput.value.trim();
//     if (task) {
//         const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//         tasks.push(task);
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//         taskInput.value = '';
//         loadTasks();
//     }
// }

// // تابع برای حذف تسک
// function removeTask(index) {
//     const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     tasks.splice(index, 1);
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     loadTasks();
// }

// // رویداد برای دکمه اضافه کردن تسک
// document.getElementById('addButton').addEventListener('click', addTask);

// // بارگذاری تسک‌ها هنگام بارگذاری صفحه
// loadTasks();