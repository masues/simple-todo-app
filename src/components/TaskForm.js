import React from 'react';
import '../css/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm({addTask}){
  const handleSubmit = event => {
    // Prevent to reload the page
    event.preventDefault();
    // Access to the content using HTMLFormElement with name='task-input-text'
    const taskText = event.target.elements['task-input-text'].value;
    const newTask = {
      id: uuidv4(),
      text: taskText,
      completed: false
    };
    // Reset the input to empty string
    event.target.elements['task-input-text'].value = '';
    addTask(newTask);
  };

  return (
    <form className='task-form' onSubmit={handleSubmit}>
      <input
        className='task-input'
        type='text'
        name='task-input-text'
        placeholder='Escribe una tarea' />
      <button className='task-button'>Agregar tarea</button>
    </form>
  );
}

export default TaskForm;
