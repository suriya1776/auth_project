import { createContext, useContext, useState } from 'react'

export const ProjectContext = createContext({
  project: 'project has been created',
  task: 'task has been created',
  display: () => {},
  displayTask: () => {},
  Task11: () => {},
  Task22: () => {},
  Task33: () => {},
  task1: 'task1 is assigned',
  task2: 'task2 is assigned',
  task3: 'task3 is assigned',
})
const PROJECT = []
const TASK = []
const TASK1 = []
export function ProjectContextProvider({ children }) {
  const [project, setProject1] = useState(PROJECT)
  const [task, setTask] = useState(TASK)
  const [count, setCount] = useState(1)
  const [count1, setCount1] = useState(1)
  const [task1, setTask1] = useState(TASK1)
  const [task2, setTask2] = useState([])
  const [task3, setTask3] = useState([])
  const display = () => {
    setCount(count + 1)

    setProject1([...project, `Project${count} has been created`])
  }
  const displayTask = () => {
    setCount1(count1 + 1)

    setTask([...task, `Task${count1} has been created`])
  }
  const Task11 = (taskDetail1) => {
    setTask1([...task1, `${taskDetail1} is assigned to you`])
  }
  const Task22 = (taskDetail2) => {
    setTask2([...task2, `${taskDetail2} is assigned to you`])
  }
  const Task33 = (taskDetail3) => {
    setTask3([...task3, `${taskDetail3} is assigned to you`])
  }

  return (
    <ProjectContext.Provider
      value={{
        project,
        display,
        task,
        displayTask,
        Task11,
        Task22,
        Task33,
        task1,
        task2,
        task3,
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}

export function useProjectContext() {
  const {
    project,
    display,
    task,
    displayTask,
    Task11,
    Task22,
    Task33,
    task1,
    task2,
    task3,
  } = useContext(ProjectContext)
  return {
    project,
    display,
    task,
    displayTask,
    Task11,
    Task22,
    Task33,
    task1,
    task2,
    task3,
  }
}
