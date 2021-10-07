import React from 'react'
import { useProjectContext } from '../Context/GlobalState'

function Developer(props) {
  const { task1 } = useProjectContext()

  const logOut = () => {
    props.history.push('/')
  }

  return (
    <div>
      <div className='admin_sub'>
        <h1 className='form_heading '>DEVELOPER PAGE</h1>
        <button onClick={logOut} className='logout'>
          LOG OUT
        </button>
      </div>
      <div>
        {task1.map((task1) => {
          return <h1 className='project_name'>{task1}</h1>
        })}
      </div>
    </div>
  )
}

export default Developer
