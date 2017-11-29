import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PathwayGraph from '../PathwayGraph'
import { sidebarSwitchToCreate, sidebarSwitchToViewNode, loadUserPathway } from '../../store/pathway'


class Pathway extends PureComponent {
  constructor (props) {
    super()

    const { pathway } = props
    const { nodes, edges } = this.createNodesAndEdges(pathway)

    this.state = {
      nodes,
      edges
    }
  }

  get addNode () {
    return {
      id: 'add-' + Math.random().toString(36).substr(6),
      label: 'Click to create a new step'
    }
  }

  onSelectNode = (nodeId) => {
    const reg = /^add-/
    if (reg.test(nodeId)) {
      this.props.actions.sidebarSwitchToCreate()
    }
  }

  createNodesAndEdges (pathway) {
    let lastNodeMissing = false // Make sure we only have an 'add node' between gaps

    const nodes = []
    const grades = ['9', '10', '11', '12']
    
    grades.forEach(v => {
      if(v in pathway){
        nodes.push({ id: v, label: `Grade ${v}`})
        lastNodeMissing = false
      } else if (!lastNodeMissing) {
        nodes.push(this.addNode)
        lastNodeMissing = true
      }
    })

    const edges = []

    for (let x = 1; x < nodes.length; x ++ ) {
      edges.push({ from: nodes[x - 1].id, to: nodes[x].id })
    }

    return { edges, nodes }
  }

  componentWillReceiveProps(nextProps) {
    const { nodes, edges } = this.createNodesAndEdges(nextProps.pathway)
    this.setState({ nodes, edges })
  }

  componentDidMount() {
    this.props.actions.loadUserPathway()
  }

  render () {
    return (
      <PathwayGraph
        nodes={this.state.nodes}
        edges={this.state.edges}
        onSelectNode={this.onSelectNode}/>
    )
  }
}

const stateToProps = (state) => ({
  pathway: state.pathway.pathway
})

const dispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ sidebarSwitchToCreate, sidebarSwitchToViewNode, loadUserPathway }, dispatch)
})

export default connect(stateToProps, dispatchToProps)(Pathway)
