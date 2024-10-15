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
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const liHTML = `<li class="d-flex ps-3 mt-3 justify-content-between align-items-center gap-1 w-100 mx-auto border border-user rounded-3 ${task.completed ? 'completed' : ''}">
        <div class="col-12">
          <span class="fs-5">${task.text}</span>
        </div>
        <div class="col-1 flex">
          <button type="submit" id="deleteButton" class="btn bg-user d-flex text-white justify-content-center align-items-center "><img src="./img/delete-svgrepo-com.svg" alt="del"></button>
        
          <button type="submit" id="doneButton" class="btn mt-1 bg-user d-flex text-white justify-content-center align-items-center "><img src="./img/done-1476-svgrepo-com.svg" alt="edit"></button>
       
          <button type="submit" id="editButton" class="btn mt-1 bg-user d-flex text-white justify-content-center align-items-center "><img src="./img/edit-svgrepo-com.svg" alt="edit"></button>
        </div>
      </li>
      `;
        taskList.insertAdjacentHTML('beforeend', liHTML);
        taskList.querySelector(`li:last-child #deleteButton`).addEventListener('click',() => removeTask(index));
        taskList.querySelector(`li:last-child #editButton`).addEventListener('click',() => editTask(index));
        taskList.querySelector(`li:last-child #doneButton`).addEventListener('click' ,() => complateTask(index))
    });
}

// تابع برای اضافه کردن تسک جدید
function addTask() {
    const taskInput = document.getElementById('itemInput');
    const taskText = taskInput.value;
    if (taskText) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ text: taskText, completed: false }); // اضافه کردن تسک جدید
        try {
            localStorage.setItem('tasks', JSON.stringify(tasks)); // ذخیره تسک جدید در لوکال استوریج
            console.log('Tasks saved:', tasks);
        } catch (error) {
            console.error('Error saving to localStorage', error);
        }
        taskInput.value = ''; // پاک کردن ورودی
        loadTasks(); // بارگذاری مجدد تسک‌ها
    } else {
        console.log('No task entered'); // اگر تسکی وارد نشده باشد
    }
}
// تابع برای حذف تسک
function removeTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (tasks[index]) {
        tasks.splice(index, 1); // حذف تسک
        localStorage.setItem('tasks', JSON.stringify(tasks)); // ذخیره تسک‌های به‌روزرسانی شده
        loadTasks(); // بارگذاری مجدد تسک‌ها
    }
}
// تابع برای ویرایش
function editTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (tasks[index]) {
        if (tasks[index].completed) {
            alert('این تسک انجام شده است و نمی‌توانید آن را ویرایش کنید.'); // پیام خطا
            return; // جلوگیری از ویرایش
        }
        
        const newTask = prompt('ویرایش تسک:', tasks[index].text); // دسترسی به متن تسک

        if (newTask !== null && newTask.trim() !== '') { // بررسی ورودی جدید
            tasks[index].text = newTask; // به‌روزرسانی متن تسک
            localStorage.setItem('tasks', JSON.stringify(tasks)); // ذخیره تسک‌های به‌روزرسانی شده
            loadTasks(); // بارگذاری مجدد تسک‌ها
        }
    } else {
        console.error("تسکی با این ایندکس وجود ندارد."); // پیام خطا در صورت عدم وجود تسک
    }
}
// وضعیت تسک 
function complateTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (tasks[index]) {
        tasks[index].completed = !tasks[index].completed; // تغییر وضعیت انجام شده
     
        localStorage.setItem('tasks', JSON.stringify(tasks)); // ذخیره تسک‌های به‌روزرسانی شده
        loadTasks(); // بارگذاری مجدد تسک‌ها
    }
}
// رویداد برای دکمه اضافه کردن تسک
document.getElementById('addButton').addEventListener('click', addTask);
// بارگذاری تسک‌ها هنگام بارگذاری صفحه
function taskCount()
{
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskCount = document.getElementById('taskCount');
    taskCount.textContent =" ";
    taskCount.textContent ='Task To do -'+ `${tasks.length}`;
}

loadTasks();
taskCount();
window.addEventListener("load", function () {
    document.getElementById("itemInput").focus()
})

// darkMood

document.addEventListener("DOMContentLoaded", function() {
    const themeSwitch = document.getElementById("theme-switch");
  
    // Function to toggle dark mode
    function toggleDarkMode() {
      if (themeSwitch.checked) {
        document.body.classList.add("bg-slate")
        document.body.classList.remove("bg-body-tertiary")
        document.body.style.color = "white"; // Light text color
      } else {
        document.body.classList.remove("bg-slate")
        document.body.classList.add("bg-body-tertiary")        
        document.body.style.color = "black"; // Dark text color
      }
    }
  
    // Add event listener on the checkbox
    themeSwitch.addEventListener("change", toggleDarkMode);
  });