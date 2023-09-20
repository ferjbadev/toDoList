const { exit } = require('process');
const readline = require('readline');
require('colors');

const tasks= [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function Menu(){
  console.log('        Welcome to Todo List!        '.blue);
  console.log('           Menu Options'.blue)
  console.log('1. Add Task'.green);
  console.log('2. List Tasks'.green);
  console.log('3. Exit'.green)
  console.log('\n')
}

function addTask(){
  rl.question('Please write a task: '.green, (task) =>{
    tasks.push({task, completed: false});
    console.log('Task added successfully!'.green);
    console.log('\n')
    Menu();
    chooiseOption();
  });
}

function listTask(){
  console.log('\nShow the List'.blue,);

  if(tasks.length === 0){
    console.log('There are no tasks'.red)
  } else {
    tasks.forEach((task)=>{
      let status = task.completed ? "Task Completed" : "Task not Completed";
      console.log(`${status}`, tasks);
      console.log('\n')
      exit();
    });
  }
  Menu();
  chooiseOption();
}

function chooiseOption(){
  rl.question('Please select an option: '.blue, (choise)=>{
    switch(choise){
      case "1":
        addTask();
        break;
      case "2":
        listTask();
        break;
      case "3":
        console.log('Exit'.red);
        console.log('Bye!! come back soon!!'.green);
        rl.close();
        break;
        default:
          console.log('Invalid option, try again \n'.red);
          Menu();
          chooiseOption();
          break;
      }
  })
}

Menu();
chooiseOption();
