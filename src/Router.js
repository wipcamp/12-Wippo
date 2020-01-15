import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Dashboard from './components/Dashboard'


export default class Index extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Router>
    )
  }
}

