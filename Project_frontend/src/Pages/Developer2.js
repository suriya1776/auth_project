import React from 'react'
import { useProjectContext } from '../Context/GlobalState'
function Developer2() {
  const { task3 } = useProjectContext()

  return (
    <div>
      <h1>developer2 page</h1>
      <div>
        {task3.map((task3) => {
          return <h1>{task3}</h1>
        })}
      </div>
    </div>
  )
}

export default Developer2
