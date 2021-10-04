import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ProjectContextProvider } from './Context/GlobalState'
import Login from './Components/Login'
import Admin from './Pages/Admin'
import Manager from './Pages/Manager'

import Developer from './Pages/Developer'
import Developer1 from './Pages/Developer1'
import Developer2 from './Pages/Developer2'

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
          </Switch>
        </div>
      </Router>
    </ProjectContextProvider>
  )
}

export default App
