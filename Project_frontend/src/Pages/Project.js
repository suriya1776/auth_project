import React, { useState, useEffect } from 'react'

import { useProjectContext } from '../Context/GlobalState'
import api from '../Axios/axios'

function Project() {
  const [data, setData] = useState([])
  const { task, displayTask } = useProjectContext()
  const fetchUrl = '/admin/post'
  console.log(data[0])
  useEffect(() => {
    api
      .get(fetchUrl)
      .then((res) => {
        setData(res.data[0].developer)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <h1>Task page </h1>
      <button onClick={displayTask}>CREATE TASK</button>
      {task.map((task) => {
        return (
          <div>
            <h1>{task}</h1>
            <p>assign to</p>
            <div>
              {data.map((data) => {
                return (
                  <h1>
                    <input type='checkbox' name={data.name} id={data.id} />
                    {data.id}
                    {data.name}
                  </h1>
                )
              })}
              <button>ASSIGN</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Project
