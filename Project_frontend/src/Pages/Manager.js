import React from 'react'
import './Manager.css'
import { useProjectContext } from '../Context/GlobalState'

function Manager() {
  const { project } = useProjectContext()
  return (
    <div>
      <h1>Manager page</h1>
      <div>
        <div>
          <h1>{project.project1}</h1>
        </div>
        <button>CREATE TASK</button>
      </div>
    </div>
  )
}

export default Manager
