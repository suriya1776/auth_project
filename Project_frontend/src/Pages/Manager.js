import React from 'react'
import './Manager.css'
import { useProjectContext } from '../Context/GlobalState'

function Manager(props) {
  const { project, task, displayTask } = useProjectContext()

  const taskHandler = (index1) => {
    displayTask()
  }

  return (
    <div>
      <h1 className='form_heading '>Manager page</h1>
      {project.map((project, index) => {
        return (
          <div className='project_name'>
            <h1 key={index}>
              {project}
              <button onClick={() => taskHandler(index)}>CREATE TASK</button>
            </h1>
          </div>
        )
      })}
      <div>{task}</div>
    </div>
  )
}

export default Manager
