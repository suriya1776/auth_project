import React from 'react'
import './Manager.css'
import { useProjectContext } from '../Context/GlobalState'

function Manager(props) {
  const { project } = useProjectContext()

  const clickHandler = (index) => {
    props.history.push(`/project${index + 1}`)
  }

  const logOut = () => {
    props.history.push('/')
  }

  return (
    <div>
      <div className='admin_sub'>
        <h1 className='form_heading '>ADMIN PAGE</h1>
        <button onClick={logOut} className='logout'>
          LOG OUT
        </button>
      </div>
      {project.map((project, index) => {
        return (
          <div>
            <h1
              key={index}
              onClick={() => clickHandler(index)}
              className='project_name'
            >
              {project}
            </h1>
          </div>
        )
      })}
    </div>
  )
}

export default Manager
