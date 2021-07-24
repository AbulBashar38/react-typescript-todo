import React from 'react';
import { useState } from 'react';
import './App.css';
import AllList from './Component/AllList/AllList';

function App() {

  const [addTask,setAddTask]= useState <string> ('')
  const [allTask,setAllTask]=useState <string[]> ([])
  
  const handleAddBtn=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    addTask.length>0&&setAllTask([...allTask, addTask])
    e.preventDefault()
  }

  const handleRemoveBtn=()=>{
    setAllTask([])
  }
  return (
    <div className='main-div'>
      <div className='header-container'>
        <h1>To Do List</h1>
        <input onBlur={(e)=>e.target.value.length>0&&setAddTask(e.target.value)} type="text" placeholder='Write a task name' />
        <button className='customBtn addBtn' onClick={handleAddBtn}>Add a Task</button>
        {
          allTask.length>0&&<button className='customBtn removeBtn' onClick={handleRemoveBtn}>Remove Task</button>
        }
        <div>
          {
            allTask.map(taskName=><AllList key={taskName} task={taskName}></AllList>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
