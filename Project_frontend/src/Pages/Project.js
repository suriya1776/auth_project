import React, { useState, useEffect } from 'react'

import { useProjectContext } from '../Context/GlobalState'
import api from '../Axios/axios'

function Project() {
  const [data, setData] = useState([])
  const { task, displayTask, Task11, Task22, Task33 } = useProjectContext()
  const [taskDetail1, setTaskDetail1] = useState([])
  const [taskDetail2, setTaskDetail2] = useState([])
  const [taskDetail3, setTaskDetail3] = useState([])
  const [developerDetail, setDeveloperDetail] = useState('')

  const fetchUrl = '/admin/post'

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

  function inputChange(e) {
    setDeveloperDetail(e.target.id)
    console.log(developerDetail)
    if (developerDetail === 735) {
      setTaskDetail1([...taskDetail1, e.target.value.slice(0, 5)])
      console.log('h1')
    } else if (developerDetail === 678) {
      setTaskDetail2([...taskDetail2, e.target.value.slice(0, 5)])
    } else if (developerDetail === 578) {
      setTaskDetail3([...taskDetail3, e.target.value.slice(0, 5)])
    }
  }

  const developerHandler = () => {
    console.log(taskDetail1)
    Task11(taskDetail1)
    Task22(taskDetail2)
    Task33(taskDetail3)
  }

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
                  <div>
                    <h1>
                      <input
                        type='radio'
                        onChange={inputChange}
                        name={task}
                        id={data.id}
                        value={task}
                      />

                      {data.id}
                      {data.name}
                    </h1>
                  </div>
                )
              })}
              <button onClick={developerHandler}>ASSIGN</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Project
