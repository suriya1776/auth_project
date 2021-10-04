import React from 'react'

import './Admin.css'
import { useProjectContext } from '../Context/GlobalState'

function Admin() {
  const { project, display } = useProjectContext()

  return (
    <div className='admin_page'>
      <h1 className='form_heading '>ADMIN PAGE</h1>
      <button className='project_button' onClick={display}>
        Create project
      </button>

      <div className='project_box'>
        <h1>{project.project1}</h1>
      </div>
    </div>
  )
}

export default Admin
