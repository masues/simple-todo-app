import './App.css';
import fccLogo from './imgs/freecodecamp-logo.png';
import Task from './components/Task';
import TaskForm from './components/TaskForm';
import React, {useState} from 'react';

function App() {
  const [taskList,setTaskList] = useState([]);

  const addTask = (task) => {
    setTaskList((oldTaskList) => [task,...oldTaskList]);
  };

  return (
    <div className='App'>
      <div className='logo-container'>
        <img className='fcc-logo' src={fccLogo} alt='Logotipo de freeCodeCamp' />
      </div>
      <h1>Lista de tareas</h1>
      <div className='todo-list-container'>
        <TaskForm addTask={addTask}/>
        <Task text='Hello World!' isCompleted={false}/>
        <Task text='This task is completed' isCompleted={true}/>
        {
          taskList.map( (task) =>
            <Task key={task.id} text={task.text} isCompleted={task.completed} />
          )
        }
      </div>
    </div>
  );
}

export default App;
