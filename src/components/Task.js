import React from 'react';
import '../css/Task.css';
import { MdDelete } from 'react-icons/md';

function Task({id, text, isCompleted, completeTask, deleteTask}){
  return (
    <div className={`task-container${isCompleted ? ' completed':''}`}>
      <div className='task-text' onClick={() => completeTask(id)}>{text}</div>
      <MdDelete className='task-icon' onClick={() => deleteTask(id)} />
    </div>
  );
}

export default Task;
