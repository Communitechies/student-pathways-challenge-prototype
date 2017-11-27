import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PathwayGraph from '../PathwayGraph'
import { sidebarSwitchToCreate, sidebarSwitchToViewNode } from '../../store/pathway'


class Pathway extends PureComponent {
  constructor (props) {
    super()

    const { pathway } = props
    
    this.state = {
      pathway: [this.getAddNode()],
      edges: []
    }
  }

  getAddNode () {
    return {
      id: 'add',
      label: 'Click to create a new step'
    }
  }

  onSelectNode = (nodeId) => {
    if (nodeId === 'add') {
      this.props.actions.sidebarSwitchToCreate()
    }
  }

  render () {
    return (
      <PathwayGraph
        nodes={this.state.pathway}
        edges={this.state.edges}
        onSelectNode={this.onSelectNode}/>
    )
  }
}

const stateToProps = (state) => ({
  pathway: state.user.pathway
})

const dispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ sidebarSwitchToCreate, sidebarSwitchToViewNode }, dispatch)
})

export default connect(stateToProps, dispatchToProps)(Pathway)
