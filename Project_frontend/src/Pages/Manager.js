import React from 'react'
import './Manager.css'
import { useProjectContext } from '../Context/GlobalState'

function Manager(props) {
  const { project } = useProjectContext()

  const clickHandler = (index) => {
    props.history.push(`/project${index + 1}`)
  }

  return (
    <div>
      <h1 className='form_heading '>Manager page</h1>
      {project.map((project, index) => {
        return (
          <div className='project_name'>
            <h1 key={index} onClick={() => clickHandler(index)}>
              {project}
            </h1>
          </div>
        )
      })}
    </div>
  )
}

export default Manager
