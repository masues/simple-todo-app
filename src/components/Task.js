import React from 'react';
import '../css/Task.css';
import { MdDelete } from 'react-icons/md';

function Task({text, isCompleted}){
  return (
    <div className={`task-container${isCompleted ? ' completed':''}`}>
      <div className='task-text'>{text}</div>
      <MdDelete className='task-icon'/>
    </div>
  );
}

export default Task;
