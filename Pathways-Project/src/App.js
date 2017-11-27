import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import GrommetApp from 'grommet/components/App';
import Split from 'grommet/components/Split'
import Box from 'grommet/components/Box'

import store, { history } from './store'

import SideBar from './components/Sidebar'
import MyPath from './components/MyPath'

import './App.css';
import 'grommet/grommet.min.css';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <GrommetApp centered={false}>
            <ConnectedRouter history={history}>
              <Split fixed flex='right'>
                <SideBar/>
                <Box full flex>
                  <Switch>
                    <Route path='/mypath' component={MyPath}/>
                  </Switch>
                </Box>
              </Split>
            </ConnectedRouter>
          </GrommetApp>
      </Provider>
    );
  }
}
