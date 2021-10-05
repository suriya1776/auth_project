import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ProjectContextProvider } from './Context/GlobalState'
import Login from './Components/Login'
import Admin from './Pages/Admin'
import Manager from './Pages/Manager'

import Developer from './Pages/Developer'
import Developer1 from './Pages/Developer1'
import Developer2 from './Pages/Developer2'
import Project from './Pages/Project'
import Project2 from './Pages/Project2'
import Notfound from './Pages/Notfound'

function App() {
  return (
    <ProjectContextProvider>
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/Admin/1207' component={Admin} />

            <Route path='/Manager/1234' component={Manager} />

            <Route path='/Developer/735' component={Developer} />
            <Route path='/Developer/678' component={Developer1} />
            <Route path='/Developer/578' component={Developer2} />
            <Route path={'/project1'} component={Project} />
            <Route path={'/project2'} component={Project2} />
            <Route path='' component={Notfound} />
          </Switch>
        </div>
      </Router>
    </ProjectContextProvider>
  )
}

export default App
