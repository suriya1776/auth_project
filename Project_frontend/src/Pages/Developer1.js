import React from 'react'
import { useProjectContext } from '../Context/GlobalState'

function Developer1() {
  const { task2 } = useProjectContext()
  return (
    <div>
      <h1>developer1 page</h1>
      <div>
        {task2.map((task2) => {
          return <h1>{task2}</h1>
        })}
      </div>
    </div>
  )
}

export default Developer1
