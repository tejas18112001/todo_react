import React from 'react'

const Addform = ({setNewTask , newTask ,addTask}) => {
  return (
    <>
    {/* Add Task */}

    <div className='row'>

      <div className='col'>
        <input
          
          placeholder='What is the task today ?'
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
          className='form-control form-control-lg'>
        </input>
      </div>

      <div className='col-auto'>
        <button
          onClick={addTask}
          className='btn btn-lg btn-success'
        >
          ADD TASK
        </button>
      </div>

    </div>
    <br></br>
  </>
  )
}

export default Addform
