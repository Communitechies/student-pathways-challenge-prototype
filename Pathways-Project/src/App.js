import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import GrommetApp from 'grommet/components/App'
import Split from 'grommet/components/Split'
import Box from 'grommet/components/Box'

import store, { history } from './store'

import Login from './components/Login'
import SideBar from './components/Sidebar'
import MyPath from './components/MyPath'
import Search from './components/Search'
import Comparison from './components/PathwayComparison'
import Favourites from './components/Favourites'

import './App.css'
import 'grommet/grommet.min.css'

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <GrommetApp centered={false}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route path='/' exact component={Login} />
              <Split fixed flex='right'>
                <SideBar />
                <Box full flex>
                  <Switch>
                    <Route path='/mypath' component={MyPath} />
                    <Route path='/search' component={Search} />
                    <Route path='/comparison' component={Comparison} />
                    <Route path='/Favorites' component={Favourites} />
                  </Switch>
                </Box>
              </Split>
            </Switch>
          </ConnectedRouter>
        </GrommetApp>
      </Provider>
    )
  }
}
