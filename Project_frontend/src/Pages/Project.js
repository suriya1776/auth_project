import React, { useState, useEffect } from 'react'

import { useProjectContext } from '../Context/GlobalState'
import api from '../Axios/axios'
import './project.css'

function Project(props) {
  const [data, setData] = useState([])
  const { task, displayTask, Task11, Task22, Task33 } = useProjectContext()
  const [taskDetail1, setTaskDetail1] = useState([])
  const [taskDetail2, setTaskDetail2] = useState([])
  const [taskDetail3, setTaskDetail3] = useState([])

  const fetchUrl = '/admin/post'

  const logOut = () => {
    props.history.push('/')
  }

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

  function inputChange(id, task) {
    if (id === '735') {
      setTaskDetail1(task.slice(0, 5))
    } else if (id === '678') {
      setTaskDetail2(task.slice(0, 5))
    } else if (id === '578') {
      setTaskDetail3(task.slice(0, 5))
    } else {
      alert()
    }
  }

  const developerHandler = (id1) => {
    if (id1 === '735') {
      Task11(taskDetail1)
    } else if (id1 === '678') {
      Task22(taskDetail2)
    } else if (id1 === '578') {
      Task33(taskDetail3)
    }
  }

  return (
    <div>
      <div className='admin_sub'>
        <h1 className='form_heading '>TASK PAGE</h1>
        <button onClick={logOut} className='logout'>
          LOG OUT
        </button>
      </div>
      <button className='project_button' onClick={displayTask}>
        CREATE TASK
      </button>
      {task.map((task) => {
        return (
          <div>
            <h1 className='project_name'>{task}</h1>
            <div className='task_table'>
              <h3 className='assign_task'>ASSIGN TASK TO:</h3>
              <div>
                {data.map((data) => {
                  return (
                    <div className='assign_table'>
                      <h1 className='assign_h1'>
                        <input
                          type='radio'
                          onClick={() => inputChange(data.id, task)}
                          name={task}
                          id={data.id}
                          value={task}
                          className='radio_button'
                        />
                        {`${data.name}-${data.id}`}
                      </h1>
                      <button
                        onClick={() => developerHandler(data.id)}
                        className='assign_button'
                      >
                        ASSIGN
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Project
