import React from 'react'
import { useProjectContext } from '../Context/GlobalState'
function Developer2(props) {
  const { task3 } = useProjectContext()

  const logOut = () => {
    props.history.push('/')
  }

  return (
    <div>
      <div className='admin_sub'>
        <h1 className='form_heading '>DEVELOPER2 PAGE</h1>
        <button onClick={logOut} className='logout'>
          LOG OUT
        </button>
      </div>
      <div>
        {task3.map((task3) => {
          return <h1 className='project_name'>{task3}</h1>
        })}
      </div>
    </div>
  )
}

export default Developer2
