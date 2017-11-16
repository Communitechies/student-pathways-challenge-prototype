import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import GrommetApp from 'grommet/components/App';
import Split from 'grommet/components/Split'

import store, { history } from './store'

import SideBar from './components/Sidebar'

import './App.css';
import 'grommet/grommet.min.css';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <GrommetApp>
            <ConnectedRouter history={history}>
              <Split fixed seperator>
                <SideBar/>
              </Split>
            </ConnectedRouter>
          </GrommetApp>
      </Provider>
    );
  }
}
