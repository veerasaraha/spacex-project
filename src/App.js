import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import History from './components/history/History'
import Home from './components/home/Home'
import Launches from './components/launches/Launches'
import Rockets from './components/rockets/Rockets'
import HistoricalEventPage from './pages/historicalPage/HistoricalEventPage'
import LaunchePage from './pages/launchPage/LaunchePage'
import RocketPage from './pages/rocketPage/RocketPage'

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/history' component={History} />
          <Route exact path='/launches' component={Launches} />
          <Route exact path='/rockets' component={Rockets} />

          <Route
            exact
            path='/historical-event/:id'
            component={HistoricalEventPage}
          />

          <Route exact path='/launch/:id' component={LaunchePage} />

          <Route exact path='/rocket/:id' component={RocketPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
