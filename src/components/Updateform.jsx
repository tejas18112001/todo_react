import React from 'react'

const Updateform = ({updateData ,updateTask ,
    cancleUpdate ,changeTask}) => {
  return (
    <>
          {/* update task */}

          <div className='row'>
              <div className='col'>
                  <input
                      /////////////////////////////////////////////////////////
                      value={updateData && updateData.title}
                      onChange={(e) => changeTask(e)}
                      className='form-control form-control-lg'>
                  </input>
              </div>

              <div className='col-auto'>
                  <button
                      onClick={() => updateTask()}
                      className="btn btn-lg btn-success mr-20">
                      UPDATE
                  </button>

                  <button
                      onClick={() => cancleUpdate()}
                      className="btn btn-lg btn-warning">
                      CANCLE
                  </button>
              </div>

          </div>
          <br></br>

  </>
  )
}

export default Updateform
