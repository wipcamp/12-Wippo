import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import ViewRegistrant from './components/ViewRegistrant'
import Sider from './components/Core/Sider'
import { Layout } from 'antd';

const { Content } = Layout;

export default class Index extends React.Component {

  render() {
    return (
      <Router>
        <Sider />
        <Layout>
          <Content style={{ margin: '16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Switch>
                  <Route path="/dashboard">
                    <Dashboard />
                  </Route>
                  <Route path="/managemember">
                    <ViewRegistrant />
                  </Route>
              </Switch>
            </div>
          </Content>
        </Layout>
      </Router>
    )
  }
}

