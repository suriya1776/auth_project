import React from 'react'
import { useProjectContext } from '../Context/GlobalState'

function Developer() {
  const { task1 } = useProjectContext()

  return (
    <div>
      <h1>Developer page</h1>
      <div>
        {task1.map((task1) => {
          return <h1>{task1}</h1>
        })}
      </div>
    </div>
  )
}

export default Developer
