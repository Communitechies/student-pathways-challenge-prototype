import React from 'react'
import * as vis from 'vis'

import './style.css'

const defaultOptions = {
  height: 'none',
  width: 'none',
  edges: {
    arrows: 'to'
  },
  physics: {
    enabled: false
  },
  layout: {
    hierarchical: {
      enabled: true
    }
  },
  nodes: {
    fixed: true,
    shape: 'circle'
  }
}

export default class PathwayGraph extends React.Component {
  constructor (props) {
    super()
    
    // Generate random id so there are never id conflicts
    this.containerId = 'pathway-graph-' + Math.random().toString(36).substr(6)
    this.updateStateDataSet(props)
  }

  updateStateDataSet (props = this.props) {
    const { nodes, edges } = props
    this.nodes = new vis.DataSet(nodes)
    this.edges = new vis.DataSet(edges)
  }

  setupNetwork () {
    const options = { ...defaultOptions, ...this.props.options }
    this.network = new vis.Network(this.container, { nodes: this.nodes, edges: this.edges}, options)

    if (this.props.onSelectNode) {
      // Just return the id of the node clicked
      this.network.on('selectNode', (data) => this.props.onSelectNode(data.nodes[0]))
    }
  }

  componentDidMount () {
    this.container = document.getElementById(this.containerId)
    this.setupNetwork()
  }

  componentWillReceiveProps (props) {
    this.updateStateDataSet(props)
  }

  shouldComponentUpdate () { return false }

  render () {
    return (
      <div id={this.containerId} style={{flex: 1, display: 'flex'}}/>
    )
  }
}
