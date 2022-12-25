import './App.css';
import fccLogo from './imgs/freecodecamp-logo.png';
import Task from './components/Task';
import TaskForm from './components/TaskForm';
import React, {useState} from 'react';

function App() {
  const [taskList,setTaskList] = useState([]);

  const addTask = task => {
    task.text = task.text.trim();
    // Check if the task text is not empty
    if (task.text)
      setTaskList(oldTaskList => [task,...oldTaskList]);
  };

  const completeTask = id => {
    const taskListUpdated = taskList.map(
      task => {
        if (task.id === id)
          task.completed = !task.completed;
        return task;
      }
    );
    setTaskList(taskListUpdated);
  };

  const deleteTask = id => {
    const taskListUpdated = taskList.filter( task => task.id !== id );
    setTaskList(taskListUpdated);
  };

  return (
    <div className='App'>
      <div className='logo-container'>
        <img className='fcc-logo' src={fccLogo} alt='Logotipo de freeCodeCamp' />
      </div>
      <h1>Lista de tareas</h1>
      <div className='todo-list-container'>
        <TaskForm addTask={addTask}/>
        {
          taskList.map( task =>
            <Task
              id={task.id}
              key={task.id}
              text={task.text}
              isCompleted={task.completed}
              completeTask={completeTask}
              deleteTask={deleteTask}
            />
          )
        }
      </div>
    </div>
  );
}

export default App;
