import { createContext, useContext, useState } from 'react'

export const ProjectContext = createContext({
  project: 'project has been created',
  display: () => {},
})
const PROJECT = {}
export function ProjectContextProvider({ children }) {
  const [project, setProject1] = useState(PROJECT)
  const display = () => {
    setProject1({
      project1: 'Project 1 has been created ',
    })
  }

  return (
    <ProjectContext.Provider value={{ project, display }}>
      {children}
    </ProjectContext.Provider>
  )
}

export function useProjectContext() {
  const { project, display } = useContext(ProjectContext)
  return { project, display }
}
