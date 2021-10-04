import React from 'react'
import './Manager.css'
import { useProjectContext } from '../Context/GlobalState'

function Manager() {
  const { project, task, displayTask } = useProjectContext()
  console.log(task)

  // const taskHandler = (index1) => {
  //   console.log(project[index1])
  // }
  // () => taskHandler(index)
  return (
    <div>
      <h1 className='form_heading '>Manager page</h1>

      <div>
        {project.map((project, index) => {
          return (
            <div className='project_name'>
              <h1 key={index}>{project}</h1>
              <button onClick={displayTask}>CREATE TASK</button>
              {task.map((task) => {
                return <h1>{task}</h1>
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Manager
