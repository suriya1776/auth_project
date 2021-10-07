import React from 'react'
import { useProjectContext } from '../Context/GlobalState'

function Developer1(props) {
  const { task2 } = useProjectContext()

  const logOut = () => {
    props.history.push('/')
  }

  return (
    <div>
      <div className='admin_sub'>
        <h1 className='form_heading '>DEVELOPER1 PAGE</h1>
        <button onClick={logOut} className='logout'>
          LOG OUT
        </button>
      </div>
      <div>
        {task2.map((task2) => {
          return <h1 className='project_name'>{task2}</h1>
        })}
      </div>
    </div>
  )
}

export default Developer1
