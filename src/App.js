import React, { useState } from 'react';
import Addform from './components/Addform.jsx'
import Updateform from './components/Updateform.jsx'
import ToDo from './components/ToDo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';





import './App.css';
const App = () => {
  // Tasks TODO list State

  const [toDo, setToDo] = useState([])


  //Temp state
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');


  //Add task   
  const addTask = () => {
    if (newTask) {
      let NewID = toDo.length + 1;
      let newEntry = { id: NewID, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      // console.log(setNewTask);
      setNewTask('');
    }
  }


  //Delete Task

  const deleteTask = (id) => {
    let newList = toDo.filter(task => task.id !== id)
    setToDo(newList);
  }

  //Mark done as done or  completed 

  const markDone = (id) => {
    let newTask = toDo.map(task => {
      console.log(task)
      if (task.id === id) {
        //  console.log(task) ;
        return ({ ...task, status: !task.status })
      }
      console.log("After :", task)
      return task;
    })


    setToDo(newTask);
  }


  // cancle update 
  const cancleUpdate = () => {
    setUpdateData('');
  }

  //change the task for update 
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }

    setUpdateData(newEntry);
  }

  // updateTask
  const updateTask = () => {
    let filterDataList = [...toDo].filter(
      task => task.id !== updateData.id);
    let newOne = [...filterDataList, updateData];

    setToDo(newOne);
    setUpdateData('');

  }

  // console.log(newTask) ;
  //   console.log(toDo.length? '4' : "hellow");
  return (






    <div className='container App'>
      <br></br>
      <h2>To Do List App (React) </h2>
      <br></br>



      {
        updateData ? (
          <Updateform 
            updateData={updateData}
            updateTask={updateTask} 
            cancleUpdate={cancleUpdate}
            changeTask={changeTask} />
        ) : (
          <Addform
            setNewTask={setNewTask} newTask={newTask}
            addTask={addTask}
          />
        )
      }











      {/* Display todo */}

      {toDo && toDo.length ? '' : 'No Task...😐'}
      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask} />

    </div>
  )
}

export default App




