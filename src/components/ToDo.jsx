import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // icons
  //to mark task as completed , to add the task , for button to delete the task
  faCircleCheck, faPen, faTrash, faTrashCan
} from '@fortawesome/free-solid-svg-icons';


const ToDo = ({toDo ,markDone ,setUpdateData , deleteTask }) => {
  return (
  <>
        {toDo && toDo
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map((task, index) => {
          return (
            <>


              <div className='col taskBg'>
                <div className={task.status ? 'done' : ''}>

                  <span className='taskNumber' >{index + 1}</span>
                  <span className='taskText' >{task.title} </span>

                </div>

                <div className='iconsWrap'>
                  <span title='Completed / Not Completed'
                    onClick={(e) => markDone(task.id)} >
                    <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                  </span>

                  {
                    task.status ? null : (
                      <span title='Edit'
                        onClick={() => setUpdateData({
                          id: task.id,
                          title: task.title,
                          status: task.status ? true : false

                        })}>
                        <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                      </span>

                    )
                  }

                  <span title='Delete' onClick={() => deleteTask(task.id)}>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>

                  </span>
                </div>

              </div>
            </>
          )
        }) 
      }
  </>
  )
}

export default ToDo
