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
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    const taskCount = document.getElementById('taskCount');
    taskCount.textContent += ` ${tasks.length}`;
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const liItem =`<li class="d-flex ps-3 mt-3 justify-content-between align-items-center w-100 mx-auto border border-user rounded-3">
        <div class="col-12">
          <span class="fs-5">${task}</span>
        </div>
        <div class="col-1 flex">
          <button type="submit" id="deleteButton" class="btn bg-user d-flex text-white justify-content-center align-items-center "><img src="./img/delete-svgrepo-com.svg" alt="del"></button>
        
          <button type="submit" id="doneButton" class="btn mt-1 bg-user d-flex text-white justify-content-center align-items-center "><img src="./img/done-1476-svgrepo-com.svg" alt="edit"></button>
       
          <button type="submit" id="editButton" class="btn mt-1 bg-user d-flex text-white justify-content-center align-items-center "><img src="./img/edit-svgrepo-com.svg" alt="edit"></button>
        </div>
        
      </li>
      `;
      taskList.insertAdjacentHTML('beforeend', liItem);
      document.getElementById('deleteButton').addEventListener('click', removeTask);
      document.getElementById('editButton').addEventListener('click', editTask);
      
    });
}

// تابع برای اضافه کردن تسک جدید
function addTask() {
    const taskInput = document.getElementById('itemInput');
    const task = taskInput.value.trim();
    if (task) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = '';
        loadTasks();
    }
}

// تابع برای حذف تسک
function removeTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
}

// رویداد برای دکمه اضافه کردن تسک
document.getElementById('addButton').addEventListener('click', addTask);

// بارگذاری تسک‌ها هنگام بارگذاری صفحه
loadTasks();