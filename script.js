// all tasks will be added to the tasks array
var tasks = []

// update total taks
update = function(){
     total = document.getElementsByClassName('total')[0];
     taskHolder = document.getElementsByClassName('tasks')[0];
     total.innerHTML = tasks.length;
     if(tasks.length == 0){
          taskHolder.innerHTML = "<p class='notasks'>You have no tasks</p>"
     }
}
// call update function
update();


// display tasks in HTML
var showtasks = function () {
     taskHolder = document.getElementsByClassName('tasks')[0];
     // empty the taskHolder and update it with new tasks 
     taskHolder.innerHTML = "";
     // loop through each tasks in tasks array and output in HTML
     for (var i = 0; i <= tasks.length-1; i++) {
          taskHolder.innerHTML += `
                              <div class="todo-wrapper">
                              <label class="container">
                                   <input class="checkbox" type="checkbox">
                                   <span class="checkmark"></span>
                                   <p class="taskp">${tasks[i]}</p>
                                   <button id="delete" onclick="deleteFunction(${i})">delete</button>
                              </label>
                              </div>`;
     }
}

//  delete task function

function deleteFunction(taskIndex){
     tasks.splice(taskIndex, 1);
     showtasks();

     // call update function
     update();

}

// adds new tasks
document.getElementById('addtaskbtn').addEventListener('click', function addtask() {
     var warnning =  document.getElementsByClassName('warnning')[0]
     var taskname = document.getElementsByClassName('task')[0];
     if(taskname.value.length < 3){
          warnning.innerHTML = 'characters too short';
     }else if(taskname.value == tasks[tasks.indexOf(taskname.value)]){
          warnning.innerHTML = 'task already exists';
     }else{
     tasks.push(taskname.value);

     // clear the add task input and warning text in HTML
     taskname.value = "";
     warnning.innerHTML = "";
     showtasks();

     // call update function
     update();
     }
})

// code by Godwin Nicholas :)
