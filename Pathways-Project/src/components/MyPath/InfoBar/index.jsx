import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import Title from 'grommet/components/Title'
import Header from 'grommet/components/Header'

import { sidebarModeEnum } from '../../../store/pathway'
import CreateNode from './CreateNode'
import ViewNode from './ViewNode'

class Sidebar extends PureComponent {
  renderCreate = () => {
    return (
      <Box>
        <Header><Title> Creating a new step </Title></Header>
        <CreateNode />
      </Box>
    )
  }

  renderView = () => {
    return (
      <Box>
        <ViewNode />
      </Box>
    )
  }

  renderNone = () => {
    let message

    if (this.props.pathway.length === 0) {
      message = 'Hey there! Click on the circle in the middle' +
      ' of the page to create the first step in your pathway!'
    } else {
      message = 'Click on a node to get started'
    }

    return (
      <Box flex alignContent='center' align='center' justify='center'>
        <Paragraph margin='medium' align='center' size='large'> {message} </Paragraph>
      </Box>
    )
  }

  render () {
    let content
    switch (this.props.sidebar.type) {
      case sidebarModeEnum.CREATE:
        content = this.renderCreate()
        break
      case sidebarModeEnum.VIEW:
        content = this.renderView()
        break
      case sidebarModeEnum.NONE:
        content = this.renderNone()
        break
    }

    return (
      <Box style={{flex: 0.3, border: 'solid 1px black'}} pad='medium'>
        {content}
      </Box>
    )
  }
}

const stateToProps = (state) => ({
  sidebar: state.pathway.sidebar,
  pathway: state.pathway.pathway
})

const dispatchToProps = (dispatch) => ({

})

export default connect(stateToProps, dispatchToProps)(Sidebar)
