import { createContext, useContext, useState } from 'react'

export const ProjectContext = createContext({
  project: 'project has been created',
  task: 'task has been created',
  display: () => {},
  displayTask: () => {},
})
const PROJECT = []
const TASK = []
export function ProjectContextProvider({ children }) {
  const [project, setProject1] = useState(PROJECT)
  const [task, setTask] = useState(TASK)
  const [count, setCount] = useState(1)
  const [count1, setCount1] = useState(1)
  const display = () => {
    setCount(count + 1)

    setProject1([...project, `Project${count} has been created`])
  }
  const displayTask = () => {
    setCount1(count1 + 1)
    setTask([...task, `Task${count1} has been created`])
  }

  return (
    <ProjectContext.Provider value={{ project, display, task, displayTask }}>
      {children}
    </ProjectContext.Provider>
  )
}

export function useProjectContext() {
  const { project, display, task, displayTask } = useContext(ProjectContext)
  return { project, display, task, displayTask }
}
