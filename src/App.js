import './App.css';
import fccLogo from './imgs/freecodecamp-logo.png';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <div className='App'>
      <div className='logo-container'>
        <img className='fcc-logo' src={fccLogo} alt='Logotipo de freeCodeCamp' />
      </div>
      <h1>Lista de tareas</h1>
      <div className='todo-list-container'>
        <TaskForm />
        <Task text='Hello World!' isCompleted={false}/>
        <Task text='This task is completed' isCompleted={true}/>
      </div>
    </div>
  );
}

export default App;
