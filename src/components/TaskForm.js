import React from 'react';
import '../css/TaskForm.css';

function TaskForm(){
  return (
    <form className='task-form'>
      <input
        className='task-input'
        type='text'
        placeholder='Escribe una tarea' />
      <button className='task-button'>Agregar tarea</button>
    </form>
  );
}

export default TaskForm;
