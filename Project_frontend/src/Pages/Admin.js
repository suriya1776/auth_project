import React from 'react'

import './Admin.css'

import { useProjectContext } from '../Context/GlobalState'

function Admin(props) {
  const { project, display } = useProjectContext()

  const logOut = () => {
    props.history.push('/')
  }

  return (
    <div className='admin_page'>
      <div className='admin_sub'>
        <h1 className='form_heading '>ADMIN PAGE</h1>
        <button onClick={logOut} className='logout'>
          LOG OUT
        </button>
      </div>
      <button className='project_button' onClick={display}>
        Create project
      </button>

      <div>
        {project.map((project) => {
          return <h1 className='project_name'>{project}</h1>
        })}
      </div>
    </div>
  )
}

export default Admin
